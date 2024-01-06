"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentNode = domRef.current;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!isVisible && entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
          }
        }),
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    );

    if (!currentNode) {
      return;
    }

    // 确保 domRef.current 不为 null

    observer.observe(currentNode);

    return () => {
      if (currentNode) {
        observer.unobserve(currentNode);
      }
    };
  }, []);

  return (
    <div
      className={cn({
        "duration-1000 animate-in fade-in slide-in-from-bottom-5": isVisible,
      })}
      ref={domRef}
    >
      {children}
    </div>
  );
}
