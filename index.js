module.exports = {
    getPercentage: function(value, total) {
       if(!typeof value == "number") throw new TypeError("Value must be of type number.")
       if(!typeof total == "number") throw new TypeError("Total must be of type number.")
       return (value / total) * 100 
    }
}