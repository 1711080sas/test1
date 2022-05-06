input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # # . # #
        . # # # .
        `)
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
})
