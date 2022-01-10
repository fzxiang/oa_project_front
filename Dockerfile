FROM node:14
WORKDIR app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Files required by pnpm install
COPY . .

RUN pnpm install --frozen-lockfile --prod 
RUN npm run build

FROM nginx:1.18.0

COPY --from=0 /app/dist /var/www/oa_project_front
COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
