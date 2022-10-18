const path = require('path')

function devtools(){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    })
}

module.exports = {
    devtools
}