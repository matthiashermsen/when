FROM node:25-alpine AS build
WORKDIR /app

COPY package.json package-lock.json .npmrc ./

RUN npm ci --no-audit --no-fund --verbose

COPY . ./

RUN npm run build


FROM node:25-alpine AS production 
WORKDIR /app

COPY --from=build /app/.output/ ./

CMD ["node", "/app/server/index.mjs"]
