(function () {
  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('firstName')
    console.log(localStorage.getItem('photoURL'))

    document.getElementById('userphoto').setAttribute('src', localStorage.getItem('photoURL')) 
  } else {
    location.href = 'index.html'
  }

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('auth.html')
  })
})()
