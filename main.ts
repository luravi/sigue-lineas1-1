basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && false) {
        maqueen.motorStop(maqueen.Motors.All)
        music.playMelody("C5 B A G F E D C ", 120)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 23)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 23)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
})
