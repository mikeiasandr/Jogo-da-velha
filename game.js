

let board = ['','','','','','','','','']
let playerTime = 0
let symbols = ['um','dois']
let gameover = false

function handlemove(position){
    if (gameover) {
        return
    }

    board[position] = symbols[playerTime]
       gameover = ganhador()

       if(gameover == false) {
            if(playerTime == 0) {
                playerTime = 1
            } else{
                playerTime = 0
            }
       }
    return gameover
}

function ganhador(){
    let vitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for(let i = 0; i<vitoria.length; i++){
        let seq = vitoria[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] && 
            board[pos1] != '') {
                return true
            }
        
        if (cont == 9 && board[pos1] != '' && board[pos2] != '' && board[pos3] != '' && gameover == false) {
            title.innerHTML = ('Empate')
            
            popup.style.display = 'block'
            close.addEventListener('click', () => {
                popup.style.display = 'none'
            })
        } 
    }
    return false
}


