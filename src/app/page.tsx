export default function DashboardPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-cyan-400">QuantixCore™</h1>
      </header>
      <main className="p-8">
        <h2 className="text-xl mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Sales Graph</h3>
            <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
              <p className="text-gray-500">_placeholder_</p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Stock Alerts</h3>
            <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
              <p className="text-gray-500">_placeholder_</p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Outstanding Amount</h3>
            <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
               <p className="text-gray-500">_placeholder_</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
