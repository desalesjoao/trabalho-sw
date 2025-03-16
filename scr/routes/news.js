//exporta uma função que recebe oobjeto 'application' como parametro, essa funçao configura uma rota na aplicação 

module.exports = function(application){

    application.get('/', function(req, res){

        application.scr.controllers.news.index(application, req, res);
    });
} 