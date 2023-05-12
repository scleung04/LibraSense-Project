% Initialize Arduino
clear all, close all;
a = arduino('COM5', 'Uno');

% Set up sound sensor
soundSensorPin = 'A2';
analogVoltage = readVoltage(a, soundSensorPin);
zeroOffset = analogVoltage;

% Set up LED
ledPin = 'D13';
writeDigitalPin(a, ledPin, 0);

% Set threshold sound level
thresholdLevel = 1; % Adjust this value as needed

% Loop to continuously read sound levels and light up LED
while true
    % Read sound sensor voltage
    analogVoltage = readVoltage(a, soundSensorPin);
    
    % Calculate sound level in decibels (dB)
    soundLevel = 20 * log10(analogVoltage / zeroOffset);
    
    % Display sound level in MATLAB command window
    disp(['Sound level: ' num2str(soundLevel) ' dB']);

    % Light up LED if sound level is above threshold
    if soundLevel > thresholdLevel
        writeDigitalPin(a, ledPin, 1);
    else
        writeDigitalPin(a, ledPin, 0);
    end
    
    % Pause for a short amount of time
    pause(0.1);
end