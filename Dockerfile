FROM oven/bun:1

WORKDIR /app

RUN apt-get update && apt-get install -y python3 build-essential git && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock* ./

RUN bun install

COPY . .

RUN mkdir -p /app/data

EXPOSE 3000

ENV NODE_ENV=production
ENV SERVER_PORT=3000

CMD ["bunx", "elizaos", "start", "--character", "./characters/agent.character.json"]
