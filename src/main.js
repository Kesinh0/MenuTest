import './style.css'

//nombre del modo
const mode = "ola mundo"

const mapa_url = "https://miro.medium.com/v2/resize:fit:640/format:webp/1*CovSUh5WT_SumJoUp7zwlQ.gif"


const course_name = "nombre"
const course_difficulty = "hard"
const course_location = "JPN"
const laps = 3
const lenght = 69
const lap_record = "01'24''765"
const total_record = "01'10''743"


document.querySelector('#app').innerHTML = `
<!-- Seccion nombre modo -->

<section id="top-spacer"> 
  <p class="menu-text">
    *Mode: ${mode}
  </p>
</section>

<!-- Seccion principal -->
<section id="center">
  <!-- Seccion izquierda -->
  <div class="menu">
    <div class="buttons">
      <button class="menu-button" id="button1">O.K.</button>
      <button class="menu-button" id="button2">Save</button>
      <button class="menu-button" id="button3">Exit</button>
    </div>
    
    <div class="course-info">
      <p>LAPS: ${laps}</p>
      <p>LENGHT: ${lenght} km</p>
      <p>LAP RECORD: ${lap_record}</p>
      <p>TOTAL RECORD: ${total_record}</p>
    </div>
  </div>
  <!-- Seccion derecha -->
  <div class="map" style="background-image: url('${mapa_url}');">
    
  </div>
</section>

<div class="course-name">
  <p>Course Name: ${course_name} [${course_location}] / ${course_difficulty}</p>
</div>

<!-- Seccion botones -->

<section id="bottom-spacer">
  <p style="font-weight: bold; font-size: 1.2rem;">
    | Directional Buttons: Select | O button: Ok | X button: Cancel <span style="color: red;">|   Please   | </span>
  </p>
</section>
`

setupCounter(document.querySelector('#counter'))
