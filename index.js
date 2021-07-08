const functions = {
    format: function(number){
       return number.toString().split("").reverse().join("").match(new RegExp('.{1,' + 3 + '}', 'g')).reverse().join(",");
    },
    getPercentage:  function(value, total) {
       return (value / total) * 100 
    },
    random: function({ min = 0 , max = 999999**2}){
        return Math.random() * (max - min + 1) + min;
    },
    evaluate: function(expression){
        const r = /[a-zA-Z]/g
        const v = String(expression.toLowerCase().replace("pi", Math.PI))
        if(r.test(v) == true) throw new SyntaxError("Expression shall not contain a string value.")
        return eval(v)
    },
    multipleOf: function(basenum,num){
        return num % basenum ? false : true
    },
    root:  function(number) {
        return Math.sqrt(number)
    } 
}

module.exports = functions
