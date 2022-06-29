FROM node:18

RUN mkdir -p /usr/src/midowe-web
WORKDIR /usr/src/midowe-web
COPY ./ .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=prd

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]