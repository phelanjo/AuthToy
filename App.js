const axios = require('axios')
const readlineSync = require('readline-sync')

const login = () => {
  var username = readlineSync.question('Username: ')
  var password = readlineSync.question('Password: ', { hideEchoBack: true })

    axios.post('https://api.cbtnuggets.com/auth-gateway/v1/login', {
      username: username,
      password: password
    })
    .then(function (response) {
      if (response.status == 200) {
        console.log(`Success`)
        console.log(`Token: ` + response.data.access_token)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

login()


