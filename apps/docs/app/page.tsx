import { Button } from "@serum/ui"

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-8">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Serum UI</h1>
        <p className="text-muted-foreground">Modern React components with Tailwind</p>
        <div className="flex justify-center gap-3">
          <Button size="lg">Primary</Button>
          <Button variant="secondary" size="lg">Secondary</Button>
          <Button variant="ghost" size="lg">Ghost</Button>
        </div>
      </div>
    </main>
  )
}
