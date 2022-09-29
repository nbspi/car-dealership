# FROM node:16-alpine as build-stage
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .

# EXPOSE 8080
# CMD ["serve", "-s", "dist"]

# # production stage
# # FROM nginx
# # COPY  --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# # EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]


FROM node:16-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./


RUN npm config set proxy http://192.168.36.35:3128
RUN npm config set https-proxy http://192.168.36.35:3128
RUN npm install

COPY . .
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]