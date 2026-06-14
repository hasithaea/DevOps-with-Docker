FROM ubuntu



WORKDIR /usr/src/app


RUN apt-get update &&\
    apt-get install -y curl &&\
    curl -sL https://deb.nodesource.com/setup_16.x | bash &&\
    apt install -y nodejs &&\
    node -v && npm -v 

COPY . .

RUN npm install

ENV REACT_APP_BACKEND_URL=/api

RUN npm run build

RUN npm install -g serve

RUN useradd -m appuser
USER appuser

EXPOSE 5001

CMD [ "serve", "-s", "-l", "5001", "build" ]