# Dockerfile (dans gestion-production-front)
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Étape de déploiement via Nginx
FROM nginx:alpine
COPY --from=build /app/dist/gestion-production-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
