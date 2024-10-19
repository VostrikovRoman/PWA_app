document.addEventListener('DOMContentLoaded', function(){
    const butt_1 = document.getElementById('butt_1')
    const butt_2 = document.getElementById('butt_2')
    const butt_3 = document.getElementById('butt_3')
    const butt_4 = document.getElementById('butt_4')
    const butt_5 = document.getElementById('butt_5')
    const butt_6 = document.getElementById('butt_6')
    const butt_7 = document.getElementById('butt_7')
    const butt_8 = document.getElementById('butt_8')
    const butt_9 = document.getElementById('butt_9')
    const butt_0 = document.getElementById('butt_0')

    const butt_pl = document.getElementById('butt_+')
    const butt_min = document.getElementById('butt_-')
    const butt_un = document.getElementById('butt_*')
    const butt_del = document.getElementById('butt_/')
    const butt_c = document.getElementById('butt_c')
    const butt_res = document.getElementById('butt_=')

    const result = document.getElementById('output')
    let expression = ""

    butt_0.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "0";
        result.textContent = expression
    })
    butt_1.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "1";
        result.textContent = expression
    })
    butt_2.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "2";
        result.textContent = expression
    })
    butt_3.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "3";
        result.textContent = expression
    })
    butt_4.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "4";
        result.textContent = expression
    })
    butt_5.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "5";
        result.textContent = expression
    })
    butt_6.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "6";
        result.textContent = expression
    })
    butt_7.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "7";
        result.textContent = expression
    })
    butt_8.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "8";
        result.textContent = expression
    })
    butt_9.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "9";
        result.textContent = expression
    })
    butt_pl.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "+";
        result.textContent = expression
    })
    butt_min.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "-";
        result.textContent = expression
    })
    butt_un.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "*";
        result.textContent = expression
    })
    butt_del.addEventListener('click', function(){
        if (expression == "Infinity")
            expression = ""
        expression += "/";
        result.textContent = expression
    })
    butt_res.addEventListener('click', function(){
        expression = String(eval(expression));
        if (expression == "Infinity"){
            result.textContent = "Ошибка!"
        }
        else{
            result.textContent = expression
        }
        
    })
    butt_c.addEventListener('click', function(){
        expression = "";
        result.textContent = expression
    })

    //serviceWorker
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registred', registration)
            })
            .catch(error => {
                console.log('SW failed', error)
            })
    }


})