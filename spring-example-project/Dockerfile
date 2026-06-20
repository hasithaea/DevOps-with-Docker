FROM amazoncorretto:17-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN sed -i 's/\r$//' mvnw &&\
    chmod +x mvnw &&\
    ./mvnw package -DskipTests

FROM gcr.io/distroless/java17-debian12

WORKDIR /app

COPY --from=builder  /usr/src/app/target/docker-example-1.1.3.jar app.jar

USER nonroot

EXPOSE 8080

CMD ["app.jar"]