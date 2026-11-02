"use client";

import { useEffect, useRef } from "react";
import type { Media } from "@/content/types";
import { asset } from "@/lib/utils";

type Props = {
  media: Media;
  className?: string;
  /** Reproduce el vídeo sólo cuando es true (si es undefined, se reproduce al verse). */
  playing?: boolean;
  eager?: boolean;
};

/** Imagen o vídeo (silenciado, en bucle) con carga diferida y pausa fuera de pantalla. */
export default function MediaView({ media, className = "", playing, eager = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (playing !== undefined) {
      if (playing) v.play().catch(() => {});
      else v.pause();
      return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.2 });
    obs.observe(v);
    return () => obs.disconnect();
  }, [playing]);

  if (media.type === "video") {
    return (
      <video
        ref={ref}
        className={className}
        src={asset(media.src)}
        poster={media.poster ? asset(media.poster) : undefined}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "metadata"}
        aria-label={media.alt}
      />
    );
  }
  return (
    <img
      className={className}
      src={asset(media.src)}
      alt={media.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
