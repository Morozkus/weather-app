enum WeatherImg {
    OKEY = 'img/IMG_5741.PNG',
    BAD = 'img/IMG_5742.PNG'
}

class WeatherPanel {
    public weatherPanelComponent: HTMLElement
    public body: HTMLElement

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
        temp.id = 'temp'
        temp.innerHTML = '?&deg;'

        const location = document.createElement('span')
        location.classList.add('location')
        location.id = 'location'
        location.textContent = 'Неизвестно'
        // 
        currentTemp.append(temp, location)
        // 

        const currentWeather = document.createElement('div')
        currentWeather.classList.add('currentWeather')

        const conditions = document.createElement('div')
        conditions.classList.add('conditions')
        conditions.id = 'conditions'
        const conditionsIMG = document.createElement('img')
        conditionsIMG.id = 'condition-img'
        conditions.append(conditionsIMG)

        // 
        const info = document.createElement('div')
        info.classList.add('info')

        const rain = document.createElement('span')
        rain.classList.add('rain')
        rain.id = 'rain'
        const wind = document.createElement('span')
        wind.id = 'wind'
        wind.classList.add('wind')

        info.append(rain, wind)
        // 
        currentWeather.append(conditions, info)
        // 

        weatherCard.append(currentTemp, currentWeather)
        weatherWrapper.append(weatherCard)

        return weatherWrapper
    }

    render(temp: string, location: string, img: string, rain: string | number, wind: string | number, condition: string) {
        const wrapper = this.getElement()

        const Wtemp = wrapper.querySelector('#temp')
        Wtemp!.innerHTML = temp

        const Wlocation = wrapper.querySelector('#location')
        Wlocation!.textContent = location

        const WconditionImg = wrapper.querySelector('#condition-img')
        WconditionImg!.setAttribute('src', img)

        const Wrain = wrapper.querySelector('#rain')
        Wrain!.textContent = String(rain)

        const Wwind = wrapper.querySelector('#wind')
        Wwind!.textContent = String(wind)

        if (['clear', 'partly-cloudy', 'cloudy'].includes(condition)) {
            this.body.setAttribute('style', `background-image: url(${WeatherImg.OKEY});`)
        } else {
            this.body.setAttribute('style', `background-image: url(${WeatherImg.BAD});`)
        }

    }
}

export default new WeatherPanel