const sectionSeleccionarAtaque = document.getElementById('chooseAttack')
const sectionreboot = document.getElementById('reboot')
const botonMascotaJugador = document.getElementById('btnPet')
const botonReboot = document.getElementById('btnReboot')

const sectionSeleccionarMascota = document.getElementById('choosePet')

const spanMascotaJugador = document.getElementById('allyPet')
const spanMascotaEnemigo = document.getElementById('enemyPet')
const spanVidasJugador = document.getElementById('hpAllyPet')
const spanVidasEnemigo = document.getElementById('hpEnemyPet')
const alertsCombat = document.getElementById('result')
const playerAttacks = document.getElementById('player-Attacks')
const enemyAttacks = document.getElementById('enemy-Attacks')
const containerCards = document.getElementById('containerCards')
const attacksBtn = document.getElementById('attacksBtn')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let optionsMokepons
let inputGarydous
let inputChikbo
let inputSmiglet
let playerPet
let ataquesMokepon
let botonElectrico
let botonPlanta
let botonFuego
let botonAgua
let botones = []

let vidasJugador = 5
let vidasEnemigo = 5

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let garydous = new Mokepon('Garydous', 'resources/Garydous.png', 5)
let chikbo = new Mokepon('Chikbo', 'resources/picathor.png', 5)
let smiglet = new Mokepon('Smiglet', 'resources/smyglet.png', 5)
let doghems = new Mokepon('Doghems','resources/doghems.png', 5)

garydous.ataques.push(
    {nombre: '💧', id: 'btnWater'},
    {nombre: '💧', id: 'btnWater'},
    {nombre: '💧', id: 'btnWater'},
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '⚡', id: 'btnThunder'}
)

chikbo.ataques.push(
    {nombre: '⚡', id: 'btnThunder'},
    {nombre: '⚡', id: 'btnThunder'},
    {nombre: '⚡', id: 'btnThunder'},
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '💧', id: 'btnWater'}
)

smiglet.ataques.push(
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '💧', id: 'btnWater'},
    {nombre: '⚡', id: 'btnThunder'}    
)

doghems.ataques.push(
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '🔥', id: 'btnFire'},
    {nombre: '🌳', id: 'btnPlant'},
    {nombre: '💧', id: 'btnWater'},
    {nombre: '⚡', id: 'btnThunder'}
)
mokepones.push(garydous, chikbo, smiglet, doghems);

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        optionsMokepons = `
        <input type="radio" name="pet" id=${mokepon.nombre} />
        <label class="petCard" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        containerCards.innerHTML += optionsMokepons
    })

    inputGarydous = document.getElementById('Garydous')
    inputChikbo = document.getElementById('Chikbo')
    inputSmiglet = document.getElementById('Smiglet')
    inputDoghems = document.getElementById('Doghems')

    sectionreboot.style.display = 'none'
   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReboot.addEventListener('click', rebootGame)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (inputGarydous.checked) {
        spanMascotaJugador.innerHTML = inputGarydous.id;
        playerPet = inputGarydous.id;
    } else if (inputChikbo.checked) {
        spanMascotaJugador.innerHTML = inputChikbo.id;
        playerPet = inputChikbo.id
    } else if (inputSmiglet.checked) {
        spanMascotaJugador.innerHTML = inputSmiglet.id;
        playerPet = inputSmiglet.id
    } else if (inputDoghems.checked) {
        spanMascotaJugador.innerHTML = inputDoghems.id;
        playerPet = inputDoghems.id
    } else {
        alert('Selecciona una mascota')
    }

    extractAttacks(playerPet)
    seleccionarMascotaEnemigo()
}

function extractAttacks(playerPet) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (playerPet === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button class="btnAttack btnAtaque" id="${ataque.id}">${ataque.nombre}</button>
        `

        attacksBtn.innerHTML += ataquesMokepon
    })

    botonElectrico = document.getElementById('btnThunder')
    botonPlanta = document.getElementById('btnPlant')
    botonFuego = document.getElementById('btnFire')
    botonAgua = document.getElementById('btnWater')
    botones = document.querySelectorAll('.btnAtaque')
    


    
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#FF7000'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#FF7000'
            } else if (e.target.textContent === '🌳') {
                ataqueJugador.push('PLANTA')
                console.log(ataqueJugador)
                boton.style.background = '#FF7000'
            } else {
                ataqueJugador.push('ELECTRICO')
                console.log(ataqueJugador)
                boton.style.background = '#FF7000'
            }
        })
    })
    
}
    
function seleccionarMascotaEnemigo() {
    
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaques()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,4)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
        
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'ELECTRICO'
    }
    else {
        ataqueEnemigo = 'PLANTA'
    }

    combate()
}

function combate() {
    
    
    if (ataqueEnemigo == ataqueJugador | ataqueJugador == 'ELECTRICO' && ataqueEnemigo == 'AGUA') {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'ELECTRICO' && ataqueEnemigo == 'PLANTA' ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
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
        
    }
}

function crearMensaje(resultado) {
    

    
    alertsCombat.innerHTML = resultado;

    let allyAttacks = document.createElement('p')
    allyAttacks.innerHTML = ataqueJugador;
    
    let rivalAttacks = document.createElement('p')
    rivalAttacks.innerHTML = ataqueEnemigo;

    playerAttacks.appendChild(allyAttacks)
    enemyAttacks.appendChild(rivalAttacks)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    alertsCombat.innerHTML = resultadoFinal

  
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonPlanta.disabled = true

    botonElectrico.disabled = true

    
    sectionreboot.style.display = 'block'
    
    
}

function rebootGame() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
