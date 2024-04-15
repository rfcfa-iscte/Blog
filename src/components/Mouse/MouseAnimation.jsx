import React, { useEffect } from "react";
import "./mouseAnimation.css";

function MouseAnimation() {
  return useEffect(() => {
    let start = new Date().getTime();
    const originPosition = { x: 0, y: 0 };
    const last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition,
    };
    const config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ["249 146 253", "252 254 255"],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"],
    };

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const withUnit = (value, unit) => `${value}${unit}`,
      px = (value) => withUnit(value, "px"),
      ms = (value) => withUnit(value, "ms");

    const calcDistance = (a, b) => {
      const diffX = b.x - a.x,
        diffY = b.y - a.y;

      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };

    const calcElapsedTime = (start, end) => end - start;

    const appendElement = (element) => document.body.appendChild(element),
      removeElement = (element, delay) =>
        setTimeout(() => document.body.removeChild(element), delay);

    const createStar = (position) => {
      const star = document.createElement("span");
      const color = `rgb(${rand(0, 255)} ${rand(0, 255)} ${rand(0, 255)})`;

      star.className = "star fa-solid fa-sparkle";
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = `${rand(10, 40)}px`;
      star.style.color = color;
      star.style.textShadow = `0px 0px 1.5rem ${color}33`;
      star.style.animationName = `fall-${rand(1, 3)}`;
      star.style.animationDuration = ms(config.starAnimationDuration);

      appendElement(star);

      removeElement(star, config.starAnimationDuration);
    };

    const createGlowPoint = (position) => {
      const glow = document.createElement("div");

      glow.className = "glow-point";

      glow.style.left = px(position.x);
      glow.style.top = px(position.y);

      appendElement(glow);

      removeElement(glow, config.glowDuration);
    };

    const determinePointQuantity = (distance) =>
      Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

    const createGlow = (last, current) => {
      const distance = calcDistance(last, current);
      const quantity = determinePointQuantity(distance);

      const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;

      Array.from(Array(quantity)).forEach((_, index) => {
        const x = last.x + dx * index,
          y = last.y + dy * index;

        createGlowPoint({ x, y });
      });
    };

    const updateLastStar = (position) => {
      last.starTimestamp = new Date().getTime();
      last.starPosition = position;
    };

    const updateLastMousePosition = (position) =>
      (last.mousePosition = position);

    const adjustLastMousePosition = (position) => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };

    const handleMouseMove = (e) => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const mouseX = e.clientX;
      const mouseY = e.clientY + scrollTop;

      adjustLastMousePosition({ x: mouseX, y: mouseY });

      const now = new Date().getTime();
      const hasMovedFarEnough =
        calcDistance(last.starPosition, last.mousePosition) >=
        config.minimumDistanceBetweenStars;
      const hasBeenLongEnough =
        calcElapsedTime(last.starTimestamp, now) >
        config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(last.mousePosition);
        updateLastStar(last.mousePosition);
      }

      createGlow(last.mousePosition, { x: mouseX, y: mouseY });
      updateLastMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.onmousemove = (e) => handleMouseMove(e);

    window.ontouchmove = (e) => handleMouseMove(e.touches[0]);

    document.body.onmouseleave = () => updateLastMousePosition(originPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}

export default MouseAnimation;
