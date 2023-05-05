// Logic
interface Tile {
    x: number;
    y: number;
    element: HTMLDivElement;
    status: TileStatus | string | undefined;
    mine: boolean;
}

interface Positions {
    x: number;
    y: number;
}

type TileStatus = keyof typeof TILE_STATUS

export const TILE_STATUS = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
} as const

export function createBoard(boardSize: number, numberOfMines: number): Tile[][] | any {
    const board: Tile[][] = []
    const minePositions = getMinePositions(boardSize, numberOfMines)
    for (let x = 0; x < boardSize; x++) {
        const row: Tile[] = []
        for(let y = 0; y < boardSize; y++) {
            const element = document.createElement("div")
            element.dataset.status = TILE_STATUS.HIDDEN
            const tile: Tile = {
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null, {x, y})),
                get status() {
                    return element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                }
            }
            row.push(tile)
        }
        board.push(row)
    }

    return board
}

export function markTile(tile: Tile) {
    if(
        tile.status !== TILE_STATUS.HIDDEN && 
        tile.status !== TILE_STATUS.MARKED
    ) {
        return
    }
    if (tile.status == TILE_STATUS.MARKED) {
        tile.status = TILE_STATUS.HIDDEN
    } else {
        tile.status = TILE_STATUS.MARKED
    }
}

export function revealTile(board: Tile[][], tile: Tile){
    if (tile.status !== TILE_STATUS.HIDDEN) {
        return
    }
    if (tile.mine) {
        tile.status = TILE_STATUS.MINE
        return
    }
    tile.status = TILE_STATUS.NUMBER
    const adjacentTiles = getNearbyTiles(board, tile)
    const mines = adjacentTiles.filter(t => t.mine)
    if (mines.length === 0){
        adjacentTiles.forEach(revealTile.bind(null, board))
    } else {
        tile.element.textContent = String(mines.length)
    } 
}

function getMinePositions(boardSize: number, numberOfMines: number) {
    const positions: Positions[] = []
    while (positions.length < numberOfMines) {
        const position: Positions = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }
        if (!positions.some(p => positionMatch(p, position))){
            positions.push(position)
        }
        // if (!position.some(positionMatch.bind(null, position)){
        //     return position.push(position)
        // } This function works the same.
    }
    return positions
}

function positionMatch(a: any, b: any) {
    return a.x === b.x && a.y === b.y
}

function randomNumber(size: number){
    return Math.floor(Math.random() * size)
}

function getNearbyTiles(board: Tile[][], {x, y}: {x: number; y: number}): Tile[] {
    const tiles: Tile[] = []

    for (let xOffset = -1; xOffset <= 1; xOffset++){
        for (let yOffset = -1; yOffset <= 1; yOffset++){
            const tile = board[x + xOffset]?.[y + yOffset]

            if(tile) {
                tiles.push(tile)
            }
        }
    }
    return tiles
}

export function checkWin(board: Tile[][]) {
    return board.every(row => {
        return row.every(tile => {
            return tile.status === TILE_STATUS.NUMBER || (
                    tile.mine && (
                        tile.status === TILE_STATUS.HIDDEN ||
                        tile.status === TILE_STATUS.MARKED
                    )
                )
        })
    })
}

export function checkLose(board: Tile[][]) {
    return board.some((row => {
        return row.some(tile => {
            return tile.status === TILE_STATUS.MINE
        })
    }))
}