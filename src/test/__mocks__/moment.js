

const moment = require.requireActual('moment');//definido variavel que guarda o valor do moment

export default (timestamp = 0)=>{
    return moment(timestamp);
}