FROM ubuntu:24.04
WORKDIR /mydir

RUN apt-get update && apt-get install curl python3 ffmpeg
RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
RUN chmod a+rx /usr/local/bin/yt-dlp

CMD [ "/usr/local/bin/yt-dlp" ]