"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHomeAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.from(
        ".hero-eyebrow, .hero-title, .hero-text, .hero-button, .hero-stat-card",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        }
      );

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

      gsap.from(".hero-device", {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".hero-device", {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-float-left", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-float-right", {
        y: 12,
        duration: 3.4,
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

    const heroVisual = document.querySelector(".hero-visual");
    const heroDevice = document.querySelector(".hero-device");
    const customCursor = document.querySelector(".custom-cursor");
    const navbar = document.querySelector(".navbar");
    const interactiveElements = document.querySelectorAll(
      "a, button, .about-card, .showcase-item"
    );

    const handleMove = (event: MouseEvent) => {
      if (!heroVisual || !heroDevice) return;

      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroDevice, {
        rotateY: -14 + x * 12,
        rotateX: 8 - y * 10,
        x: x * 18,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      if (!heroDevice) return;

      gsap.to(heroDevice, {
        rotateY: -14,
        rotateX: 8,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleCursorMove = (event: MouseEvent) => {
      if (!customCursor) return;

      gsap.to(customCursor, {
        x: event.clientX,
        y: event.clientY,
        opacity: 1,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const handleCursorLeave = () => {
      if (!customCursor) return;

      gsap.to(customCursor, {
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const activateCursor = () => {
      if (!customCursor) return;
      customCursor.classList.add("active");
    };

    const deactivateCursor = () => {
      if (!customCursor) return;
      customCursor.classList.remove("active");
    };

    const handleNavbarScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    if (heroVisual && heroDevice) {
      heroVisual.addEventListener("mousemove", handleMove);
      heroVisual.addEventListener("mouseleave", handleLeave);
    }

    window.addEventListener("mousemove", handleCursorMove);
    document.addEventListener("mouseleave", handleCursorLeave);
    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", activateCursor);
      element.addEventListener("mouseleave", deactivateCursor);
    });

    return () => {
      if (heroVisual && heroDevice) {
        heroVisual.removeEventListener("mousemove", handleMove);
        heroVisual.removeEventListener("mouseleave", handleLeave);
      }

      window.removeEventListener("mousemove", handleCursorMove);
      document.removeEventListener("mouseleave", handleCursorLeave);
      window.removeEventListener("scroll", handleNavbarScroll);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", activateCursor);
        element.removeEventListener("mouseleave", deactivateCursor);
      });

      ctx.revert();
    };
  }, []);
}