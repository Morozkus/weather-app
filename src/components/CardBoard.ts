import { City } from "../Interfaces/Interfaces.js"
import Card from "../cards/Card.js"

export default class CardBoard {
    cardBoard: HTMLElement

    constructor() {
        this.cardBoard = this.createCardBoard()
    }

    createCardBoard(): HTMLElement {
        const board = document.createElement('ul')
        board.classList.add('card-board')

        return board
    }

    render(cities: City[]) {
        this.cardBoard.innerHTML = ''

        if (!cities.length) {
            const error = document.createElement('h1')
            error.textContent = 'Город не найден'
            this.cardBoard.append(error)
        }

        cities.forEach(city => {
            const card = new Card(city)
            this.cardBoard.append(card.card)
        })
    }
}