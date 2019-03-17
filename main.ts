
let ServPos = 90
Servo.Servo(0, ServPos)
Servo.Servo(1, ServPos)
let ActChl = 0
basic.showNumber(ActChl)

input.onButtonPressed(Button.A, function () {
    ServPos = ServPos + 5
    Servo.Servo(ActChl, ServPos)
})

input.onButtonPressed(Button.B, function () {
    ServPos = ServPos - 5
    Servo.Servo(ActChl, ServPos)
})

input.onButtonPressed(Button.AB, function () {
    if (ActChl == 0) {
        ActChl = 1
    } else {
        ActChl = 0
    }
    basic.showNumber(ActChl)
})