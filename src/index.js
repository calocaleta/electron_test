'use strict'

const { app, BrowserWindow } = require('electron')

//console.dir(app)

app.on('before-quit', () => {
    console.log('Saliendo')
})

app.on('ready', ()=>{
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Aplicativo Electron',
        center: true,
        //maximizable: false,
        show: false
    })
    
    win.once('ready-to-show', () => {
        win.show()
    })

    win.on('move',()=>{
        const position = win.getPosition()
        //console.log(`la posición de la ventana es ${position}`)
    })

    win.on('closed',()=>{
        win = null
        app.quit()
    })

    win.loadURL(`file://${__dirname}/renderer/index.html`)
})