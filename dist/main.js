const tempManager = new TempManager()
const renderer = new Renderer()


const loadPage = async () => {
    await tempManager.getDataFromDB()
    renderer.render(tempManager.cityData)
}

const handleSearch = async (cityInput) => {
    await tempManager.getCityData(cityInput)
    renderer.render(tempManager.cityData)
}

$("#searchIcon").click( () => { 
    handleSearch( $("input").val())
    $("input").val("")
})

$("#citiesContainer").on("click", ".fal fa-search-plus", ".add", function(){
    let cityName = $(this).siblings(".name").text()
    if($(this).text() == '<i class="fal fa-search-plus"></i>'){
        apiManager.saveCity(cityName)
        $(this).text() = '<i class="fal fa-search-plus"></i>'
    }
    else{
        apiManager.removeCity(cityName)
        $(this).text() = '<i class="fal fa-search-plus"></i>'
        }
})

loadPage()