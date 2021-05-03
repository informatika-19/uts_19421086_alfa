const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualanSchema = new Schema({
    JenisTanaman: {
        type: String
    },
    UkuranTanaman: {
        type: String
    },
    UsiaTanaman: {
        type: String
    },
    Harga: {
        type: String
    }
    
    
}) 

module.exports = mongoose.model('penjualan', penjualanSchema)