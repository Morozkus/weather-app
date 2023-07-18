import { City } from "../Interfaces/Interfaces"
import weatherPanel from "../components/WeatherPanel.js"

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

        cardBtn.addEventListener('click', async () => {
            const weather = await (await fetch(`http://localhost:3223/api/weather?lat=${lat}&lon=${lon}`)).json()
            const { temp, icon, condition, wind_speed, humidity } = weather.fact
            
            weatherPanel.render(`${temp}&deg;`, city, `https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`, humidity, wind_speed, condition)


        })

        card.append(sky, cardCity, cardBtn)
        return card
    }
}