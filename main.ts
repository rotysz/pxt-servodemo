const INIT_LEG = 90
const INIT_KNEE = 25

let ServPos = INIT_KNEE
let ServoNum = 0
let ActChl = 6
for (let Srv = 0; Srv < 6; Srv++) {
    Servo.Servo(Srv, INIT_LEG)
    Servo.Servo(Srv + 6, INIT_KNEE)
}

basic.showString("I")

input.onButtonPressed(Button.A, function () {
    ServPos = ServPos + 5
    for (let Srv = 0; Srv < 6; Srv++) {
        //        Servo.Servo(Srv, Se)
        Servo.Servo(Srv + ActChl, ServPos)
    }
    basic.showNumber(ServPos)
})

input.onButtonPressed(Button.B, function () {
    ServPos = ServPos - 5
    for (let Srv = 0; Srv < 6; Srv++) {
        Servo.Servo(Srv + ActChl, ServPos)
    }
    basic.showNumber(ServPos)
})

input.onButtonPressed(Button.AB, function () {
    if (ActChl == 0) {
        ActChl = 6
        ServPos = INIT_KNEE
    } else {
        ActChl = 0
        ServPos = INIT_LEG
    }
    basic.showNumber(ActChl)
})