class Renderer {
    render(allCities) {
        console.log(allCities)
        let source = $('#cityTemplate').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ allCities });
        $('#citiesContainer').empty().append(newHTML);
    }
}