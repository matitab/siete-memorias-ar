// Librerías
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// Datos: red Wi-Fi local
const char* ssid = "Taborda"; // Red
const char* password = "Shogun5678"; // Contraseña

// Datos: broker HiveMQ Cloud
const char* mqtt_server = "1c26c61f82654cb3a64a06309ccffa42.s1.eu.hivemq.cloud";
const int mqtt_port = 8883;
const char* mqtt_user = "esp32user";  // Usuario
const char* mqtt_pass = "Ochohistorias2025";   // Contraseña

WiFiClientSecure espClient;
PubSubClient client(espClient);

// Pines del ESP32 que vamos a utilizar
int ledPin = 2;  
int pin_cuatro = 4;
int pin_cinco = 5;
int pin_trece = 13;

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  pinMode(pin_cuatro, OUTPUT);
  pinMode(pin_cinco, OUTPUT);
  pinMode(pin_trece, OUTPUT);

  // Configuración TLS
  espClient.setInsecure();

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("WiFi conectado");

  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);

  connectToMQTT();
}

void connectToMQTT() {
  while (!client.connected()) {
    Serial.println("Conectando a MQTT...");
    if (client.connect("ESP32Client", mqtt_user, mqtt_pass)) {
      Serial.println("Conectado a MQTT");

      // "topic" de cada LED
      client.subscribe("led/pin2");
      client.subscribe("led/pin4");
      client.subscribe("led/pin5");
      client.subscribe("led/pin13");

      // control general
      client.subscribe("led/control");  
    } else {
      Serial.print("Fallo conexión, rc=");
      Serial.println(client.state());
      delay(2000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
  String msg;
  for (unsigned int i = 0; i < length; i++) {
    msg += (char)payload[i];
  }
  Serial.println("Mensaje recibido [" + String(topic) + "]: " + msg);

  String topicStr = String(topic);

  if (topicStr == "led/pin2") {
    digitalWrite(ledPin, msg == "on" ? HIGH : LOW);
  } else if (topicStr == "led/pin4") {
    digitalWrite(pin_cuatro, msg == "on" ? HIGH : LOW);
  } else if (topicStr == "led/pin5") {
    digitalWrite(pin_cinco, msg == "on" ? HIGH : LOW);
  } else if (topicStr == "led/pin13") {
    digitalWrite(pin_trece, msg == "on" ? HIGH : LOW);
  } else if (topicStr == "led/control") {
    // control general (por ahora descartado)
    int estado = msg == "on" ? HIGH : LOW;
    digitalWrite(ledPin, estado);
    digitalWrite(pin_cuatro, estado);
    digitalWrite(pin_cinco, estado);
    digitalWrite(pin_trece, estado);
  }
}

void loop() {
  if (!client.connected()) {
    connectToMQTT();
  }
  client.loop();
}
