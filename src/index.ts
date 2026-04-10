import { type Plugin } from "@elizaos/core";

const getCryptoPriceAction = {
  name: "GET_CRYPTO_PRICE",
  description: "Get the current price of any cryptocurrency",
  similes: ["PRICE", "HOW MUCH IS", "CRYPTO PRICE", "TOKEN PRICE"],
  validate: async () => true,
  handler: async (_runtime: unknown, message: { content: { text: string } }) => {
    try {
      const text = message.content.text.toLowerCase();
      const coinMap: Record<string, string> = {
        bitcoin: "bitcoin", btc: "bitcoin",
        ethereum: "ethereum", eth: "ethereum",
        solana: "solana", sol: "solana",
        bnb: "binancecoin", doge: "dogecoin",
        pepe: "pepe", bonk: "bonk",
      };
      let coinId = "bitcoin";
      for (const [key, val] of Object.entries(coinMap)) {
        if (text.includes(key)) { coinId = val; break; }
      }
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`);
      const data = await res.json();
      const price = data.market_data.current_price.usd;
      const change24h = data.market_data.price_change_percentage_24h.toFixed(2);
      const marketCap = (data.market_data.market_cap.usd / 1e9).toFixed(2);
      const direction = change24h > 0 ? "🟢" : "🔴";
      return `${direction} **${data.name} (${data.symbol.toUpperCase()})**\n💰 Price: $${price.toLocaleString()}\n📈 24h Change: ${change24h}%\n🏦 Market Cap: $${marketCap}B`;
    } catch {
      return "Could not fetch price data right now.";
    }
  },
  examples: [],
};

const getTrendingCoinsAction = {
  name: "GET_TRENDING_COINS",
  description: "Get the top trending cryptocurrencies right now",
  similes: ["TRENDING", "HOT COINS", "WHAT IS TRENDING", "TOP COINS"],
  validate: async () => true,
  handler: async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
      const data = await res.json();
      const coins = data.coins.slice(0, 7);
      let result = "🔥 **Trending Coins Right Now:**\n\n";
      coins.forEach((item: any, i: number) => {
        const coin = item.item;
        result += `${i + 1}. **${coin.name}** (${coin.symbol}) — Rank #${coin.market_cap_rank}\n`;
      });
      return result;
    } catch {
      return "Could not fetch trending data right now.";
    }
  },
  examples: [],
};

const getTopGainersAction = {
  name: "GET_TOP_GAINERS",
  description: "Get the top gaining cryptocurrencies in the last 24 hours",
  similes: ["TOP GAINERS", "PUMPING", "MOONING", "UP TODAY", "BIGGEST GAINERS"],
  validate: async () => true,
  handler: async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=7&page=1");
      const data = await res.json();
      let result = "🚀 **Top Gainers (24h):**\n\n";
      data.forEach((coin: any, i: number) => {
        result += `${i + 1}. **${coin.name}** (${coin.symbol.toUpperCase()}) — $${coin.current_price.toLocaleString()} 🟢 +${coin.price_change_percentage_24h.toFixed(2)}%\n`;
      });
      return result;
    } catch {
      return "Could not fetch gainers data right now.";
    }
  },
  examples: [],
};

const getMarketOverviewAction = {
  name: "GET_MARKET_OVERVIEW",
  description: "Get global crypto market overview including total market cap and BTC dominance",
  similes: ["MARKET OVERVIEW", "MARKET CAP", "CRYPTO MARKET", "BTC DOMINANCE", "MARKET TODAY"],
  validate: async () => true,
  handler: async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/global");
      const d = (await res.json()).data;
      const totalMcap = (d.total_market_cap.usd / 1e12).toFixed(2);
      const totalVolume = (d.total_volume.usd / 1e9).toFixed(2);
      const btcDom = d.market_cap_percentage.btc.toFixed(1);
      const change = d.market_cap_change_percentage_24h_usd.toFixed(2);
      const direction = parseFloat(change) > 0 ? "🟢" : "🔴";
      return `📊 **Global Crypto Market**\n\n💰 Total Market Cap: $${totalMcap}T ${direction} ${change}%\n📉 24h Volume: $${totalVolume}B\n₿ BTC Dominance: ${btcDom}%\n🪙 Active Coins: ${d.active_cryptocurrencies.toLocaleString()}`;
    } catch {
      return "Could not fetch market data right now.";
    }
  },
  examples: [],
};

export const customPlugin: Plugin = {
  name: "alpha-hunter-plugin",
  description: "Alpha Hunter crypto intelligence plugin with live CoinGecko data",
  actions: [
    getCryptoPriceAction,
    getTrendingCoinsAction,
    getTopGainersAction,
    getMarketOverviewAction,
  ],
  providers: [],
  evaluators: [],
};

export default customPlugin;
