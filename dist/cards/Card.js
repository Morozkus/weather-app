var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import weatherPanel from "../components/WeatherPanel.js";
export default class Card {
    constructor(city) {
        this.card = this.createCard(city.name, city.coords.lat, city.coords.lon);
    }
    createCard(city, lat, lon) {
        const card = document.createElement('li');
        card.classList.add('card');
        const sky = document.createElement('div');
        sky.classList.add('card__img-sky');
        const cardCity = document.createElement('h2');
        cardCity.classList.add('card__city');
        cardCity.textContent = city;
        const cardBtn = document.createElement('btn');
        cardBtn.classList.add('card__btn');
        cardBtn.textContent = 'Прогноз';
        cardBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const weather = yield (yield fetch(`http://localhost:3223/api/weather?lat=${lat}&lon=${lon}`)).json();
            const { temp, icon, condition, wind_speed, humidity } = weather.fact;
            weatherPanel.render(`${temp}&deg;`, city, `https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`, humidity, wind_speed, condition);
        }));
        card.append(sky, cardCity, cardBtn);
        return card;
    }
}
//# sourceMappingURL=Card.js.map