module.exports = {
    getPercentage: async function(value, total) {
       return (value / total) * 100 
    },
    random: async function(min, max){
        if(!min) min = 0
        if(!max) max = 999999**2
        return Math.random() * (max - min + 1) + min;
    },
    evaluate: async function(expression){
        const r = /[a-zA-Z]/g
        const v = String(expression).replace("pi",Math.PI)
        if(r.test(v) == true) throw new SyntaxError("Expression shall not contain a string value.")
        return eval(v)
    },
    multipleOf: async function(basenum,num){
        return num % basenum ? false : true
    }
}
