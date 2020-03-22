const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

function createLessons (lesson) {
  const lessonHTML = document.createElement('div')
  lessonHTML.classList = 'd-flex bg-white shadow shadow mt-5 lesson'
  lessonHTML.innerHTML = `
    <div class="col-2 ml d-flex justify-content-center align-items-center ${lesson.color}"><h1 class="font-weight-bold display-2">${lesson.logoText}</h1></div>
    <div id="info" class="col-10">
      <h4 class="card-title font-weight-bold" id="title">${lesson.title}</h4>
      <p id="description">${lesson.description}</p>
      <span class="d-flex align-items-center mb-3">
        <span class="glyphicon glyphicon-dashboard mr-2 mb-1"></span><h5 class="mr-5" id="hours">${lesson.duration}</h5>
        <span class="glyphicon glyphicon-signal mr-2 mb-1"></span><h5 id="difficulty">${lesson.difficulty}</h5>
        <div class="col d-flex justify-content-end"><button onclick="addLesson('${lesson._id}')" type="button" class="btn btn-add btn-warning pl-5 pr-5 text-dark">Add</button></div>
      </span>
    </div>`
  document.getElementById('lessons').appendChild(lessonHTML)
}

function addLesson (id) {
  api
    .post(`me/lessons/${id}`, null,
      { headers: { token: localStorage.getItem('token') } })
}

(function () {
  api
    .get('lessons')
    .then(res => {
      res.data.forEach(lesson => {
        createLessons(lesson)
      })
    })
})()
