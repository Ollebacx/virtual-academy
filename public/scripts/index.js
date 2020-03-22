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
    location.assign('index.html')
  })

  $(function () {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content, #name, #explore, #mylessons, #logout, img').toggleClass('active')
    })
  })

/*   document.getElementById('resize').addEventListener('click', function (event) {
    document.querySelectorAll('.menu-text').forEach(elem => {
      elem.classList.toggle('hidden-text')
    })
    document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar-collapsed')
  }) */
})()
