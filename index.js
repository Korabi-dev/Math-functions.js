module.exports = {
    /**
     Get the percentage of two numbers
    **/
    getPercentage: async function(value, total) {
       return (value / total) * 100 
    },
    /**
      Get a random number between two numbers
    **/
    random: async function({ min = 0 , max = 999999**2}){
        return Math.random() * (max - min + 1) + min;
    },
    /**
      idk how to explain this
    **/
    evaluate: async function(expression){
        const r = /[a-zA-Z]/g
        const v = String(expression.toLowerCase().replace("pi", Math.PI))
        if(r.test(v) == true) throw new SyntaxError("Expression shall not contain a string value.")
        return eval(v)
    },
    /**
      Check if a number is a multiple of another
    **/
    multipleOf: async function(basenum,num){
        return num % basenum ? false : true
    },
    /**
     Get the squareroot of a number
    **/
    root: async function(number) {
        return Math.sqrt(number)
    } 
}
