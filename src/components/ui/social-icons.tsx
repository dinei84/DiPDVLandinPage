export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.85-1.27A9.5 9.5 0 1 0 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 7.8c.2-.4.5-.4.7-.4h.5c.17 0 .38 0 .55.4.2.47.65 1.62.7 1.74.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.25-.1.5.14.24.6 1 1.3 1.6.9.8 1.6 1.05 1.85 1.17.25.12.4.1.55-.06.16-.16.65-.75.82-1 .17-.26.34-.22.56-.13.23.08 1.46.69 1.7.82.25.12.4.18.47.28.06.1.06.6-.14 1.18-.2.58-1.16 1.1-1.6 1.16-.43.06-.85.24-2.87-.6-2.43-1.02-3.97-3.5-4.1-3.66-.11-.16-.94-1.25-.94-2.38 0-1.13.6-1.68.8-1.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.8 8.4h1.4V6h-1.9c-1.5 0-2.5 1-2.5 2.6v1.5H9.4v2.4h1.4V18h2.4v-5.5h1.6l.3-2.4h-1.9V8.9c0-.35.2-.5.6-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
