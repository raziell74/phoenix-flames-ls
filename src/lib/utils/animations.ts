"use client";

import { useEffect, useState, type RefObject } from "react";

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = {},
  callback?: (entry: IntersectionObserverEntry) => void,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (callback) callback(entry);
        observer.unobserve(element); // Stop observing once animated
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [elementRef, options, callback]);

  return { isIntersecting }
} 