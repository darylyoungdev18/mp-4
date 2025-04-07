export async function fetchStocks() {
    try {
      const response = await fetch("https://mp-4-azure.vercel.app//api/routes");
  
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
  