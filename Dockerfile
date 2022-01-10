FROM node:14
WORKDIR app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Files required by pnpm install
COPY . .

RUN pnpm install --frozen-lockfile --prod


FROM nginx:alpine

COPY --from=0 /app/dist /usr/share/nginx/html
COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
CMD [""]
