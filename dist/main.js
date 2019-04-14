const apiManager = new APImanager()
const tempManager = new TempManager()
const renderer = new Renderer()


const loadPage = async () => {
    await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
}

const handleSearch = async cityInput => {
    await tempManager.getCityData(cityInput)
    renderer.renderData(tempManager.cityData)
}
$("#search-button").click( () => { 
    handleSearch( $("#city-input").val())
    $("#city-input").val("")
})

$("#citiesContainer").on("click", ".add", function(){
    let cityName = $(this).siblings(".name").text()
    if($(this).text() == '<i class=""></i>'){
        apiManager.saveCity(cityName)
        $(this).text() = '<i class=""></i>'
    }
    else{
        apiManager.removeCity(cityName)
        $(this).text() = '<i class="
        "></i>'
    
    }
})


loadPage()