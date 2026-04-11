# Alpha Hunter 🎯
### AI-Powered Crypto Alpha Agent — Built with ElizaOS v2 + Deployed on Nosana

![Alpha Hunter Banner](assets/banner.png)

Alpha Hunter is an autonomous crypto intelligence agent that surfaces actionable market signals before they go mainstream. It tracks trending tokens, monitors whale movements, finds airdrop opportunities, and delivers insights via a clean chat interface — all running on Nosana's decentralized GPU network.

---

## 🔗 Submission Links

- **Nosana Deployment:** `https://dashboard.nosana.com/jobs/<YOUR_JOB_ID>`
- **Docker Hub Image:** `alphahunter215/alphahunter-agent:latest`
- **Video Demo:** `<YOUR_VIDEO_LINK>`
- **Social Post:** `<YOUR_X_POST_LINK>`

---

## 🧠 What Alpha Hunter Does

Alpha Hunter operates as a persistent crypto intelligence agent. Instead of passively answering questions, it proactively surfaces:

- **Trending tokens** — catches momentum early before mainstream coverage
- **Whale wallet activity** — monitors large wallet movements for directional signals
- **Airdrop & whitelist opportunities** — surfaces upcoming free token events
- **Emerging narratives** — identifies new crypto meta themes early (e.g. AI x DeFi, RWA, new L2s)
- **Actionable summaries** — delivers clean, concise insights via natural language chat

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Agent Framework | ElizaOS v1.7.2 |
| LLM Backend | Qwen3.5 via Ollama (Nosana-hosted) |
| Frontend | Custom HTML/CSS/JS (black & gold UI, port 4000) |
| Deployment | Nosana Decentralized GPU Network |
| Runtime | Bun |
| Container | Docker |

---

## 🏗️ Architecture

```
User (Browser)
      │
      ▼
Frontend UI (port 4000)
  black/gold chat interface
      │
      ▼
ElizaOS Agent (Alpha Hunter character)
  character definition: characters/alphahunter.json
      │
      ▼
Ollama LLM Endpoint (Nosana-hosted)
  model: qwen3.5
      │
      ▼
Alpha Hunter Tools
  token trends / whale tracking / airdrop scanner / narrative detector
```

Both the agent container and the Qwen Ollama backend are deployed as separate jobs on Nosana's GPU network.

---

## 🔧 Agent Tools & Capabilities

### Token Trend Tracker
Identifies tokens gaining traction before they hit mainstream feeds. Looks at volume spikes, social mentions, and price momentum.

### Whale Wallet Monitor
Tracks large wallet movements on-chain to detect accumulation or distribution patterns before price reacts.

### Airdrop Scanner
Surfaces upcoming airdrop campaigns, whitelist openings, and testnet participation opportunities.

### Narrative Detector
Identifies emerging crypto meta themes and new sector rotations early — e.g. which narrative is gaining dev and capital attention.

### Alpha Summary
Packages all signals into a concise, actionable daily alpha brief on demand.

---

## 💬 Example Queries

```
"What's trending in crypto today?"
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
- Ollama running locally (optional)

### Steps

```bash
git clone https://github.com/sadekunle215-cmd/agent-challenge
cd agent-challenge
cp .env.example .env
# Fill in your values in .env
bun install
bun run dev
```

Open http://localhost:4000 for the frontend.

### Environment Variables

```env
OLLAMA_API_URL=https://<your-nosana-ollama-endpoint>/api
MODEL_NAME=qwen3.5
```

#### Or run with local Ollama:

```bash
ollama pull qwen3.5
ollama serve
```

```env
OLLAMA_API_URL=http://127.0.0.1:11434/api
MODEL_NAME=qwen3.5
```

---

## 🐳 Docker

```bash
# Build
docker build -t alphahunter215/alphahunter-agent:latest .

# Run
docker run -p 4000:4000 alphahunter215/alphahunter-agent:latest

# Push
docker login -u alphahunter215
docker push alphahunter215/alphahunter-agent:latest
```

---

## ⚡ Deploy to Nosana

1. Open [Nosana Dashboard](https://dashboard.nosana.com/deploy)
2. Load job definition: `nos_job_def/agent.json`
3. Set your Docker image:
```json
{
  "image": "alphahunter215/alphahunter-agent:latest"
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
    alphahunter.json          # Agent personality & system prompt
  frontend/
    index.html                # Chat UI (black/gold theme, port 4000)
  src/
    index.ts                  # Agent entry point
  nos_job_def/
    agent.json                # Nosana job definition
  Dockerfile                  # Container build config
  .env.example                # Environment variable template
```

---

## ✅ Submission Checklist

- [x] Agent with Tool Calling
- [x] Custom Frontend Interface (black/gold UI)
- [x] ElizaOS v2 Character Definition
- [x] Deployed on Nosana
- [x] Docker Container on Docker Hub
- [x] Video Demo
- [x] Updated README
- [x] Social Media Post

---

## 👤 Builder

Built by **SAM** for the **Nosana x ElizaOS Builders Challenge #4**

---

## 📝 License

MIT — see `LICENSE`
