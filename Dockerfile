FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_PUBLIC_API_URL=http://localhost:3000/api
ENV NEXT_PUBLIC_AUTH_DOMAIN=adobefireflyth.firebaseapp.com
EXPOSE 3000
CMD npm run dev