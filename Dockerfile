
FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod



FROM nginx:1.23.1
COPY --from=node /app/dist/internship_mini_project-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
