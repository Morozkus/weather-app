import { City } from "../Interfaces/Interfaces"

export default class Card {
    card: HTMLElement

    constructor(city: City) {
        this.card = this.createCard(city.name, city.coords.lat, city.coords.lon)
    }

    createCard(city: string, lat: string, lon: string): HTMLElement {
        const card = document.createElement('li')
        card.classList.add('card')

        const sky = document.createElement('div')
        sky.classList.add('card__img-sky')

        const cardCity = document.createElement('h2')
        cardCity.classList.add('card__city')
        cardCity.textContent = city

        const cardBtn = document.createElement('btn')
        cardBtn.classList.add('card__btn')
        cardBtn.textContent = 'Прогноз'
        cardBtn.addEventListener('click', () => {
            console.log(cardCity.textContent, lat, lon);
        })

        card.append(sky, cardCity, cardBtn)
        return card
    }
}