FROM node:22 AS build
WORKDIR /app
COPY package.json yarn.lock ./
COPY packages/to-do-frontend/package.json packages/to-do-frontend/
RUN yarn install --frozen-lockfile 
COPY packages/to-do-frontend ./packages/to-do-frontend
WORKDIR /app/packages/to-do-frontend
ARG REACT_APP_Todo_Server_Base_URL
ENV REACT_APP_Todo_Server_Base_URL=$REACT_APP_Todo_Server_Base_URL
RUN yarn build
FROM nginx:alpine
COPY --from=build /app/packages/to-do-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]