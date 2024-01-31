"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
type Props = {};

export default function HeroPage({}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  return <div ref={targetRef}>HeroPage</div>;
}
