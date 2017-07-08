var exports = module.exports = {};

exports.getResponse = function(messageFromUser){
    var response = '';
    if(messageFromUser.includes('address')){
        response = 'kiun tu ny bund dyni hai ?';
    }
    else if(messageFromUser.includes('hi')){
        response = 'walikum salam napooti raaan ky';
    }
    else{
        response = 'koi simple question he puch ly gandu'
    }
     return response;
}