// KY-037 Sensor and LED Control with Auto Turn-Off

const int sensorPin = A0;   // KY-037 sensor analog pin
const int ledPin = 10;      // LED pin
const int threshold = 150;  // Threshold value for LED activation
const int autoOffDelay = 1000;  // Delay for auto turn-off in milliseconds

void setup() {
  pinMode(ledPin, OUTPUT);  // Set LED pin as output
  Serial.begin(9600);       // Initialize serial communication
}

void loop() {
  int sensorValue = analogRead(sensorPin);  // Read sensor value
  Serial.println(sensorValue);               // Print sensor value (optional)

  if (sensorValue > threshold) {
    digitalWrite(ledPin, HIGH);  // Turn on LED if sensor value is above the threshold
    delay(autoOffDelay);          // Wait for auto-off delay
    digitalWrite(ledPin, LOW);   // Turn off LED
  }
  
  delay(100);  // Delay for stability (adjust as needed)
}
