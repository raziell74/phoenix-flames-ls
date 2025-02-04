import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { userRoleEnum, type UserRole } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { users } from "~/server/db/schema";
import { TRPCError } from "@trpc/server";

// Create a Zod enum from the userRoleEnum values
const roleEnum = z.enum(userRoleEnum.enumValues as [UserRole, ...UserRole[]]);

export const userRouter = createTRPCRouter({
  // Get all users
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.users.findMany();
  }),

  // Get a single user by ID
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db
        .select()
        .from(users)
        .where(eq(users.id, input.id));

      if (!user.length) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return user[0];
    }),

  // Update user role - restricted to admin users only
  updateRole: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        role: roleEnum,
      })
    )
    .mutation(async ({ ctx, input }) => {
      // First check if the current user is an admin
      const currentUser = await ctx.db
        .select()
        .from(users)
        .where(eq(users.id, ctx.auth.userId));

      if (!currentUser.length || currentUser[0]?.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can update user roles",
        });
      }


      return await ctx.db
        .update(users)
        .set({ role: input.role })
        .where(eq(users.id, input.userId))
        .returning();
    }),

  // Create user (typically called when a new user signs up)
  create: protectedProcedure
    .input(
      z.object({
        id: z.string(), // Clerk user ID
        role: roleEnum.default("member"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(users).values({
        id: input.id,
        role: input.role,
      }).returning();
    }),

  // Delete user
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if current user is admin
      const currentUser = await ctx.db
        .select()
        .from(users)
        .where(eq(users.id, ctx.auth.userId));

      if (!currentUser.length || currentUser[0]?.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can delete users",
        });
      }


      return await ctx.db
        .delete(users)
        .where(eq(users.id, input.id))
        .returning();
    }),
}); 