const main = document.querySelector('#game')

function generateMap() {
    const map = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
    ];
        
    const newMap = []
    const splitMap = map.forEach(line => {
                            newMap.push(line.split(''))
                        })
    
    let divCount = 0
    for (let i = 0; i < newMap.length; i++) {
        for (j = 0; j < newMap[i].length; j++) {
            const div = document.createElement('div')
            // div.src = './img/fire-fireball.gif'
            div.id = divCount++
            if (newMap[i][j] === 'W') {
                div.className = 'wall'
                main.appendChild(div)
            }
            if (newMap[i][j] === ' ') {
                div.className = 'space'
                main.appendChild(div)
            }
            if (newMap[i][j] === 'S') {
                div.className = 'start'
                main.appendChild(div)
            }
            if (newMap[i][j] === 'F') {
                div.className = 'finish'
                main.appendChild(div)
            }
        }
    }
    createPlayer()
}

generateMap()

function createPlayer() {
    const player = document.createElement('div')
    const start = document.querySelector('.start')
    player.id = 'player'
    start.appendChild(player)
    movePlayer()
}

function getPlayerPosition() {
    const playerPosition = player.parentElement
    
    return playerPosition
}

function movePlayer() {
    const keyEvent = document.addEventListener('keydown', (event) => {
        const keyName = event.key
        const playerPositionId = Number(getPlayerPosition().getAttribute('id'))
        
        if (keyName === 'ArrowUp') {
            const moveUp = document.getElementById(`${playerPositionId - 21}`)
            const moveUpClass = moveUp.getAttribute('class')
            if (moveUpClass === 'space') {
                moveUp.appendChild(player)
            }
        }
    
        if (keyName === 'ArrowDown') {
            const moveDown = document.getElementById(`${playerPositionId + 21}`)
            const moveDownClass = moveDown.getAttribute('class')
            if (moveDownClass === 'space') {
                moveDown.appendChild(player)
            }
        }
    
        if (keyName === 'ArrowLeft') {
            const moveLeft = document.getElementById(`${playerPositionId - 1}`)
            const moveLeftClass = moveLeft.getAttribute('class')
            if (moveLeftClass === 'space' || moveLeftClass === 'start') {
                moveLeft.appendChild(player)
            }
        }
    
        if (keyName === 'ArrowRight') {
            const moveRight = document.getElementById(`${playerPositionId + 1}`)
            const moveRightClass = moveRight.getAttribute('class')
            if (moveRightClass === 'space' || moveRightClass === 'finish') {
                moveRight.appendChild(player)

                victory()
            }
        }
    })
}

function victory() {
    const playerPositionId = Number(getPlayerPosition().getAttribute('id'))
    if (playerPositionId === 188) {
        const span = document.createElement('span')
        span.id = 'victoryMessage'
        span.innerText = 'You win!'
        main.appendChild(span)
    }
}