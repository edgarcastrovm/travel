# etapa de compilación
FROM node:16 as build-stage
WORKDIR /app
RUN git clone https://github.com/edgarcastrovm/travel.git polimundo
RUN cd polimundo && npm install && npm run build
# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/polimundo/dist /usr/share/nginx/html
VOLUME /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
