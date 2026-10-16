import { ImageResponse } from "next/og";

export const alt = "Dejvi Dervishi — Full-stack Developer, Montréal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#121212", color: "#f5f5f5", padding: "90px", borderLeft: "12px solid #c084fc" }}>
      <div style={{ display: "flex", color: "#d8b4fe", fontSize: 25, letterSpacing: 3 }}>FULL-STACK DEVELOPER</div>
      <div style={{ display: "flex", fontSize: 86, fontWeight: 700, marginTop: 32 }}>Dejvi Dervishi.</div>
      <div style={{ display: "flex", color: "#d1d5db", fontSize: 30, marginTop: 28 }}>Web applications, from interface to database.</div>
      <div style={{ display: "flex", color: "#9ca3af", fontSize: 25, marginTop: 50 }}>Montréal, Canada · dejvidervishi.com</div>
    </div>,
    size,
  );
}
