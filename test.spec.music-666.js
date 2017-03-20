'use strict';
 
const assert = require('assert');
const webdriver = require('webdriverio'); 
 
describe('music-666: slider title is visible', function () {
    it('should show title', function(){
        const browser = webdriver.remote({
            desiredCapabilities: {
                browserName: 'firefox'
            }
        });
 
        return browser
            .init()
            .url('https://music.yandex.ru/home')
            .waitForVisible('.playlist-slider__title')
            .getCssProperty('.playlist-slider__title', 'color').then(res => {
                assert(res.parsed.hex == '#000000', 'Color is not black: ${res.parsed.hex}');
                console.log(res.parsed.hex);
            })

            .getCssProperty('.playlist-slider__title', 'font-weight').then(res => {
                assert(res.parsed.value == '700', 'font-weight is not bold: ${res.parsed.value}');
                console.log(res.parsed.value);

            })
            .getCssProperty('.playlist-slider__title', 'font-size').then(res => {
                assert(res.parsed.value == 25, 'Font-size is small: ${res.parsed.value}');
            });
    });
});