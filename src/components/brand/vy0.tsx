export const BrandSvg = () => {
    return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="42" height="42">
                <defs>

                    <linearGradient id="zero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="50%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>

                    <filter id="agentic-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.9"/>
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFFFFF" floodOpacity="0.15"/>
                    </filter>
                </defs>

                {/* <rect width="100%" height="100%" fill="#000000" /> */}

                <g opacity="0.9">
                    <rect x="185" y="120" width="130" height="200" rx="65" fill="none" stroke="url(#zero-grad)" strokeWidth="24" />
                    <rect x="185" y="120" width="130" height="200" rx="65" fill="none" stroke="#64748B" strokeWidth="2" opacity="0.3" />
                </g>
                <g filter="url(#agentic-glow)" fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 135 160 L 185 280 L 235 160"/>
                    <path d="M 265 160 L 315 280"/>
                    <path d="M 365 160 L 265 400"/>
                </g>
            </svg>
    )
}