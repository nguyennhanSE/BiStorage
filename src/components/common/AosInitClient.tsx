'use client'

import { useEffect } from "react";
import { initAOS } from "@/lib/utils";

export const AOSInitClient = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return null;
}