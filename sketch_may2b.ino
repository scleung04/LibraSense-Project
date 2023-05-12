void setup() {
  Serial.begin(9600);  // start serial communication
}

void loop() {
  int soundValue = analogRead(A2);  // read analog value from sound sensor using the A2 pin on an Arduino Uno
  Serial.println(soundValue);  // send value over serial
  delay(100);  // wait for 100 milliseconds
}
