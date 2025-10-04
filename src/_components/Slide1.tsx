"use client";
import { useMediaQuery } from "@/_hooks/useMediaQuery";
import Slide1large from "./Slide1large";
import Slide1small from "./Slide1small";

export default function Slide1() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return isLargeScreen ? <Slide1large /> : <Slide1small />;
}
