type SizeGroup = {
  size: string;       // e.g. "25"
  variants: string[]; // e.g. ["25×2.5", "25×3", ...]
};

export default function GroupedSizeTable({
  title,
  groups,
  leftHeader = "Leg (mm)",
  rightHeader = "Section (mm)",
}: {
  title: string;
  groups: SizeGroup[];
  leftHeader?: string;
  rightHeader?: string;
}) {
  // Flatten so we can keep consistent striping + add "group start" styling
  const rows: Array<{
    size: string;
    variant: string;
    isFirst: boolean;
    span: number;
    groupIndex: number;
    rowInGroup: number;
  }> = groups.flatMap((g, gi) =>
    g.variants.map((variant, ri) => ({
      size: g.size,
      variant,
      isFirst: ri === 0,
      span: g.variants.length,
      groupIndex: gi,
      rowInGroup: ri,
    }))
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Specification Table
          </div>
          <div className="mt-1 text-base font-bold text-foreground">{title}</div>
        </div>

        <span className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
          {groups.length} sizes
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="bg-background/60 backdrop-blur border-b border-border">
              <th className="w-[160px] px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                {leftHeader}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                {rightHeader}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, idx) => {
              const isGroupStart = r.isFirst;
              const striped = idx % 2 === 0;

              return (
                <tr
                  key={`${r.size}-${r.variant}-${idx}`}
                  className={[
                    "border-t border-border",
                    striped ? "bg-background/30" : "bg-muted/15",
                    "hover:bg-accent/10 transition-colors",
                    isGroupStart ? "border-t-2" : "",
                  ].join(" ")}
                >
                  {/* Left pinned cell (rowspan) */}
                  {r.isFirst && (
                    <td
                      rowSpan={r.span}
                      className={[
                        "px-6 py-5 align-middle font-bold text-foreground",
                        "bg-background/35",
                        "sticky left-0 z-[1]", // keeps size column visible while scrolling
                        "border-r border-border",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        {/* mini marker */}
                        <span className="h-2 w-2 rounded-full bg-primary/70" />
                        <span className="text-lg leading-none">{r.size}</span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          mm
                        </span>
                      </div>

                      {/* tiny helper text */}
                      <div className="mt-2 text-[11px] font-medium text-muted-foreground">
                        {r.span} variants
                      </div>
                    </td>
                  )}

                  {/* Variant cell */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-between gap-3">
                      {/* pill */}
                      <span
                        className="
                          inline-flex items-center rounded-xl border border-border
                          bg-background/40 px-3 py-1.5
                          font-semibold text-foreground
                        "
                      >
                        {r.variant.replaceAll("×", "×")}
                      </span>

                
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div className="border-t border-border text-center px-6 py-4 text-xs text-muted-foreground">
        Standard sizes shown. Custom sizes available on request.
      </div>
    </div>
  );
}
