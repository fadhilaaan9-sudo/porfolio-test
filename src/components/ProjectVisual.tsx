interface ProjectVisualProps {
  accent: string;
  variant?: number;
}

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-hairline-silver px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-control-gray" />
      <span className="h-2.5 w-2.5 rounded-full bg-control-gray" />
      <span className="h-2.5 w-2.5 rounded-full bg-control-gray" />
      <div className="ml-4 h-7 flex-1 rounded-full bg-studio-mist" />
    </div>
  );
}

function Bar({ width, color = "#e6e6e8" }: { width: string; color?: string }) {
  return (
    <div className="h-2.5 rounded-full" style={{ width, backgroundColor: color }} />
  );
}

function Dashboard({ accent }: { accent: string }) {
  const bars = [42, 68, 52, 84, 60, 96, 72, 100, 64, 80];
  return (
    <div className="grid grid-cols-[56px_1fr] gap-4 p-6 md:p-8">
      <div className="space-y-3 rounded-2xl bg-studio-mist p-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-8 rounded-lg"
            style={{ backgroundColor: i === 0 ? accent : "#d6d6d6", opacity: i === 0 ? 1 : 0.5 }}
          />
        ))}
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-2xl bg-studio-mist p-3">
              <Bar width="60%" />
              <div className="h-5 w-2/3 rounded-md" style={{ backgroundColor: accent, opacity: 0.85 }} />
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-studio-mist p-4">
          <div className="flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md"
                style={{ height: `${h}%`, backgroundColor: accent, opacity: 0.35 + (h / 100) * 0.65 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 md:p-8">
      {[0, 1, 2].map((i) => (
        <div key={i} className="space-y-3">
          <div className="h-24 rounded-2xl bg-studio-mist md:h-28" />
          <Bar width="80%" />
          <Bar width="45%" color="#d6d6d6" />
        </div>
      ))}
    </div>
  );
}

function DesignSystem({ accent }: { accent: string }) {
  return (
    <div className="space-y-5 p-6 md:p-8">
      <div className="flex gap-3">
        {[accent, "#1d1d1f", "#707070", "#d6d6d6", "#f5f5f7"].map((c) => (
          <span
            key={c}
            className="h-10 w-10 rounded-full border border-hairline-silver"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="rounded-full px-5 py-2.5 text-[12px] text-white" style={{ backgroundColor: accent }}>
          Primary
        </span>
        <span className="rounded-full border border-steel px-5 py-2.5 text-[12px] text-ink">
          Secondary
        </span>
        <span className="rounded-full bg-studio-mist px-5 py-2.5 text-[12px] text-ink">
          Tertiary
        </span>
      </div>
      <div className="space-y-2">
        <p className="font-sf-pro-display text-[28px] font-semibold text-ink">Aa</p>
        <Bar width="90%" />
        <Bar width="70%" color="#d6d6d6" />
      </div>
    </div>
  );
}

function NotesApp({ accent }: { accent: string }) {
  const rows = [95, 80, 88, 70];
  return (
    <div className="space-y-3 p-6 md:p-8">
      {rows.map((w, i) => (
        <div key={i} className="flex items-center gap-4 rounded-2xl bg-studio-mist p-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {["RK", "DW", "SM", "AL"][i]}
          </span>
          <div className="flex-1 space-y-2">
            <Bar width={`${w}%`} />
            <Bar width={`${w - 25}%`} color="#d6d6d6" />
          </div>
          <span className="text-[12px] text-slate">{["09:12", "10:45", "13:20", "15:02"][i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectVisual({ accent, variant = 0 }: ProjectVisualProps) {
  const v = variant % 4;
  return (
    <div className="overflow-hidden rounded-3xl border border-hairline-silver bg-gallery-white">
      <Chrome />
      {v === 0 && <Dashboard accent={accent} />}
      {v === 1 && <Shop />}
      {v === 2 && <DesignSystem accent={accent} />}
      {v === 3 && <NotesApp accent={accent} />}
    </div>
  );
}
