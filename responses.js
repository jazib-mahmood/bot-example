var exports = module.exports = {};

exports.getResponse = function(messageFromUser){
    var response = '';
    if(messageFromUser.includes('address')){
        response = 'kiun dun';
    }
    else if(messageFromUser.includes('hi')){
        response = 'hey';
    }
    else{
        response = 'idk man'
    }
     return response;
}