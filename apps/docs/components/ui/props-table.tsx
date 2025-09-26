interface PropRow {
  prop: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  data: PropRow[]
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold">Prop</th>
            <th className="border px-4 py-2 text-left font-bold">Type</th>
            <th className="border px-4 py-2 text-left font-bold">Default</th>
            <th className="border px-4 py-2 text-left font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {row.prop}
                </code>
              </td>
              <td className="border px-4 py-2 text-left">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {row.type}
                </code>
              </td>
              <td className="border px-4 py-2 text-left">
                {row.default ? (
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="border px-4 py-2 text-left">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
