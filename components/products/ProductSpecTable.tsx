interface Spec {
  label: string;
  value: string;
}

interface ProductSpecTableProps {
  specs: Spec[];
}

function SpecValue({ value }: { value: string }) {
  const v = (value ?? "").trim();

  // Split into lines (supports your "\n" values)
  const lines = v.split("\n").map((s) => s.trim()).filter(Boolean);

  // If it looks like a "matrix" (many lines + has ":"), render as a nice list
  const isMatrix = lines.length >= 2 && lines.some((l) => l.includes(":"));

  if (isMatrix) {
    return (
      <ul className="space-y-2">
        {lines.map((line, i) => {
          const [left, ...rest] = line.split(":");
          const right = rest.join(":").trim();

          return (
            <li key={i} className="flex gap-3">
              <span className="min-w-[86px] font-semibold text-slate-800 dark:text-slate-100">
                {left.trim()}
              </span>
              <span className="text-slate-700 dark:text-slate-300">
                {right || "-"}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  // Default: keep line breaks
  return <div className="whitespace-pre-line">{v}</div>;
}

export default function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white/70 backdrop-blur dark:border-slate-700 dark:bg-transparent">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, idx) => (
            <tr
              key={idx}
              className={[
                "border-b last:border-b-0",
                "border-slate-200 dark:border-slate-700",
                idx % 2 === 0
                  ? "bg-slate-50/70 dark:bg-slate-900/30"
                  : "bg-white/70 dark:bg-slate-900/50",
              ].join(" ")}
            >
              <td className="w-1/3 px-6 py-4 font-medium text-slate-700 dark:text-slate-300 align-top">
                {spec.label}
              </td>

              <td className="px-6 py-4 text-slate-900 dark:text-slate-200 align-top">
                <SpecValue value={spec.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
