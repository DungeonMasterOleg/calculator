document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display')
    const buttons = document.querySelectorAll('.btn')
    const clearButton = document.getElementById('clear')
    const equalsButton = document.getElementById('equals')
    const procentButton = document.getElementById('procent')
    const plusminusButton = document.getElementById('plusminus')
    const operators = document.querySelectorAll('.operator')
    const check = ['+', '-', '*', '/','%','+|-']

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            const lastValue=display.value.slice(-1)
            if ( lastValue !=   operators.includes("operator") 
        ) {
                display.value += value 
            }
        })
    })

    plusminusButton.addEventListener('click', () => {
        display.value = Math.abs(value)
    })

    procentButton.addEventListener('click', () => {
        display.value = eval(x % y)
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerHTML

                display.value += value  
         
            
           
        })
    })

    clearButton.addEventListener('click', () => {
        display.value = ''
    })



    equalsButton.addEventListener('click', () => {
        try {
            display.value = eval(display.value)
        } catch (error) {
            display.value = `Ошибка в выражении: ${error.message}`
        }
    })
})