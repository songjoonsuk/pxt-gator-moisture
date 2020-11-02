/**
* JoonSuk Song @ Dawon Electronic Communication
* Nov 2, 2020
* https://github.com/songjoonsuk/pxt-gator-moisture

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a Dawon extension sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatormoisture sensor
 */

 enum gatormoistureType{
	 moisture=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\uf185"
namespace gatormoisture {

    // Functions for reading moisture from the gatormoisture in moisture or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatormoisture_moisture" block="Get moisture on pin %pin | in %gatormoistureType"
    export function moisture(pin: AnalogPin, type: gatormoistureType): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
        case gatormoistureType.moisture: return getmoisture(ADCVal)
        case gatormoistureType.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in gatormoisture.cpp
     */
    //% shim=gatormoisture::getmoisture
    function getmoisture(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }
