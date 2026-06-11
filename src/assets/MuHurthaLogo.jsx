export default function MuHurthaLogo({ className = '' }) {
  return (
    <picture className={className}>
      <source srcSet="/assets/muhurtha-devine-works-logo.avif" type="image/avif" />
      <source srcSet="/assets/muhurtha-devine-works-logo.webp" type="image/webp" />
      <img
        src="/assets/muhurtha-devine-works-logo.jpg"
        alt="Muhurtha Divine Works"
        className={`h-auto w-[220px] object-contain [filter:sepia(5%)_saturate(110%)_brightness(105%)_contrast(105%)] md:w-[300px] ${className}`}
        loading="eager"
        decoding="sync"
      />
    </picture>
  );
}
