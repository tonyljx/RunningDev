"use client";
import React from "react";
import { Button } from "../button";
import confetti from "canvas-confetti";

type Props = {};

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  scalar?: number;
  // 更多 confetti 的可用选项...
}

const count = 200;
const defaults = {
  origin: { y: 0.5 },
  ticks: 500,
};

export default function Confetti({}: Props) {
  // https://www.kirilv.com/canvas-confetti/
  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  function handleConfetti() {
    // confetti({
    //   particleCount: 500,
    //   spread: 100,
    //   origin: { y: 0.5 },
    //   ticks: 500,
    // });

    fire(0.8, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <Button onClick={handleConfetti} className="flex items-center gap-3">
        🎉 Click Me
      </Button>
    </div>
  );
}
