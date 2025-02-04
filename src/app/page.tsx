/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/components/ui/card";
import t from "~/components/ui/typography";
import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="parallax absolute inset-0" style={{
          backgroundImage: "url('/images/fantasy-city.jpg')",
          filter: "brightness(0.6)"
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ae722b]/90" />
        <div className="relative flex flex-col h-full items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <t.h1 className="mb-6 text-8xl lg:text-8xl md:text-8xl font-fondamento tracking-wide">
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Phoenix
              </span>{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-700 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Flames
              </span>
            </t.h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <t.p className="mb-8 text-xl text-white/90 font-crimson">
              Join the most prestigious FFXI guild on Phoenix Server
            </t.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Button 
              className="bg-gradient-to-r from-[#ae722b] to-[#a03c26] text-white hover:opacity-90"
              size="lg"
            >
              Join Our Link Shell <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
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
                  x: section1InView ? 0 : -100
                }}
                transition={{ 
                  duration: section1InView ? 0.8 : 0,
                  ease: "easeOut",
                  delay: section1InView ? 0.2 : 0
                }}
              >
                <t.h2 className="font-grenze">Our Legacy</t.h2>
                <motion.p
                  className="space-y-4 text-lg"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ 
                    opacity: section1InView ? 1 : 0,
                    x: section1InView ? 0 : -100
                  }}
                  transition={{ 
                    duration: section1InView ? 0.8 : 0,
                    ease: "easeOut",
                    delay: section1InView ? 0.2 : 0 
                  }}
                >
                    Founded in the realm of Alexandria, Phoenix Flames has grown into one of
                    the most respected guilds in Final Fantasy IX. Our members come from all
                    corners of Gaia, united by our passion for adventure and camaraderie.
                </motion.p>
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg"

                initial={{ opacity: 0, x: 125 }}
                animate={{ 
                  opacity: section1InView ? 1 : 0,
                  x: section1InView ? 0 : 125
                }}
                transition={{ 
                  duration: section1InView ? 0.8 : 0,
                  ease: "easeOut",
                  delay: section1InView ? 0.5 : 0 
                }}
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="/images/guild-gathering.jpg"
                    alt="Guild Gathering"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="overflow-hidden">
        <div className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              ref={section2Ref}
              initial={{ opacity: 0, y: -40 }}
              animate={{ 
                opacity: section2InView ? 1 : 0,
                y: section2InView ? 0 : -40
              }}
              transition={{ 
                duration: section2InView ? 0.8 : 0,
                ease: "easeOut",
                delay: section2InView ? 0.5 : 0
              }}
            >
              <t.h1 className="mb-12 text-center font-bold">
                Why Join Us?
              </t.h1>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ 
                    opacity: section2InView ? 1 : 0,
                    y: section2InView ? 0 : -40
                  }}
                  transition={{ 
                    duration: section2InView ? 0.8 : 0,
                    ease: "easeOut",
                    delay: section2InView ? (0.5 + ((index + 1) * 0.25)) : 0
                  }}
                >

                  <Card className="bg-gradient-to-br from-[#ae722b]/10 to-[#a03c26]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {feature.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="overflow-hidden">
        <motion.div 
          ref={section3Ref}
          className="relative py-24"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: section3InView ? 1 : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="parallax absolute inset-0" style={{
            backgroundImage: "url('/images/fantasy-battle.jpg')",
            filter: "brightness(0.4)"
          }} />
          <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h2
              className="mb-6 text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20
              }}
              transition={{ 
                duration: section3InView ? 0.8 : 0,
                ease: "easeOut",
                delay: section3InView ? 0.5 : 0 
              }}
            >
              Ready for Adventure?
            </motion.h2>
            <motion.p
              className="mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20
              }}
              transition={{ 
                duration: section3InView ? 0.8 : 0,
                ease: "easeOut",
                delay: section3InView ? 1.0 : 0 
              }}
            >
              Join Phoenix Flames today and become part of our legendary journey
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: section3InView ? 1 : 0,
                y: section3InView ? 0 : 20
              }}
              transition={{ 
                duration: section3InView ? 0.8 : 0,
                ease: "easeOut",
                delay: section3InView ? 1.5 : 0 
              }}
            >
              <Button 
                className="bg-gradient-to-r from-[#ae722b] to-[#a03c26] text-white hover:opacity-90"
                size="lg"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Weekly Raids",
    description: "Join our organized raids to challenge the most difficult content in FFXI.",
  },
  {
    title: "Active Community",
    description: "Engage with friendly players in our vibrant Discord community.",
  },
  {
    title: "Guild Events",
    description: "Participate in regular events, from treasure hunts to PvP tournaments.",
  },
];
