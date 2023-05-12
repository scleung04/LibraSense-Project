import serial
import time
import pyfirmata

board = pyfirmata.Arduino('COM5')
it = pyfirmata.util.Iterator(board)
it.start()
analog_input = board.get_pin('a:2:i')
led_output = board.get_pin('d:13:o')

ser = serial.Serial('COM5', 9600)  # open serial port to Arduino

while True:
    soundValue = int(ser.readline().strip())  # read line from serial and convert to integer
    print('Sound value:', soundValue)
    time.sleep(0.1)  # wait for 100ms
    sensor_value = analog_input.read()
    sound_intensity = (sensor_value * 5.0 / 1024.0) / 0.004
    if sound_intensity > 120:  # adjust threshold as needed
        led_output.write(1)  # turn on LED
    else:
        led_output.write(0)  # turn off LED
    time.sleep(0.1)



