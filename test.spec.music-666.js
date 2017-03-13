'use strict';

const assert = require('assert');
const webdriver = require('webdriverio'); 

describe('music-666: у альбома есть название', function () {
    it('should show title', function(){
        const browser = webdriver.remote({
            desiredCapabilities: {
                browserName: 'firefox'
            }
        });

        return browser
            .init()
            .url('https://music.yandex.ru/album/2974326')
            .waitForVisible('.page-album__title')
            .getCssProperty('.page-album__title', 'color').then(res => {
                assert(res.parsed.hex, '000', 'Color is not black: ${res.parsed.hex}');
            })
            .getCssProperty('.page-album__title', 'font-size').then(res => {
                assert(res.parsed.value < 36, 'Font-size is small: ${res.parsed.value}');
            });
    });
});
