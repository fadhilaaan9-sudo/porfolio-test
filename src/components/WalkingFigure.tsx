function WalkerSvg() {
  return (
    <svg
      viewBox="0 0 200 260"
      className="h-auto w-full"
      fill="none"
      stroke="#1d1d1f"
      strokeWidth="7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* ground shadow */}
      <ellipse
        className="walker-shadow"
        cx="122"
        cy="244"
        rx="54"
        ry="7"
        fill="#1d1d1f"
        stroke="none"
      />
      {/* back leg */}
      <g className="walker-leg-b">
        <line x1="122" y1="120" x2="110" y2="170" />
        <line x1="110" y1="170" x2="112" y2="222" />
        <line x1="112" y1="222" x2="96" y2="222" />
      </g>
      {/* back arm */}
      <g className="walker-arm-b">
        <line x1="128" y1="62" x2="110" y2="100" />
        <line x1="110" y1="100" x2="114" y2="128" />
      </g>
      {/* torso + head + tie */}
      <g className="walker-torso">
        <line x1="130" y1="48" x2="122" y2="120" />
        <circle cx="134" cy="30" r="15" />
        <line x1="130" y1="54" x2="127" y2="84" stroke="#b64400" strokeWidth="5" />
      </g>
      {/* front leg */}
      <g className="walker-leg-a">
        <line x1="122" y1="120" x2="134" y2="172" />
        <line x1="134" y1="172" x2="132" y2="224" />
        <line x1="132" y1="224" x2="148" y2="224" />
      </g>
      {/* front arm + briefcase */}
      <g className="walker-arm-a">
        <line x1="128" y1="62" x2="148" y2="102" />
        <line x1="148" y1="102" x2="144" y2="130" />
        <rect x="140" y="121" width="12" height="10" rx="2" stroke="#b64400" strokeWidth="5" />
        <rect x="126" y="130" width="36" height="26" rx="5" stroke="#b64400" strokeWidth="6" />
      </g>
    </svg>
  );
}

export default function WalkingFigure() {
  return (
    <div
      className="walker-decor pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* main figure */}
      <div
        className="walker-traverse absolute bottom-8 left-0 w-[120px] opacity-[0.16] md:w-[150px]"
        style={{ animationDuration: "30s" }}
      >
        <div className="walker-bob">
          <WalkerSvg />
        </div>
      </div>
      {/* distant figure, for depth */}
      <div
        className="walker-traverse absolute bottom-28 left-0 w-[80px] opacity-[0.1] md:w-[100px]"
        style={{ animationDuration: "44s", animationDelay: "-20s" }}
      >
        <div className="walker-bob" style={{ animationDelay: "-0.3s" }}>
          <WalkerSvg />
        </div>
      </div>
    </div>
  );
}
