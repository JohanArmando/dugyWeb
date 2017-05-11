import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'
import { mapActions } from 'vuex'

var methods = {
  ...mapActions([
    'registerRace'
  ])
}

var io = sailsIOClient(socketIOClient)

io.sails.url = 'http://api.dugy.co'


io.socket.get('/races', function serverResponded (body, JWR) {

  console.log('Sails responded with: ', body)
  console.log('with headers: ', JWR.headers)
  console.log(methods)

})

io.socket.on('races', message => {
  switch (message.verb) {
    case 'created':
      methods.registerRace(message.data)
      break
  }
  console.log(message)
})
