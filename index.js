const functions = {
    format: async function(number){
       return number.toString().split("").reverse().join("").match(new RegExp('.{1,' + 3 + '}', 'g')).reverse().join(",");
    },
    getPercentage: async function(value, total) {
       return (value / total) * 100 
    },
    random: async function({ min = 0 , max = 999999**2}){
        return Math.random() * (max - min + 1) + min;
    },
    evaluate: async function(expression){
        const r = /[a-zA-Z]/g
        const v = String(expression.toLowerCase().replace("pi", Math.PI))
        if(r.test(v) == true) throw new SyntaxError("Expression shall not contain a string value.")
        return eval(v)
    },
    multipleOf: async function(basenum,num){
        return num % basenum ? false : true
    },
    root: async function(number) {
        return Math.sqrt(number)
    } 
}

module.exports = functions
