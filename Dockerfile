FROM  node:22-slim

WORKDIR /app

COPY package*.json ./

RUN  npm install

COPY . .

RUN  npm run build

EXPOSE 3000

CMD [ "node","dist/apps/proyecto_nestjs/main" ]