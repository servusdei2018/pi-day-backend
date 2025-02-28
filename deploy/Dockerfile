FROM node:current-slim
WORKDIR /pi-day-backend

# Cache package.json and node_modules
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build
CMD ["node", "dist/server.js"]
EXPOSE 8080
