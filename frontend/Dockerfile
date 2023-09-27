# Build the Svelte app
FROM node:14 AS build

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the Svelte app with Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/frontend/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/conf.d/default.conf