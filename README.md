# gator:moisture moisture Sensor


The gator:starter, which includes the gator:moisture and gator:temp can be purchased [here.](https://www.sparkfun.com/products/14891)
The gator:moisture, included on the gator:starter is an analog moisture sensor that can be alligator clipped to the micro:bit or gator:bit board.

![gator:moisture](https://raw.githubusercontent.com/songjoonsuk/pxt-gator-moisture/master/icon.png)  

## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-moisture**. The package is located [here](https://github.com/songjoonsuk/pxt-gator-moisture)

## ~

## Basic usage

```blocks
//Sets the value of the moisture variable to the value read from the gator:moisture
let moisture = 0
moisture = gatormoisture.moisture(AnalogPin.P0, gatormoistureType.moisture)
```

Use ``||Get moisture on pin||`` to read the moisture value from a gator:moisture sensor attached to a given pin in moisture or the straight ADC value.

## Example: moisture Detector

```blocks
//Read moisture value and write it to the micro:bit screen as a bar graph.
let moisture = 0
basic.forever(function () {
    moisture = gatormoisture.moisture(AnalogPin.P0, gatormoistureType.moisture)
    led.plotBarGraph(
        moisture,
        1023
    )
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatormoisture=https://github.com/songjoonsuk/pxt-gator-moisture
```