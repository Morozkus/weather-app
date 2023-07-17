export default class Search {
    searchPanel: HTMLElement

    constructor() {
        this.searchPanel = this.createSearchPanel()
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
        searchBtn.addEventListener('click', () => {
            if (!search.value) return;
            console.log(1);

        })

        searchPanel.append(search, searchBtn)

        return searchPanel
    }


}