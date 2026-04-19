FROM node:20-alpine

RUN npm install -g pnpm@8.15.1

WORKDIR /app

# Copiar manifests primero para aprovechar cache
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/web/package.json ./apps/web/package.json

# Instalar dependencias del workspace web
RUN pnpm install --frozen-lockfile --filter web...

# Copiar código fuente, sin node_modules gracias al .dockerignore
COPY apps/web/ ./apps/web/

# Build de Next
RUN pnpm --filter web run build

EXPOSE 3000

# Start del servidor de producción
CMD ["pnpm", "--filter", "web", "run", "start"]