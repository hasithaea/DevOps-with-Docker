FROM amazoncorretto:17

WORKDIR /usr/src/app

COPY . .

RUN sed -i 's/\r$//' mvnw
RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/docker-example-1.1.3.jar"]