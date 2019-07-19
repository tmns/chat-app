import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

const socket = io();