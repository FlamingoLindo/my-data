ARG NODE_VERSION=26.1.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# Install deps and build the app
FROM base AS build

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN npm run build

# Remove devDependencies now that the build is done.
RUN npm prune --omit=dev

# Minimal runtime image
FROM base AS final

ENV NODE_ENV=production
USER node

# adapter-node outputs a self-contained server in ./build
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 3000

CMD ["node", "build/index.js"]