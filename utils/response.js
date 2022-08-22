const {parseResponseValues} = require('./helpers');

const arrayResponse =  (array, outResponse) => {
    return array.map((object)=> {
        return parseResponseValues(object.properties, outResponse);
    });
}

module.exports = {
    arrayResponse
}