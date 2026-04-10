import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
            color: "white",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          A
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}