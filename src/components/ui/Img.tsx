/* eslint-disable @next/next/no-img-element */
type Props = { src: string; alt: string; className?: string; eager?: boolean; zoom?: boolean };

export function Img({ src, alt, className = "", eager = false, zoom = false }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      className={`h-full w-full object-cover ${zoom ? "zoom-img" : ""} ${className}`}
    />
  );
}
