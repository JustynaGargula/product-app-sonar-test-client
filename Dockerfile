FROM node:20-alpine

WORKDIR /app
RUN useradd -r -d /app appUser

COPY package.json package-lock.json ./
RUN npm install --ignore-scripts

COPY src/ .
COPY public/ .

RUN npm run build && chown -R appUser /app
USER appUser

EXPOSE 3000

CMD ["npm", "start"]

