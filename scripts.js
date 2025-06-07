const display = document.getElementById('display');

        function append(value) {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
            scrollToRight();
        }

        function clearDisplay() {
            display.innerText = '0';
        }

        function backspace() {
            display.innerText = display.innerText.slice(0, -1) || '0';
            scrollToRight();
        }

        function calculate() {
            try {
                let expr = display.innerText;
                display.innerText = eval(expr);
                scrollToRight();
            } catch {
                display.innerText = 'Error';
            }
        }

        function scientific(type) {
            try {
                let val = eval(display.innerText);
                switch (type) {
                    case 'sqrt': display.innerText = Math.sqrt(val); break;
                    case 'square': display.innerText = Math.pow(val, 2); break;
                    case 'log': display.innerText = Math.log10(val); break;
                    case 'sin': display.innerText = Math.sin(val); break;
                    case 'cos': display.innerText = Math.cos(val); break;
                    case 'tan': display.innerText = Math.tan(val); break;
                }
                scrollToRight();
            } catch {
                display.innerText = 'Error';
            }
        }

        function scrollToRight() {
            display.scrollLeft = display.scrollWidth;
        }

        document.addEventListener('keydown', function (e) {
            e.preventDefault();
            const key = e.key;
            if (/[0-9+\-*/().]/.test(key)) append(key);
            else if (key === '^') append('^');
            else if (key === 'Enter' || key === '=') calculate();
            else if (key === 'Backspace') backspace();
            else if (key === 'Escape') clearDisplay();
            else if (key === 's') scientific('sin');
            else if (key === 'c') scientific('cos');
            else if (key === 't') scientific('tan');
            else if (key === 'l') scientific('log');
            else if (key === 'q') scientific('sqrt');
        });