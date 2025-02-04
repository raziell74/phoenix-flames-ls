/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "~/components/ui/button";

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
        <div className="relative flex h-full items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-6xl font-extrabold text-white md:text-8xl">
              Phoenix <span className="text-[#a03c26]">Flames</span>
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Join the most prestigious FFXI guild on Phoenix Server
            </p>
            <Button 
              className="bg-gradient-to-r from-[#ae722b] to-[#a03c26] text-white hover:opacity-90"
              size="lg"
            >
              Join Our Guild
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <motion.div 
        ref={section1Ref}
        className="bg-gradient-to-r from-[#ae722b]/10 to-[#a03c26]/10 py-24"
        initial={{ opacity: 0, x: -100 }}
        animate={{ 
          opacity: section1InView ? 1 : 0,
          x: section1InView ? 0 : -100
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Our Legacy</h2>
              <p className="text-lg">
                Founded in the realm of Alexandria, Phoenix Flames has grown into one of
                the most respected guilds in Final Fantasy IX. Our members come from all
                corners of Gaia, united by our passion for adventure and camaraderie.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/guild-gathering.jpg"
                alt="Guild Gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        ref={section2Ref}
        className="py-24"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: section2InView ? 1 : 0,
          x: section2InView ? 0 : 100
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Why Join Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-gradient-to-br from-[#ae722b]/20 to-[#a03c26]/20 p-6"
              >
                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        ref={section3Ref}
        className="relative py-24"
        initial={{ opacity: 0, y: 50 }}
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
          <h2 className="mb-6 text-4xl font-bold">Ready for Adventure?</h2>
          <p className="mb-8 text-lg">
            Join Phoenix Flames today and become part of our legendary journey
          </p>
          <Button 
            className="bg-gradient-to-r from-[#ae722b] to-[#a03c26] text-white hover:opacity-90"
            size="lg"
          >
            Apply Now
          </Button>
        </div>
      </motion.div>
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
