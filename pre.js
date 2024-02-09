/*
    Importar los sonidos. (18 sounds in total)
    
    Meter los botones del drumpad en un arreglo y renderizarlos con un iterador:
        => const letters = ['Q','W','E','A','S','D','Z','X','C']
        render(
            letters.map((item, index) => {
                return(
                    <button id='index'>{item}</button>
                )
            })
        )
    
    Hacer un arreglo con todos los nombres de los sonidos, separandolos en dos arrays:
        const normalSounds = ['soundName','soundName','soundName','soundName','soundName','soundName','soundName','soundName','soundName']
        const secondSounds = ['soundName','soundName','soundName','soundName','soundName','soundName','soundName','soundName','soundName']
    
    Hacer un arreglo con las direcciones de los sonidos, para despues renderizarlos con un map en elementos de tipo audio:
        const soundDirections = ['direction', 'direction', 'direction', 'direction', 'direction'...]

        return(
            soundDirections.map((direction) => {
                <audio type='mpeg/audio' controls='false' >
                    <source src={direction} />
                </audio>
            })

        )
    Hacer un archivo .jsjj
*/
// Primera forma para que al hacer click se active el sonido que contiene el boton

const buttons = document.querySelectorAll('.pad-item');

// function handleClick () {
//     this.firstElementChild.play()
// }

// buttons.forEach((element) => {
//     element.addEventListener('click', handleClick)
// })

const pad = document.querySelector('.pad');

pad.addEventListener('click', (e) => {
    e.target.firstElementChild.play()
})

const onButton = document.getElementById('on/off');

onButton.addEventListener('click', () => {
    if(onButton.checked !== true){
        buttons.forEach((elem) => {
            elem.children[0].volume = 0;
        })     
    }else{
        buttons.forEach((elem) => {
            elem.children[0].volume = 1;
        })
    }
})

const volInput = document.querySelector('.volume');

volInput.addEventListener('input',() => {
    buttons.forEach((elem) => {
        elem.children[0].volume = volInput.value * 0.01;
    })
})