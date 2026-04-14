# Alpha Hunter 🎯
### AI-Powered Crypto Alpha Agent — Built with ElizaOS v2 + Deployed on Nosana

![Alpha Hunter Banner](assets/banner.png)

Alpha Hunter is an autonomous crypto intelligence agent that surfaces actionable market signals before they go mainstream. It tracks trending tokens, monitors whale movements, finds airdrop opportunities, and delivers insights via a clean chat interface — all running on Nosana's decentralized GPU network.

---

## 🔗 Submission Links

- **Nosana Deployment:** `https://3fgezpq3grtzbd3a4qzrdoarrbfsdhpruc3dwasqsrmx.node.k8s.prd.nos.ci/`
- **Docker Hub Image:** `alphahunter215/alphahunter-agent:latest`
- **Video Demo:** `https://youtube.com/shorts/r0L50KxPApE`
- **Social Post:** `https://x.com/i/status/2042862095977402693`

---

## 🧠 What Alpha Hunter Does

Alpha Hunter operates as a persistent crypto intelligence agent. Instead of passively answering questions, it proactively surfaces:

- **Trending tokens** — catches momentum early before mainstream coverage
- **Live crypto prices** — real-time price, 24h change, and market cap for any token
- **Top gainers** — top coins by 24h price gain across the market
- **Global market overview** — total market cap, BTC dominance, 24h volume
- **Airdrop & whitelist opportunities** — surfaces upcoming free token events
- **Emerging narratives** — identifies new crypto meta themes early (e.g. AI x DeFi, RWA, new L2s)
- **Actionable summaries** — delivers clean, concise insights via natural language chat

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Agent Framework | ElizaOS v2 |
| LLM Backend | DeepSeek-R1-Distill-Qwen-14B (Nosana-hosted endpoint) |
| Frontend | Custom Chat Interface (black/gold theme, port 3000) |
| Deployment | Nosana Decentralized GPU Network |
| Runtime | Bun |
| Container | Docker |

---

## 🏗️ Architecture

```
User (Browser)
      │
      ▼
Custom Frontend UI (port 3000)
  black/gold chat interface — frontend/index.html
      │
      ▼
ElizaOS Agent (Alpha Hunter character)
  character definition: characters/alphahunter.json
  custom plugin: src/index.ts (alpha-hunter-plugin)
      │
      ▼
DeepSeek-R1-Distill-Qwen-14B (Nosana-hosted endpoint)
  served via Nosana GPU network
      │
      ▼
Alpha Hunter Plugin Actions
  live CoinGecko API calls → prices / trending / gainers / market overview
```

The agent container is deployed as a single job on Nosana's GPU network with the frontend and agent running together on port 3000.

---

## 🔌 Plugin & Live Data

Custom ElizaOS plugin (`alpha-hunter-plugin`) in `src/index.ts` registers 4 live data actions powered by the CoinGecko API:

### GET_CRYPTO_PRICE
Fetches real-time price, 24h percentage change, and market cap for any supported token. Supports BTC, ETH, SOL, BNB, DOGE, PEPE, BONK and more.

### GET_TRENDING_COINS
Pulls live trending coins from CoinGecko's trending endpoint. Returns top 7 trending coins with name, symbol, and market cap rank.

### GET_TOP_GAINERS
Returns the top 7 coins by 24h price gain across the entire market with live prices and percentage changes.

### GET_MARKET_OVERVIEW
Fetches global crypto market data: total market cap, BTC dominance, 24h volume, and active coin count.

All data is fetched live from `api.coingecko.com` at query time with error handling fallback.

---

## 🧠 Agent Character

Defined in `characters/alphahunter.json`:

- **Name:** Alpha Hunter
- **Personality:** Sharp, data-driven, no-nonsense — built for degens who move before the crowd
- **Knowledge base:** DeFi protocols, token launches, airdrop hunting, whale wallet analysis, Solana/ETH/Base/BNB ecosystems, on-chain metrics (TVL, volume, holder distribution)
- **Topics:** Crypto alpha, memecoins, smart money, yield farming, on-chain analysis, Solana, Ethereum, Base chain
- **Style:** Direct and concise, data-focused, no hype without data, actionable insights only, crypto-native language

---

## 💬 Example Queries

```
"What's trending in crypto today?"
"What's the price of Solana?"
"Show me the top gainers today"
"What's the global crypto market cap?"
"Any good airdrops coming up?"
"What are whales buying right now?"
"What's the new narrative this week?"
"Give me today's alpha brief"
```

---

## 🚀 Run Locally

### Prerequisites
- Bun installed
- Docker (for containerized run)

### Steps

```bash
git clone https://github.com/sadekunle215-cmd/agent-challenge
cd agent-challenge
cp .env.example .env
# Fill in your values in .env
bun install
bun run dev
```

Open http://localhost:3000 for the frontend.

### Environment Variables

```env
OPENAI_API_KEY=nosana
OPENAI_API_URL=OPENAI_API_URL=https://<nosana-node-url>.node.k8s.prd.nos.ci/v1
MODEL_NAME=deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
SERVER_PORT=3000
NODE_ENV=production
```

---

## 🐳 Docker

```bash
# Build
docker build -t alphahunter215/alphahunter-agent:latest .

# Run
docker run -p 3000:3000 alphahunter215/alphahunter-agent:latest

# Push
docker login -u alphahunter215
docker push alphahunter215/alphahunter-agent:latest
```

---

## ⚡ Deploy to Nosana

1. Open [Nosana Dashboard](https://dashboard.nosana.com/deploy)
2. Load job definition: `nos_job_def/agent.json`
3. The job definition configures:
```json
{
  "image": "alphahunter215/alphahunter-agent:latest",
  "expose": 3000,
  "model": "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B"
}
```
4. Select a GPU node and deploy
5. Visit the app URL once the job is running

### CLI (alternative)
```bash
npm install -g @nosana/cli
nosana job post --file ./nos_job_def/agent.json --market nvidia-3090 --timeout 30
```

---

## 🧩 Key Files

```
agent-challenge/
  characters/
    alphahunter.json          # Agent personality, knowledge & style definition
  frontend/
    index.html                # Custom black/gold chat UI (port 3000)
  src/
    index.ts                  # ElizaOS agent entry point + custom plugin
  nos_job_def/
    agent.json                # Nosana job definition (image, port, env, model)
  Dockerfile                  # Container build config
  .env.example                # Environment variable template
```

---

## ✅ Submission Checklist

- [x] Public GitHub Fork with agent code
- [x] Live Nosana Deployment URL
- [x] Project Description
- [x] Video Demo (<1 minute)
- [x] Social Media Post
- [x] Stars on required repos (agent-challenge, nosana-programs, nosana-kit, nosana-cli)
- [x] ElizaOS v2 Agent with custom plugin and tool calling
- [x] Custom Chat Interface (black/gold theme, port 3000)
- [x] ElizaOS v2 Character Definition (`characters/alphahunter.json`)
- [x] Deployed on Nosana GPU Network
- [x] Docker Container on Docker Hub (`alphahunter215/alphahunter-agent:latest`)
- [x] Updated README

---

## 👤 Builder

Built by **SAM** for the **Nosana x ElizaOS Builders Challenge #4**

---

## 📝 License

MIT — see `LICENSE`
