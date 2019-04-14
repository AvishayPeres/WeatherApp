class APImanager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        let getData = await $.get(`/cities`)
        this.cityData = getData
    }
    async getCityData(cityName) {
        let city = await $.get(`/city/${cityName}`)
        city.new = true
        
        this._cityData.push(city)
    }
    saveCity(cityName) {
        let inputCity
        for (let city of cityData) {
            if (city.name == cityName) {
                inputCity = city
            }
        }
        $.post(`/city/`, inputCity, function (city) {
        })
    }

    removeCity(cityName) {
        let cityIndex = this._cityData.findIndex(c => c.name === cityName)
        this._cityData.splice(cityIndex, 1)

        $.ajax({
            url: `./city/${cityName}`,
            method: "DELETE",
            success: function (response) { }
        })
    }