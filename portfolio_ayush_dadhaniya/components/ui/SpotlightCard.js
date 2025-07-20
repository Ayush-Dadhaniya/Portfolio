import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 18,
  stiffness: 350,
  mass: 1,
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 0, 0, 0.25)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const rotateAmplitude = 14;

  const handleTiltMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleTiltMouseLeave = () => {
    setOpacity(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleTiltMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleTiltMouseLeave}
      className={`relative rounded-3xl bg-neutral-900 overflow-hidden p-8 ${className}`}
      style={{
        rotateX,
        rotateY,
      }}
      tabIndex={0}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default SpotlightCard;