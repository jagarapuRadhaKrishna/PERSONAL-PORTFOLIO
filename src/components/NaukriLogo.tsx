export function NaukriLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Naukri.com logo - Blue circle with white N */}
      <circle cx="50" cy="50" r="48" fill="#4A90E2" />
      <text
        x="50"
        y="65"
        fontSize="60"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        N
      </text>
    </svg>
  );
}
