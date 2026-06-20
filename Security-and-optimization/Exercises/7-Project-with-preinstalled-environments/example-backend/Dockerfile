FROM golang:1.23-alpine

WORKDIR /myapp

COPY . .


RUN go build &&\
    go test ./... &&\
    adduser -D appuser &&\
    chown appuser . &&\ 
    rm -rf /root/go/pkg/mod/cache /tmp/* 


ENV PORT=8080 \
    REQUEST_ORIGIN=http://localhost:5001

USER appuser

EXPOSE 8080

CMD [ "./server" ]