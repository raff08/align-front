export const AlignLogo = ({ className = "text-white" }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 17l-5-5 5-5"></path>
    <path d="M17 7l5 5-5 5"></path>
    <path d="M14 17H2"></path>
    <path d="M10 7h12"></path>
  </svg>
);