interface Spec {
  label: string
  value: string
}

interface ProductSpecTableProps {
  specs: Spec[]
}

export default function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate-700 last:border-b-0 ${idx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/50"}`}
            >
              <td className="px-6 py-4 font-medium text-slate-300 w-1/3">{spec.label}</td>
              <td className="px-6 py-4 text-slate-200">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
