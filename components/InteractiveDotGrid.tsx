"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Handle High DPI screens for crisp dots
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      
      initGrid();
    };

    let dots: Dot[] = [];
    const spacing = 40; // The space between dots
    const radius = 1.5; // Size of each dot

    // Mouse tracking - defaulting off-screen
    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    // When the mouse leaves the window, reset the position
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("resize", setCanvasSize);

    class Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        const maxDistance = 150; // Radius within which dots react
        
        // Calculate push force (stronger when closer to mouse)
        let force = (maxDistance - distance) / maxDistance;
        if (force < 0) force = 0;
        
        const pushFactor = 40; // Maximum distance a dot can be pushed
        
        // Calculate target positions (where the dot *wants* to be)
        let targetX = this.baseX;
        let targetY = this.baseY;
        
        if (distance < maxDistance) {
            targetX = this.baseX - forceDirectionX * force * pushFactor;
            targetY = this.baseY - forceDirectionY * force * pushFactor;
        }

        // Apply elastic "spring" force to return to target position
        const returnForce = 0.1;
        this.x += (targetX - this.x) * returnForce;
        this.y += (targetY - this.y) * returnForce;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        
        // Calculate dynamic opacity based on distance to mouse
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const maxDist = 200;
        let opacity = 0.15; // Unlit state (very faint)
        if (dist < maxDist) {
            // Lights up as mouse approaches
            opacity = 0.15 + (0.5 * (1 - dist / maxDist));
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    const initGrid = () => {
      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      
      // Center the grid elements
      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push(new Dot(offsetX + i * spacing, offsetY + j * spacing));
        }
      }
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        dots[i].update();
        dots[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
