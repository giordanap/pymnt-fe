FROM node:20-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy workspace manifests first to maximise Docker layer cache reuse.
# Dependencies are only reinstalled when these files change.
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/web/package.json ./apps/web/package.json

# Install workspace dependencies for the web app only.
RUN pnpm install --frozen-lockfile --filter web...

# Copy application source (node_modules excluded via .dockerignore).
COPY apps/web/ ./apps/web/

# Build the Next.js production bundle.
RUN pnpm --filter web run build

EXPOSE 3000

# Start the production server.
CMD ["pnpm", "--filter", "web", "run", "start"]