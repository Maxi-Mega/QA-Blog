FROM node:latest as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY . ./

RUN yarn install

#CMD yarn dev --host

RUN yarn build --base="/QA-Blog"

FROM nginx:latest

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
