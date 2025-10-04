"use client";
import { useMediaQuery } from "@/_hooks/useMediaQuery";
import Slide2large from "./Slide2large";
import Slide2small from "./Slide2small";
export default function Slide1() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return isLargeScreen ? <Slide2large /> : <Slide2small />;
}
