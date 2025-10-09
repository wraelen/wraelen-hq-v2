// src/app/test/page.tsx
export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Test</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="bg-red-500 h-20">1</div>
        <div className="bg-blue-500 h-20">2</div>
        <div className="bg-green-500 h-20">3</div>
        <div className="bg-yellow-500 h-20">4</div>
      </div>
    </div>
  );
}