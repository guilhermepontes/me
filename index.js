const terminalImage = require('terminal-image')

(async () => {
    console.log(await terminalImage('profile.jpg', {
    width: 10,
    preserveAspectRatio: true,
  }))
})()
