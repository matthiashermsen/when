FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY package.json package-lock.json .npmrc ./

RUN npm ci

COPY . ./

RUN npm run build


FROM node:22-alpine AS production 
WORKDIR /app

COPY --from=build /app/.output/ ./

CMD ["node", "/app/server/index.mjs"]