export function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative flex flex-shrink-0 items-center justify-center rounded-[18%]"
        style={{
          width: "min(78vw, 78vh)",
          height: "min(78vw, 78vh)",
          border: "3px solid var(--ink)",
          opacity: 0.07,
        }}
      >
        <span
          className="font-extrabold leading-none tracking-tight"
          style={{ fontSize: "min(30vw, 30vh)", color: "var(--ink)" }}
        >
          Di
        </span>
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: "17%",
            height: "17%",
            top: "-3%",
            right: "-3%",
            border: "3px solid var(--ink)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" style={{ width: "55%", height: "55%" }}>
            <path
              d="M5 12.5L10 17.5L19 7"
              stroke="var(--ink)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
