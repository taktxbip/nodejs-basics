const fs = require('fs');
const path = require('path');

function refFs() {
    // fs.mkdir(path.join(__dirname, 'notes'), (err) => {
    //     if (err) {
    //         throw new Error(err);
    //     }

    //     console.log('Folder created');
    // });

    fs.writeFile(path.join(__dirname, 'notes', 'file.txt'), 'Hello node', (err) => {
        if (err) {
            throw new Error(err);
        }

        console.log('File created');
        fs.appendFile(path.join(__dirname, 'notes', 'file.txt'), ' append', (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('File updated');
        });
    });

    fs.readFile(path.join(__dirname, 'notes', 'file.txt'), 'utf-8', (err, data) => {
        if (err) {
            throw new Error(err);
        }

        console.log(data);
    });
}

refFs();

// export.modules = refFs;