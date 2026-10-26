import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">StrategistBank</h1>
      <p className="text-muted-foreground">
        Your React + TypeScript + Tailwind + shadcn/ui project is ready.
      </p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}

export default App;
