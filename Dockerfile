FROM nginx:1.18.0
WORKDIR app

#RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Files required by pnpm install
COPY . .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist /var/www/oa_project_front/


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
