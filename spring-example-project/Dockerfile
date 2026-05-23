FROM amazoncorretto:8

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

RUN sed -i 's/\r$//' mvnw
RUN chmod +x mvnw

RUN ./mvnw package -DskipTests

CMD ["java", "-jar", "target/docker-example-1.1.3.jar"]