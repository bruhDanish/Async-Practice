let changeText = document.querySelector('h1');
const button1 = document.querySelector('#start');
const button2 = document.querySelector('#stop');
const bannerContainer = document.querySelector('.banner-container');

let banner = document.createElement('p');

function asyncInterval(){
    
    banner.classList.add('banner');
    banner.textContent = 'Click the start button to start the interval';
    bannerContainer.appendChild(banner);

    let newInterval;
    let settingInterval;

    button1.addEventListener('click', function(){
        newInterval = function(str) {
            console.log(str, Date.now());
            changeText.textContent = str;
            banner.textContent = 'Interval Started, Click the stop button to stop the interval';

            setTimeout(() => {
                changeText.textContent = `Asyncronous JavaScript`;
                // banner.textContent = 'Click the start button to start the interval again';
            }, 1000);
        }
        
        
        settingInterval = setInterval(newInterval, 2000, 'Interval Started');
        
    }, false)

    button2.addEventListener('click', function(){
        clearInterval(settingInterval);
        newInterval = null;
        // settingInterval = null;
        changeText.textContent = 'Interval Stopped';
        banner.textContent = 'Click the start button to start the interval again';
    }, false)
}

asyncInterval()