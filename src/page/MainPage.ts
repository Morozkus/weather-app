import WeatherPanel from "../components/WeatherPanel.js";
import CardBoard from "../components/CardBoard.js";
import Search from "../components/Search.js";

export default class MainPage {
    static body = document.body

    async run() {
        // стандартный контейнер для централизации и ограничения пространства
        const container = document.createElement('div')
        container.classList.add('container', 'card__container')

        const weatherPanel = new WeatherPanel()
        // run() добавляет панель в начало document.body
        weatherPanel.run()

        const cardBoard = new CardBoard()
        const search = new Search(cardBoard)

        container.append(search.searchPanel, cardBoard.cardBoard)

        MainPage.body.append(container)
    }
}