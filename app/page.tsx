export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-semibold"> Welcome to Three Tech Stocks </h1>
      <p className="text-lg font-semibold"> Your stock trading companion </p>
      <p className="text-lg font-semibold"> Click the stocks link to get started </p>
      <a href="/stocks" className="mt-4 text-lg font-semibold text-blue-500 hover:underline">
        Go to Stocks
      </a>
    </main>
  
  );
}
