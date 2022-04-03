//马达 (p0)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
})

//水位
//S -> SIG (p0)
//+ -> 3.3V (p0)
//- -> GND (p0)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})

//显示屏
//GND -> GND (p20)
//VCC -> 3.3V (p20)
//SCL -> SIG (p19)
//SDA -> SIG (p20)
OLED12864_I2C.init(60)
OLED12864_I2C.showString(0,0,"Hello!",1)

//光敏
//AO -> SIG (p0)
//GND -> GND (p0)
//VCC -> 3.3V (p0)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
