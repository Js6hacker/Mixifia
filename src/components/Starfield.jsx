import React, { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let stars = [];
    let particles = [];
    let mouse = { x: null, y: null };

    // Setup canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const starCount = 120;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speedX: (Math.random() - 0.5) * 0.05,
        speedY: (Math.random() - 0.5) * 0.05
      });
    }

    const musicSymbols = ['🎵', '🎶', '♩', '𝅘𝅥𝅯', '♬', '♫', '♪'];

    // Track mouse movements
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Rate limit particle spawn (e.g. only spawn on movement steps)
      if (Math.random() < 0.25) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          text: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
          size: Math.random() * 12 + 12, // 12px to 24px
          opacity: 1,
          vx: (Math.random() - 0.5) * 1.5, // gentle side drift
          vy: -Math.random() * 1.5 - 0.8, // float upwards
          rotation: Math.random() * Math.PI * 2,
          vRotation: (Math.random() - 0.5) * 0.05 // rotation rate
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around boundaries
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with opacity
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and update music particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRotation;
        p.opacity -= 0.015; // slow fade

        if (p.opacity <= 0) {
          particles.splice(idx, 1);
          return;
        }

        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px Arial`;
        
        // Add neon soundwave glow to music particles
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;

        // Draw rotated music symbol
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        // Fill style gradient (cyan/violet transition)
        ctx.fillStyle = idx % 2 === 0 ? '#06b6d4' : '#7c3aed';
        ctx.fillText(p.text, -p.size / 2, p.size / 2);
        ctx.restore();

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }} 
    />
  );
}
