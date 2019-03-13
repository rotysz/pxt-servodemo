
let ServPos = 1500
Servo.ServoPulse(0, 1500)
Servo.ServoPulse(1, 1500)

input.onButtonPressed(Button.A, function () {
    ServPos = ServPos - 500
    Servo.ServoPulse(0, ServPos)
    Servo.ServoPulse(1, ServPos + 1)
})

input.onButtonPressed(Button.B, function () {
    ServPos = ServPos + 500
    Servo.ServoPulse(0, ServPos)
    Servo.ServoPulse(1, ServPos - 1)
})