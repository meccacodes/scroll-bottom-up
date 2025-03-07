"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (containerRef.current?.offsetHeight) {
        window.scrollTo(0, document.body.scrollHeight);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className={styles.contentWrapper} ref={containerRef}>
        <div className={styles.sectionHeader}>
          <h1>Scroll Up</h1>
          <p>^^^^^^</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
