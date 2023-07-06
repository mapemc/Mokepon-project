let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('chooseAttack')
    sectionSeleccionarAtaque.style.display = 'none'

    
    let sectionreboot = document.getElementById('reboot')
    sectionreboot.style.display = 'none'
    
   

    
    let botonMascotaJugador = document.getElementById('btnPet')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('btnFire')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('btnWater')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('btnPlant')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReboot = document.getElementById('btnReboot')
    botonReboot.addEventListener('click', rebootGame)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('choosePet')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('chooseAttack')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputGarydous = document.getElementById('garydous')
    let inputChikbo = document.getElementById('chikbo')
    let inputSmyglet = document.getElementById('smyglet')
    let spanMascotaJugador = document.getElementById('allyPet')
    
    if (inputGarydous.checked) {
        spanMascotaJugador.innerHTML = 'Garydous';
    } else if (inputChikbo.checked) {
        spanMascotaJugador.innerHTML = 'Chikbo';
    } else if (inputSmyglet.checked) {
        spanMascotaJugador.innerHTML = 'Smyglet';
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}
function onlyOne(radio) {
    var radioBtn = document.getElementsByClassName('petCard')
    radioBtn.forEach(function (item) {
        if (item !== radio) item.checked = false
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('enemyPet')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Garydous'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Chikbo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Smyglet'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('hpAllyPet')
    let spanVidasEnemigo = document.getElementById('hpEnemyPet')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
        document.getElementById('pikachu')
    }
}

function crearMensaje(resultado) {
    let alertsCombat = document.getElementById('result')
    let playerAttacks = document.getElementById('player-Attacks')
    let enemyAttacks = document.getElementById('enemy-Attacks')

    
    alertsCombat.innerHTML = resultado;

    let allyAttacks = document.createElement('p')
    allyAttacks.innerHTML = ataqueJugador;
    
    let rivalAttacks = document.createElement('p')
    rivalAttacks.innerHTML = ataqueEnemigo;


    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    
    playerAttacks.appendChild(allyAttacks)
    enemyAttacks.appendChild(rivalAttacks)
}

function crearMensajeFinal(resultadoFinal) {
    let alertsCombat = document.getElementById('result')
    
    alertsCombat.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('btnFire')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('btnWater')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('btnPlant')
    botonTierra.disabled = true

    let sectionreboot = document.getElementById('reboot')
    sectionreboot.style.display = 'block'
    
    
}

function rebootGame() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
