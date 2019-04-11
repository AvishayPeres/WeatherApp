class APImanager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        let getData = await $.get(`/cities`)
        this.cityData = getData
    }
    getCityData(cityName) {
        $.get(`/City/:${cityName}`, function (city) {
            this.cityData.push(city)
        })
    }
    saveCity(cityName) {
        let chosenCity
        for (let city of cityData) {
            if (City.name == cityName) {
                chosenCity = city
            }
        }
        $.post(`/city/`, chosenCity, function (city) {
        })
    }
    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            type: 'delete',
            success: function (city) {
                console.log("deleted")
            }
        })
    }
}