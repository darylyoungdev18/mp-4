import { fetchStocks } from "../lib/fetchStocks";
import StockPass from "../components/stockPass";

export default async function Page() {
  const stocks = await fetchStocks();

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h1 className="mt-6 mb-2 text-3xl font-bold ">The Three Tech Stocks You Know, Located Below.</h1>
      <p className="mt-6 mb-12 text-2xl font-semibold">Check out the three stocks below</p>
      <StockPass stocks={stocks} />
    </div>
  );
}
