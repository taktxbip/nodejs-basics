const os = require('os');

function refOs() {
    console.log(os.platform());
    console.log(os.cpus());
    console.log(os.freemem());
    console.log(os.totalmem());
    console.log(os.uptime());
}

refOs();