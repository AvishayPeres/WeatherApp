class Renderer{
    render(citiesArr){
        console.log(citiesArr)
        let source = $('#cityTemplate').html();
        let template = Handlebars.compile(source);
        let newHTML = template({citiesArr});
        $('#citiesContainer').empty().append(newHTML);
    }
}