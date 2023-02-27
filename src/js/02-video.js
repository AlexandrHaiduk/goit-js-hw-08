import Player from '@vimeo/player';

import {throttle} from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(event => {
    
localStorage.setItem('videoplayer-current-time', event.seconds)}, 1000))


const currentTime = localStorage.getItem('videoplayer-current-time')

if (!currentTime) {
    player.setCurrentTime(0)
} else player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))