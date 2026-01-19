interface Spec {
  label: string;
  value: string;
}

interface ProductSpecTableProps {
  specs: Spec[];
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
              <td className="w-1/3 px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                {spec.label}
              </td>
              <td className="px-6 py-4 text-slate-900 dark:text-slate-200">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
