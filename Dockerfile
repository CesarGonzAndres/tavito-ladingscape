FROM node

WORKDIR /var/www/

RUN mkdir -p /var/www/app

COPY . /var/www/app

RUN cd ./app

EXPOSE 3000

CMD ["npm", "run dev"]
