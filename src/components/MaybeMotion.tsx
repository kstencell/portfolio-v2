"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";
import { useIsMobile } from "@/context/ViewportContext";

type MaybeMotionProps = React.PropsWithChildren<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;

const MaybeMotion: React.FC<MaybeMotionProps> = ({ children, ...props }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Remove motion-specific props for plain div
    const {
      initial,
      animate,
      exit,
      whileInView,
      transition,
      viewport,
      className,
    } = props;
    return <div className={className}>{children}</div>;
  }

  return <motion.div {...props}>{children}</motion.div>;
};

export default MaybeMotion;
