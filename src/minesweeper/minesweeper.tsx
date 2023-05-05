import { 
    createBoard, 
    markTile, 
    revealTile, 
    TILE_STATUS,
    checkWin,
    checkLose 
} from "./minesweeperLogic"
import { useRef, useEffect, useState } from "react";
import './minesweeperStyles.css'
import '../index.css'


export default function Minesweeper() {

    const boardRef = useRef<HTMLDivElement>(null)
    const messageTextRef = useRef<HTMLDivElement>(null)
    const BOARD_SIZE: number = 10
    const NUMBER_OF_MINES = 10
    const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
    const [minesLeft, setMinesLeft] = useState(NUMBER_OF_MINES)

    useEffect(() => {
        const boardDiv = boardRef.current
        if (boardDiv) {
            board.forEach(row => {
                row.forEach(tile => {
                    boardRef.current?.appendChild(tile.element)
                    tile.element.addEventListener("click", () => {
                        revealTile(board, tile)
                        checkGameEnd()
                    })
                    tile.element.addEventListener("contextmenu", e => {
                        e.preventDefault()
                        markTile(tile)
                        listMinesLeft()
                    })
                })
            });
            boardDiv.style.setProperty("--size", BOARD_SIZE)
            setMinesLeft(NUMBER_OF_MINES)
            // setMessageText(document.querySelector(".subtext") as HTMLDivElement | null)

        }

    }, [])

   
    function listMinesLeft() {
        const markedTilesCount = board.reduce((count, row) => {
            return count + row.filter(tile => tile.status === TILE_STATUS.MARKED).length
        }, 0)

        setMinesLeft(NUMBER_OF_MINES - markedTilesCount)
    }


    function checkGameEnd() {
        const win = checkWin(board)
        const lose = checkLose(board)
        if (win || lose) {
            boardRef.current?.addEventListener("click", stopProp, { capture: true})
            boardRef.current?.addEventListener("contextmenu", stopProp, { capture: true})
        }

        if (win) {
            if(messageTextRef.current !== null) {
                messageTextRef.current.innerText = "You Win!"

            } 
        }
        if (lose) {
            if(messageTextRef.current !== null) {
                messageTextRef.current.innerText = "You lose!"
                board.forEach(row => {
                    row.forEach(tile => {
                        if (tile.status === TILE_STATUS.MARKED) markTile(tile)
                        if (tile.mine) revealTile(board, tile)
                    })
                })
            }
           
        }
    }

    function stopProp(e: MouseEvent){
        e.stopImmediatePropagation()
        console.log("Stop Prop")
    }

    return (
        <div className="container">
            <h3 className="title">Minesweeper</h3>
            <div className="subtext" ref={messageTextRef}>     
               Mines left: <span data-mine-count>{minesLeft}</span>
            </div>
            <div className="board" ref={boardRef}></div>
        </div>
    )
}
