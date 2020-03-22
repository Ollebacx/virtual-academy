// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

document.getElementById('btn-signup').addEventListener('click', (event) => {
  const newUser = {
    firstName: document.getElementById('signup_firstName').value,
    lastName: document.getElementById('signup_lastName').value,
    email: document.getElementById('signup_email').value,
    password: document.getElementById('signup_password').value
  }

  api
    .post('auth/signup', newUser)
    .then(function (response) {
      localStorage.clear()
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('firstName', response.data.firstName)
      localStorate.setItem('photoURL', response.data.photoURL)
      location.assign('explore.html')
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

document.getElementById('btn-login').addEventListener('click', (event) => {
  const newUser = {
    email: document.getElementById('login_email').value,
    password: document.getElementById('login_password').value
  }

  api
    .post('auth/login', newUser)
    .then(function (response) {
      if (response.data.error) {
        alert('WRONG PASSWORD')
      } else {
        localStorage.clear()
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('firstName', response.data.firstName)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('photoURL', response.data.photoURL)
        location.assign('explore.html')
      }
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

// document.getElementById('btn-api').addEventListener('click', (event) => {
//   api
//     .get('whoami', { headers: { token: localStorage.getItem('token') } })
//     .then(function (response) {
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error.response)
//     })
// })
