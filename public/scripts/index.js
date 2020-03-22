(function () {
  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('firstName')
    document.getElementById('userphoto').setAttribute('src', localStorage.getItem('photoURL')) 
  } else {
    location.href = 'auth.html'
  }

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('auth.html')
  })
})()
