/*
* luminum.js by Marco Trombino
* Released under the GPLv3 license
*
* 2013-2014
* Version: 1.1
*/

class Luminum {
    constructor(color) {
        this.color = color;
        this.brightness = 0;
        this.brightnessOffset = 0;
        this.colorBright = false;
        this.tollerance = 0;
        this.color = this.color.replace(/rgb/, '');
        this.color = this.color.replace(/[()#]/g, '');
    }

    getColorBrightness() {
        if (this.color.indexOf(',') > -1) {
            this.brightness = this.rgbColorBrightness();
        } else {
            this.brightness = this.hexColorBrightness();
        }

        if (this.brightness > 130) {
            this.colorBright = true;
        } else {
            this.colorBright = false;
        }

        this.brightnessOffset = this.brightness - 130;
        return this.colorBright;
    }

    rgbColorBrightness() {
        var rgbColor = this.color.split(',');
        var r = rgbColor[0];
        var g = rgbColor[1];
        var b = rgbColor[2];
        var brightness = (r * 299 + g * 587 + b * 114) / 1000 - this.tollerance;

        return brightness;
    }

    hexColorBrightness() {
        var bigint = parseInt(this.color, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness;
    }

    /* Get Contrast Color */
    getContrastColor() {
        return this.getColorBrightness() ? '#000000' : '#ffffff';
    }
}

export default Luminum;
