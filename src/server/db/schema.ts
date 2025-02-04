// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `phoenix-flames-ls_${name}`);

// Create an enum for user roles
export const userRoleEnum = pgEnum("user_role", ["admin", "member"]);
export type UserRole = typeof userRoleEnum.enumValues[number];

export const users = createTable("user", {
  id: varchar("id", { length: 256 }).primaryKey(), // Clerk user ID
  role: userRoleEnum("role").default("member").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});
