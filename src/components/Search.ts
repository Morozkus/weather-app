import axios from "../../node_modules/axios/index.js"
import { City } from "../Interfaces/Interfaces.js"
import CardBoard from "./CardBoard.js"

export default class Search {
    searchPanel: HTMLElement
    board: CardBoard

    constructor(board: CardBoard) {
        this.searchPanel = this.createSearchPanel()
        this.board = board
    }

    createSearchPanel(): HTMLElement {
        const searchPanel = document.createElement('label')
        searchPanel.classList.add('search__label')
        searchPanel.setAttribute('for', 'search')

        const search: HTMLInputElement = document.createElement('input')
        search.classList.add('search')
        search.type = 'text'
        search.name = 'search'
        search.placeholder = 'Введите город'
        search.id = 'search'

        const searchBtn = document.createElement('button')
        searchBtn.classList.add('btn', 'search__btn')
        searchBtn.textContent = 'Найти'

        searchBtn.addEventListener('click', async () => {
            if (!search.value) return
            this.board.render(await this.findCard(search.value))

        })

        searchPanel.append(search, searchBtn)

        return searchPanel
    }

    async findCard(cityNameFromInput: string): Promise<City[]> {
        const cardList: City[] = await (await fetch(`http://localhost:3223/api/cities?cityName=${cityNameFromInput}`)).json()

        return cardList
    }



}