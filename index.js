'use strict'

const { app } = require('electron')
app.on('window-all-closed', () => {
  app.quit()
})