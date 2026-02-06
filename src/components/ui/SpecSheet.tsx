interface SpecSheetStat {
  label: string;
  value: string;
}

interface SpecSheetProps {
  title?: string;
  stats: SpecSheetStat[];
  className?: string;
}

export function SpecSheet({
  title = "Cape Bridge — At a Glance",
  stats,
  className = "",
}: SpecSheetProps) {
  return (
    <div
      className={`overflow-hidden rounded-[2px] border border-blueprint/40 ${className}`}
    >
      {/* Header bar */}
      <div className="bg-navy px-4 py-3">
        <span className="text-sm font-medium tracking-[0.02em] text-white">
          {title}
        </span>
      </div>

      {/* Stats list with dotted leaders */}
      <div className="bg-background p-4">
        <ul className="space-y-3">
          {stats.map((stat) => (
            <li key={stat.label} className="flex items-baseline gap-2">
              <span className="shrink-0 text-sm font-medium text-navy">
                {stat.label}
              </span>
              <span className="min-w-8 flex-grow border-b border-dotted border-blueprint/40" />
              <span className="shrink-0 text-sm text-muted-foreground">
                {stat.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
