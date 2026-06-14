FROM ubuntu   
    
WORKDIR /myapp    

COPY . .
ENV REACT_APP_BACKEND_URL=http://localhost/api
RUN apt update && \
    apt install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash && \
    apt install -y nodejs && \
    npm install && \
    npm install -g serve && \
    useradd -m appuser && \
    npm run build && \
    apt-get purge -y --auto-remove curl && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf src

USER appuser

CMD ["serve", "-s", "-l", "5001", "build"]