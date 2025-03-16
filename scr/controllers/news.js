//expotando a função index, deixando disponivel para ser usada em outras partes do projeto 

module.exports.index = function(application, req, res) {

    var newsModel = new application.scr.models.news();

    //chama o metodo getlasnews do modulo news model para buscar as ultimas noticias, esse proximo metodo recebe a função de callback que sera executada após a consulta ser concluida

    newsModel.getLastNews(function(err, result){

        res.render("news/index", {news: result});
    });
}