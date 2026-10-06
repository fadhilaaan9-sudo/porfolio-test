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

function SittingSvg() {
  return (
    <svg
      viewBox="0 0 220 260"
      className="h-auto w-full"
      fill="none"
      stroke="#1d1d1f"
      strokeWidth="7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* chair */}
      <line x1="88" y1="152" x2="88" y2="96" />
      <line x1="88" y1="152" x2="126" y2="152" />
      <line x1="106" y1="152" x2="106" y2="212" />
      <line x1="92" y1="212" x2="120" y2="212" />
      {/* desk */}
      <line x1="148" y1="122" x2="220" y2="122" />
      <line x1="212" y1="122" x2="212" y2="212" />
      {/* laptop */}
      <rect x="172" y="92" width="38" height="30" rx="3" />
      {/* back leg */}
      <line x1="106" y1="150" x2="150" y2="157" />
      <line x1="150" y1="157" x2="150" y2="209" />
      <line x1="150" y1="209" x2="164" y2="209" />
      {/* torso */}
      <line x1="108" y1="148" x2="116" y2="82" />
      {/* head + tie (nodding) */}
      <g className="typer-head">
        <circle cx="120" cy="62" r="15" />
        <line x1="118" y1="70" x2="116" y2="98" stroke="#b64400" strokeWidth="5" />
      </g>
      {/* front leg */}
      <line x1="106" y1="150" x2="158" y2="150" />
      <line x1="158" y1="150" x2="158" y2="208" />
      <line x1="158" y1="208" x2="172" y2="208" />
      {/* reaching arm */}
      <line x1="114" y1="94" x2="146" y2="118" />
      {/* typing hands */}
      <g className="typer-hands">
        <line x1="146" y1="118" x2="170" y2="116" />
        <line x1="146" y1="118" x2="168" y2="125" />
      </g>
    </svg>
  );
}

function WavingSvg() {
  return (
    <svg
      viewBox="0 0 240 280"
      className="h-auto w-full"
      fill="none"
      stroke="#1d1d1f"
      strokeWidth="7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* ground shadow */}
      <ellipse cx="122" cy="262" rx="46" ry="6" fill="#1d1d1f" stroke="none" opacity="0.35" />
      <g className="wave-bounce">
        {/* legs */}
        <line x1="122" y1="130" x2="118" y2="200" />
        <line x1="118" y1="200" x2="118" y2="244" />
        <line x1="118" y1="244" x2="134" y2="244" />
        <line x1="122" y1="130" x2="130" y2="200" />
        <line x1="130" y1="200" x2="130" y2="244" />
        <line x1="130" y1="244" x2="114" y2="244" />
        {/* torso + head + tie */}
        <line x1="124" y1="128" x2="128" y2="60" />
        <circle cx="130" cy="40" r="15" />
        <line x1="129" y1="48" x2="128" y2="76" stroke="#b64400" strokeWidth="5" />
        {/* left arm resting */}
        <line x1="128" y1="70" x2="118" y2="108" />
        <line x1="118" y1="108" x2="120" y2="136" />
        {/* right arm raised, waving */}
        <line x1="128" y1="70" x2="152" y2="44" />
        <g className="wave-hand">
          <line x1="152" y1="44" x2="168" y2="18" />
          <circle cx="168" cy="18" r="4" fill="#1d1d1f" stroke="none" />
        </g>
        {/* briefcase set down */}
        <rect x="48" y="216" width="36" height="26" rx="5" stroke="#b64400" strokeWidth="6" />
        <rect x="60" y="208" width="12" height="9" rx="2" stroke="#b64400" strokeWidth="5" />
      </g>
      {/* speech bubble */}
      <g className="wave-bubble">
        <line x1="84" y1="24" x2="110" y2="34" strokeWidth="3" />
        <rect x="8" y="6" width="78" height="32" rx="16" fill="#ffffff" strokeWidth="3" />
        <text
          x="47"
          y="27"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#1d1d1f"
          stroke="none"
          fontFamily="Inter, sans-serif"
        >
          Hire me!
        </text>
      </g>
    </svg>
  );
}

interface WalkingFigureProps {
  variant?: "walk" | "sit" | "wave";
  className?: string;
}

export default function WalkingFigure({ variant = "walk", className = "" }: WalkingFigureProps) {
  if (variant === "walk") {
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

  return (
    <div
      className="walker-decor pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className={`absolute ${className}`}>
        {variant === "sit" ? <SittingSvg /> : <WavingSvg />}
      </div>
    </div>
  );
}
