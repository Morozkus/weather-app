export default class WeatherPanel {
    public weatherPanelComponent: HTMLElement
    private body: HTMLElement

    constructor() {
        this.body = document.body
        this.weatherPanelComponent = this.createWeatherPanel()
    }

    getElement() {
        return this.weatherPanelComponent
    }

    run() {
        this.body.prepend(this.getElement())
    }

    private createWeatherPanel(): HTMLElement {
        const weatherWrapper = document.createElement('div')
        weatherWrapper.id = 'weather_wrapper'
        // 
        const weatherCard = document.createElement('div')
        weatherCard.classList.add('weatherCard')

        // 
        const currentTemp = document.createElement('div')
        currentTemp.classList.add('currentTemp')

        const temp = document.createElement('span')
        temp.classList.add('temp')
        temp.innerHTML = '?&deg;'

        const location = document.createElement('span')
        location.classList.add('location')
        location.textContent = 'Неизвестно'
        // 
        currentTemp.append(temp, location)
        // 

        const currentWeather = document.createElement('div')
        currentWeather.classList.add('currentWeather')

        const conditions = document.createElement('span')
        conditions.classList.add('conditions')

        // 
        const info = document.createElement('div')
        info.classList.add('info')

        const rain = document.createElement('span')
        rain.classList.add('rain')
        const wind = document.createElement('span')
        wind.classList.add('wind')

        info.append(rain, wind)
        // 
        currentWeather.append(conditions, info)
        // 

        weatherCard.append(currentTemp, currentWeather)
        weatherWrapper.append(weatherCard)

        return weatherWrapper
    }
}