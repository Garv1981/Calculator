
        function addToDisplay(value) {
            const display = document.querySelector('input[name="display"]');
            const lastChar = display.value.slice(-1);

           
            const operators = ['+', '-', '*', '/', '.'];

           
            if (operators.includes(value)) {
                if (operators.includes(lastChar)) {
                    display.value = display.value.slice(0, -1) + value;
                } else if (display.value === '' && value !== '-') {
                    return; 
                } else {
                    display.value += value;
                }
            } else {
                display.value += value;
            }
        }

        function evaluateDisplay() {
            const display = document.querySelector('input[name="display"]');
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = "Error";
            }
        }
   