input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    serial.writeLine("ss=" + ssid)
    basic.pause(1000)
    serial.writeLine("pass=" + pass)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 2)
})
let pass = ""
let ssid = ""
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
radio.setGroup(1)
ssid = "TELLO-Red"
pass = ""
