FROM golang:1.16

WORKDIR /myapp

COPY . .

RUN go build

ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5001



RUN go test ./...

RUN useradd -m appuser
RUN chown appuser .
USER appuser

EXPOSE 8080

CMD [ "./server" ]