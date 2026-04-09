cat > README.md << 'EOF'
# Alpha Hunter 🎯
### Decentralized Crypto Intelligence Agent | Nosana x ElizaOS Builders Challenge #4



![ElizaOS](https://img.shields.io/badge/Framework-ElizaOS-blue)




![Nosana](https://img.shields.io/badge/Compute-Nosana_GPU-purple)




![Docker](https://img.shields.io/badge/Container-Docker-2496ED)




![Status](https://img.shields.io/badge/Status-Live-brightgreen)



---

## 🔴 Live Deployment
**Agent URL:** https://3fgEZPQ3GRtZBd3A4qzrDoarrBfsdHPRuc3DWaSqSrmx.node.k8s.prd.nos.ci

**Docker Image:** `alphahunter215/alphahunter-agent:latest`

**GitHub:** https://github.com/sadekunle215-cmd/agent-challenge

---

## What is Alpha Hunter?

Alpha Hunter is a personal AI agent built for on-chain degens who need real intelligence, not noise. Built for the Nosana x ElizaOS Builders Challenge using the ElizaOS framework and deployed entirely on Nosana's decentralized GPU network — no AWS, no Google Cloud, no centralized infrastructure.

Crypto moves fast. By the time most people hear about a narrative, a token launch, or a whale accumulation pattern, the alpha is already gone. Alpha Hunter exists to give everyday crypto users the same edge that institutional players have — real-time, actionable on-chain intelligence delivered through a simple conversational interface.

---

## What It Can Do

Ask Alpha Hunter anything:
- "What tokens are trending on Solana right now?"
- "Any good airdrops coming up?"
- "What are whales accumulating?"
- "What's the latest DeFi narrative?"
- "Which new DEX listings should I watch?"
- "What's the TVL trend on Base chain?"

---

## Tech Stack

- **Agent Framework:** ElizaOS v1.0
- **Runtime:** Bun + Node.js 23
- **LLM:** OpenAI GPT-4o-mini (see note below)
- **Frontend:** ElizaOS Bootstrap Plugin (Web Chat UI)
- **Container:** Docker (oven/bun:1 base image)
- **Compute:** Nosana Decentralized GPU Network (NVIDIA 3060)
- **CI/CD:** GitHub Actions (auto build + push to Docker Hub)

---

## Architecture
User → ElizaOS Web Chat (port 3000)
↓
ElizaOS Agent Core
↓
OpenAI Plugin (GPT-4o-mini)
↓
Alpha Hunter Character
(crypto intelligence personality)
---

## ⚠️ Technical Note: Why We Used OpenAI Instead of Nosana Qwen

The challenge originally required using Nosana's hosted Qwen inference endpoint. We attempted this extensively and documented every step.

**Problems faced:**

1. **Nosana Qwen endpoints are ephemeral** — each deployment has a 6-hour timeout. The Qwen model (14B and 7B variants) takes 15-45 minutes just to load, leaving a very short window before expiry.

2. **ElizaOS plugin-openai validation** — the `@elizaos/plugin-openai` package performs an API key validation check against `api.openai.com` on startup, regardless of what `OPENAI_API_URL` is set to. Passing `nosana` as the key causes a `401 Unauthorized` or `Service Unavailable` crash before the agent even starts.

3. **Repeated deployment failures** — across multiple days of attempts, every Qwen endpoint we spun up either expired during agent startup, returned 401 on key validation, or crashed with exit code 143.

**How we solved it:**

We adopted the same Fault-Tolerant Hybrid Architecture used by other successful challenge participants — Nosana handles all compute, container orchestration and hosting, while OpenAI handles language model inference. This guarantees a stable, working agent for judges while keeping the decentralized compute foundation intact.

**What IS running on Nosana:**
- ✅ The entire agent container (NVIDIA 3060 GPU node)
- ✅ Docker image pulled and executed on Nosana's decentralized grid
- ✅ All networking, routing and endpoint exposure via Nosana infrastructure

---

## Setup & Local Development

```bash
# Clone the repo
git clone https://github.com/sadekunle215-cmd/agent-challenge
cd agent-challenge

# Install dependencies
pnpm install

# Copy env file
cp .env.example .env
# Fill in your OPENAI_API_KEY

# Run locally
pnpm start
Docker Deployment
# Build image
docker build -t alphahunter215/alphahunter-agent:latest .

# Run locally
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=your_key \
  alphahunter215/alphahunter-agent:latest
Nosana Deployment
The agent is deployed using the job definition in nos_job_def/nosana_eliza_job_definition.json.
Deploy via Nosana Dashboard at deploy.nosana.com using the job configuration file.
CI/CD Pipeline
Every push to main triggers a GitHub Actions workflow that:
Builds the Docker image
Pushes to Docker Hub (alphahunter215/alphahunter-agent:latest)
