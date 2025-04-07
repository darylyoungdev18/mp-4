type Stock = {
    symbol: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  };
  
  export default function StockPass({ stocks = [] }: { stocks: Stock[] }) {
    return (
      <div id="stocks" className="flex flex-col items-center justify-center p-2">
        {stocks.length > 0 ? (
          stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="w-full max-w-md border-t-2 text-center py-2 px-1"
            >
              <h3 className="text-lg font-semibold">({stock.symbol})</h3>
              <p>Open: ${stock.open}</p>
              <p>High: ${stock.high}</p>
              <p>Low: ${stock.low}</p>
              <p>Close: ${stock.close}</p>
              <p>Volume: {stock.volume.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <div className="text-red-500">No stocks available</div>
        )}
      </div>
    );
  }
  