const popup = document.querySelector('.popup-back')
const close = document.querySelector('.close')
const title = document.querySelector('.venceu')
var atualizar = document.querySelector('#atualizar')

cont = 0

enviar.addEventListener('click', () => {
    const jogadorx = document.querySelector('.jx')
    var jogadoro = document.querySelector('.jo')
    nomex = jogadorx.value
    nomeo = jogadoro.value
    if(nomex == '' || nomeo == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        gamersback.style.display = 'none'
    }
})


document.addEventListener('DOMContentLoaded',()=>{
    let peça = document.querySelectorAll(".peças")
    peça.forEach(peças => {
        peças.addEventListener('click', handleClick)
    });
})

function handleClick(event ){
    if(nomex != '' || nomeo != '') {

        let peças = event.target
        let position = peças.id
        
        cont++
        
        if(handlemove(position)) {
            setTimeout(() => {
                if (playerTime == 0) {
                    playerTime = 1
                } else { playerTime = 0}
                
                if (playerTime == 0) {
                    title.innerHTML = ('Parabéns ' + nomeo + ' você venceu!')
                } else {
                    title.innerHTML = ('Parabéns ' + nomex + ' você venceu!')
                }
                
                popup.style.display = 'block'
                close.addEventListener('click', () => {
                    popup.style.display = 'none'
                })
            }, 10)
        }
    }
    updatepeças();
}

atualizar.addEventListener('click', function() {
    location.reload()
})

function updatepeças(){
    let peças = document.querySelectorAll(".peças")
    peças.forEach((peças) => {
        let position = peças.id
        let symbols = board[position]
        if(symbols != ''){
            peças.innerHTML = `<div class = '${symbols}'></div>`
        }
    })
}