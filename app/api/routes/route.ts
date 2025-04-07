"use server";

export async function GET() {
    const apiKey = process.env.MARKETSTACK_API_KEY;
    const baseURL = "https://api.marketstack.com/v1";
    const symbols = "AAPL,TSLA,NFLX";
    const url = `${baseURL}/eod/latest?access_key=${apiKey}&symbols=${symbols}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch stock data" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  