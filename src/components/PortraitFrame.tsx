/** Arched, gold-framed portrait used for the bride & groom pages. */
export default function PortraitFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mb-4 h-44 w-36 overflow-hidden rounded-t-[4.5rem] rounded-b-2xl border-4 border-gold/70 shadow-[0_12px_30px_-10px_rgba(122,30,30,0.5)] sm:mb-6 sm:h-64 sm:w-52">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
