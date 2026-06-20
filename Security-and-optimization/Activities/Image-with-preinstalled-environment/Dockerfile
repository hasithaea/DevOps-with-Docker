FROM python:3.12-alpine

WORKDIR /mydir


RUN apk add --no-cache curl ffmpeg ca-certificates && \
    curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp && \
    chmod a+x /usr/local/bin/yt-dlp && \
    adduser -D appuser && \
    chown appuser . && \
    apk del curl 

USER appuser

ENTRYPOINT ["/usr/local/bin/yt-dlp"]

# Publishing new variant

# $ docker image tag yt-dlp:alpine-3.21 <username>/yt-dlp:alpine-3.21
# $ docker image push <username>/yt-dlp:alpine-3.21
# $ docker image tag yt-dlp:python-alpine <username>/yt-dlp:python-alpine
# $ docker image push <username>/yt-dlp:python-alpine

# Replace old image with new one 

# $ docker image tag yt-dlp:python-alpine <username>/yt-dlp
# $ docker image push <username>/yt-dlp