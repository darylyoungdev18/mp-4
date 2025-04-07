export async function fetchStocks() {
    try {
      const response = await fetch("http://localhost:3001/api/routes");
  
      if (!response.ok) {
        throw new Error("Failed to fetch stock data");
      }
  
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return [];
    }
  }
  