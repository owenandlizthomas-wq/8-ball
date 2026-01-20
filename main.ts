let random_number = 0
input.onGesture(Gesture.Shake, function () {
    random_number = randint(0, 4)
    if (random_number == 0) {
        basic.showString("yes")
    } else if (random_number == 1) {
        basic.showString("it is not likely")
    } else if (random_number == 2) {
        basic.showString("definitely")
    } else if (random_number == 3) {
        basic.showString("probably")
    } else if (random_number == 4) {
        basic.showString("no")
    }
})
basic.forever(function () {
    basic.showNumber(8)
})
