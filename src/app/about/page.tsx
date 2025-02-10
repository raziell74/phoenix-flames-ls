"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import t from "~/components/ui/typography";
import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function About() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="parallax absolute inset-0"
          style={{
            backgroundImage: "url('/images/fantasy-castle.jpg')",
            filter: "brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ae722b]/90" />
        <div className="relative flex h-full flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <t.h1 className="font-fondamento mb-6 text-6xl tracking-wide">
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                About Phoenix Flames
              </span>
            </t.h1>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="overflow-hidden">
        <div
          ref={section1Ref}
          className="bg-gradient-to-r from-[#ae722b]/10 to-[#a03c26]/10 py-24"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: section1InView ? 1 : 0,
                  x: section1InView ? 0 : -100,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <t.h2 className="font-grenze">Our History</t.h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Founded in 2004, Phoenix Flames began as a small group of
                    adventurers on the Phoenix server. What started as a handful
                    of friends helping each other through content has grown into
                    one of the most respected guilds in FFXI.
                  </p>
                  <p>
                    Over the years, we&apos;ve conquered countless challenges,
                    from the depths of Dynamis to the heights of Sky. Our
                    achievements are matched only by the bonds we&apos;ve forged
                    along the way.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: 125 }}
                animate={{
                  opacity: section1InView ? 1 : 0,
                  x: section1InView ? 0 : 125,
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="/images/guild-history.jpg"
                    alt="Guild History"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="overflow-hidden">
        <div className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              ref={section2Ref}
              initial={{ opacity: 0, y: -40 }}
              animate={{
                opacity: section2InView ? 1 : 0,
                y: section2InView ? 0 : -40,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <t.h2 className="font-grenze mb-12 text-center">
                Guild Leadership
              </t.h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {leaders.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{
                    opacity: section2InView ? 1 : 0,
                    y: section2InView ? 0 : -40,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + (index + 1) * 0.25,
                  }}
                >
                  <Card className="bg-gradient-to-br from-[#ae722b]/10 to-[#a03c26]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {leader.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {leader.role}
                      </p>
                      <p>{leader.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="overflow-hidden">
        <motion.div
          ref={section3Ref}
          className="relative py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: section3InView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="parallax absolute inset-0"
            style={{
              backgroundImage: "url('/images/fantasy-tavern.jpg')",
              filter: "brightness(0.4)",
            }}
          />
          <div className="container relative mx-auto px-4 text-center text-white">
            <motion.h2
              className="mb-6 text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Be Part of Our Story
            </motion.h2>
            <motion.p
              className="mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Looking for a guild that values both achievement and community?
              Phoenix Flames might be your new home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button
                className="bg-gradient-to-r from-[#ae722b] to-[#a03c26] text-white hover:opacity-90"
                size="lg"
              >
                Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

const leaders = [
  {
    name: "Zephyr Stormwind",
    role: "Guild Master",
    description:
      "Leading Phoenix Flames since its founding, Zephyr brings years of MMO experience and a passion for building strong communities.",
  },
  {
    name: "Luna Brightstar",
    role: "Raid Leader",
    description:
      "A tactical genius who has led our raid teams to countless victories while maintaining a positive and encouraging environment.",
  },
  {
    name: "Atlas Ironheart",
    role: "Community Manager",
    description:
      "The heart of our community, Atlas ensures that every member feels welcome and has a voice in guild matters.",
  },
];
