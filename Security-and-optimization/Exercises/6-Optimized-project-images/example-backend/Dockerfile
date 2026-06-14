FROM golang:1.16

WORKDIR /myapp

COPY . .


RUN go build &&\
    go test ./... &&\
    useradd -m appuser &&\
    chown appuser . &&\ 
    rm -rf /root/go/pkg/mod/cache /tmp/* 


ENV PORT=8080 \
    REQUEST_ORIGIN=http://localhost:5001

USER appuser

EXPOSE 8080

CMD [ "./server" ]