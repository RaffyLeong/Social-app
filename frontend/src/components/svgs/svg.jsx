const NetworkSvg = (props) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="12" r="2" />
            <circle cx="12" cy="6" r="2" />
            <circle cx="18" cy="12" r="2" />
            <circle cx="12" cy="18" r="2" />
            <line x1="6" y1="12" x2="12" y2="6" />
            <line x1="12" y1="6" x2="18" y2="12" />
            <line x1="18" y1="12" x2="12" y2="18" />
            <line x1="12" y1="18" x2="6" y2="12" />
        </g>
    </svg>
);

export default NetworkSvg;