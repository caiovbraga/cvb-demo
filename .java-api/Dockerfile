FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Djavax.net.debug=ssl", \
            "-Djavax.net.ssl.trustStore=/etc/ssl/certs-mongo/truststore.p12", \
            "-Djavax.net.ssl.trustStorePassword=password", \
            "-jar","/app.jar"]
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", \
#            "-jar","/app.jar"]