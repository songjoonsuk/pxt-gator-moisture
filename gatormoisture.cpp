/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-moisture-bit
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

namespace gatormoisture {
    /*
    * Calculates the moisture in moisture based on the ADC value passed in. 1 step in adcVal is equal to .488 uA or .976 moisture at 5V
    */
    //%
    uint16_t getmoisture(int16_t ADCVal) {

        return ADCVal / 10.0;
    }

}
