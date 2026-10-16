import Image from "next/image";

export default function CompanyLogo({ src, company, small = false }) {
  const isWebisoft = company === "Webisoft";

  return (
    <span
      data-company-logo={company}
      className={`company-logo inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ${small ? "h-9 w-9" : "h-14 w-14"} ${isWebisoft ? "bg-[#ff5757] p-1.5" : "border border-white/15 bg-white p-2.5"}`}
    >
      <Image
        src={src}
        alt=""
        width={small ? 24 : 44}
        height={small ? 24 : 44}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
