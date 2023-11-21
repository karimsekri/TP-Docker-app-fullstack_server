FROM node:18-alpine
WORKDIR /server
COPY . .
RUN npm install
ENV PORT=3000
EXPOSE 3000
CMD npm run start

