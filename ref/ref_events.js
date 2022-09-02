const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        const date = Date.now();
        this.emit('message', `${date} ${msg}`);
    }
}

const logger = new Logger();

logger.on('message', data => {
    console.log(data);
});

logger.log('Huston');
logger.log('we');
logger.log('have a problem');