# Étape 1 : Utiliser une image officielle OpenJDK
FROM openjdk:17-jdk-slim

# Étape 2 : Définir le répertoire de travail
VOLUME /tmp

# Étape 3 : Copier le .jar généré dans l'image Docker
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Étape 4 : Commande d'exécution
ENTRYPOINT ["java","-jar","/app.jar"]
