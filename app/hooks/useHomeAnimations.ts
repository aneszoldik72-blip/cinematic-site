"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHomeAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
  ".hero-eyebrow, .hero-title, .hero-text, .hero-button, .hero-stat-card",
  {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      });

      gsap.to(".hero-glow-1", {
        x: 120,
        y: -80,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-2", {
        x: -100,
        y: 90,
        scale: 0.85,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".about-eyebrow, .about-title, .about-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      gsap.from(".about-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
        },
      });

      gsap.from(".showcase-eyebrow, .showcase-title, .showcase-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".showcase-content",
          start: "top 80%",
        },
      });

      gsap.from(".showcase-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".showcase-grid",
          start: "top 80%",
        },
      });

      gsap.from(".cta-content", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
}