import serial
import time
import pyfirmata

ser = serial.Serial('COM5', 9600)  # open serial port to Arduino
while True:
    soundValue = int(ser.readline().strip())  # read line from serial and convert to integer
    print('Sound value:', soundValue)
    time.sleep(0.1)  # wait for 100ms


