void setup() {
  Serial.begin(9600);  // start serial communication
}

void loop() {
  int soundValue = analogRead(A2);  // read analog value from sound sensor
  Serial.println(soundValue);  // send value over serial
  delay(100);  // wait for 100ms
}