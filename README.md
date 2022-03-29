# Polimundo

### Compilando imagen docker
```bash
docker build -t polimundo/vue .

[7:31:30]
Sending build context to Docker daemon   83.4MB
Step 1/9 : FROM node:16 as build-stage
 ---> 054bccad10b0
Step 2/9 : WORKDIR /app
 ---> Using cache
 ---> da80a91cd389
Step 3/9 : RUN git clone https://github.com/edgarcastrovm/travel.git polimundo
 ---> Using cache
 ---> 58cff2d5fef2
Step 4/9 : RUN cd polimundo && npm install && npm run build
 ---> Using cache
 ---> cbf49fa3d4ec
Step 5/9 : FROM nginx:1.13.12-alpine as production-stage
 ---> ebe2c7c61055
Step 6/9 : COPY --from=build-stage /app/polimundo/dist /usr/share/nginx/html
 ---> Using cache
 ---> df77b4265c86
Step 7/9 : VOLUME /usr/share/nginx/html
 ---> Using cache
 ---> 05eada80ffaf
Step 8/9 : EXPOSE 80
 ---> Using cache
 ---> a4dd80664c63
Step 9/9 : CMD ["nginx", "-g", "daemon off;"]
 ---> Using cache
 ---> 9c00611970eb
Successfully built 9c00611970eb
Successfully tagged polimundo/vue:latest
```
### Verificamos la creacion de la imagen
```sh
docker images

REPOSITORY         TAG              IMAGE ID       CREATED        SIZE
polimundo/vue      latest           9c00611970eb   5 days ago     18.1MB
node               16               054bccad10b0   10 days ago    906MB
nginx              1.13.12-alpine   ebe2c7c61055   3 years ago    18MB
```
### Creando imagen
```sh
docker run -it -p 82:80 --rm --name polimundo polimundo/vue
```
```sh
docker ps

CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                       NAMES
4089143e47d8   polimundo/vue   "nginx -g 'daemon of…"   43 seconds ago   Up 42 seconds   0.0.0.0:82->80/tcp, :::82->80/tcp           polimundo

```
Ingresamos al url [http://localhost:82]() para ingresar al proyecto
## Ejecutando docker-compose

En caso de desear seguir realizando cambios y verlos directamnte en el contenedor 
compilamos nuestro proyecto y ejecutamos el docker compose cada vez que realizamos un cambio debemos compilar y se vera reflejado dentro del contenedor

```sh
npm run build                                                           [8:10:03]

> front-vue@0.0.0 build
> vite build

vite v2.8.6 building for production...
✓ 722 modules transformed.
dist/assets/logo.756d19f4.svg                            0.53 KiB
dist/assets/materialdesignicons-webfont.9bdfaf27.eot     1002.34 KiB
dist/assets/materialdesignicons-webfont.da7fba3c.woff2   317.62 KiB
dist/assets/materialdesignicons-webfont.8bded8f4.woff    454.29 KiB
dist/assets/materialdesignicons-webfont.c14484cf.ttf     1002.13 KiB
dist/index.html                                          0.54 KiB
dist/assets/index.74329d9e.js                            18.07 KiB / gzip: 4.73 KiB
dist/assets/webfontloader.cd097671.js                    12.43 KiB / gzip: 4.97 KiB
dist/assets/vendor.f27ebd74.css                          133.29 KiB / gzip: 18.94 KiB
dist/assets/index.5ffd569c.css                           501.10 KiB / gzip: 72.14 KiB
dist/assets/vendor.587f4c14.js                           447.64 KiB / gzip: 138.42 KiB

```
#### Levantamos el contenedor

```
docker-compose up -d

[+] Running 1/0
 ⠿ Container wp_vue-frontend-1                                          0.0s
Attaching to wp_vue-frontend-1

^CGracefully stopping... (press Ctrl+C again to force)

```
```sh
docker ps

CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS         PORTS                                       NAMES
82e8103ff305   polimundo/vue   "nginx -g 'daemon of…"   53 seconds ago   Up 6 seconds   0.0.0.0:82->80/tcp, :::82->80/tcp           wp_vue-frontend-1

```
```sh
docker-compose start                                           [7:40:24]
[+] Running 1/1
 ⠿ Container wp_vue-frontend-1 Started                              0.2s
```
```sh
docker ps
CONTAINER ID   IMAGE           COMMAND                  CREATED              STATUS          PORTS                                       NAMES
82e8103ff305   polimundo/vue   "nginx -g 'daemon of…"   About a minute ago   Up 16 seconds   0.0.0.0:82->80/tcp, :::82->80/tcp           wp_vue-frontend-1

```

Ingresamos al url [http://localhost:82]() para ingresar al proyecto