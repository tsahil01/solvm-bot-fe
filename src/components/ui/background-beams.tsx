"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          const { width, height } = entry.contentRect;
          canvas.width = width;
          canvas.height = height;
          draw();
        }
      }
    });

    resizeObserver.observe(canvas);

    let animationFrameId: number;
    let theta = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Setting for beams
      const beamCount = 20;
      const beamWidth = 15;
      
      // Update theta
      theta += 0.004;
      
      // Draw each beam
      for (let i = 0; i < beamCount; i++) {
        const angle = (i / beamCount) * Math.PI * 2 + theta;
        const length = canvas.width * 1.5;
        
        // Starting position
        const startX = canvas.width / 2;
        const startY = canvas.height / 2;
        
        // End position
        const endX = startX + Math.cos(angle) * length;
        const endY = startY + Math.sin(angle) * length;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, "rgba(123, 97, 255, 0.5)");
        gradient.addColorStop(1, "rgba(123, 97, 255, 0)");
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beamWidth;
        ctx.stroke();
        ctx.closePath();
      }
      
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute top-0 left-0 w-full h-full opacity-30",
        className
      )}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};