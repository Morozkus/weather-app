import Card from "../cards/Card.js";
export default class CardBoard {
    constructor() {
        this.cardBoard = this.createCardBoard();
    }
    createCardBoard() {
        const board = document.createElement('ul');
        board.classList.add('card-board');
        return board;
    }
    render(cities) {
        this.cardBoard.innerHTML = '';
        if (!cities.length) {
            const error = document.createElement('h1');
            error.textContent = 'Город не найден';
            this.cardBoard.append(error);
        }
        cities.forEach(city => {
            const card = new Card(city);
            this.cardBoard.append(card.card);
        });
    }
}
//# sourceMappingURL=CardBoard.js.map