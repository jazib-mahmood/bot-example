const restify = require('restify');
const Builder = require('botbuilder');
var responseEvaluator = require('./responses.js');

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('server listening at : ', server.name, server.url  )
})

var connector = new Builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

var bot = new Builder.UniversalBot(connector, function (session) {
    session.send(responseEvaluator.getResponse(session.message.text));
});