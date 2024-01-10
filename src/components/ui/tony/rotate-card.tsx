"use client";
import React, { useRef, useState } from "react";
import styles from "./rotate-card.module.css";
import { cn } from "@/lib/utils";
import { Card } from "../card";
type Props = {};

export default function RotateCard({}: Props) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [degree, setDegree] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // 业务规则1,鼠标超过中线,旋转一定的角度,左边就翘左,右边就翘右
    // 业务规则2：设置最大的角度是10,然后就可以设置y的程度，乘对应的比例
    if (!cardRef.current) {
      return;
    }
    const cardRect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - cardRect.left - cardRect.width / 2; // 鼠标在X轴上的偏移
    const mouseY = e.clientY - cardRect.top - cardRect.height / 2; // 鼠标在Y轴上的偏移

    const maxRotateX = 10; // 设置最大旋转角度
    const maxRotateY = -10; // 设置最大旋转角度

    // 计算鼠标在卡片上的X和Y坐标偏移与最大旋转角度的比例
    const degreeX = (mouseY / (cardRect.height / 2)) * maxRotateX;
    const degreeY = (mouseX / (cardRect.width / 2)) * maxRotateY;

    // 根据鼠标位置设置旋转角度
    setRotateX(degreeX);
    setRotateY(degreeY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Card
      className={cn(
        "card  rounde-lg h-72 w-96 transform cursor-pointer  p-4 text-center transition-transform duration-300",
        // styles.container,
      )}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: `transform 0.3s ease 0s`,
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <p>Hover Me</p>
      <div className="flex flex-col">
        <span>degree {degree}</span>
      </div>
    </Card>
  );
}
