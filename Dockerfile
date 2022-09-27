FROM node:16-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org
RUN npm install
COPY . .
RUN npm build

# EXPOSE 8080
CMD ["npm", "run", "serve"]

# production stage
# FROM nginx
# COPY  --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]