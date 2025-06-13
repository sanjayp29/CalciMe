# CalciMe
<br>
Repo for calculator. : )
<br>
We can use the below function in the scrpits.js file in order to evaluate the Power(^) calculation without writing or appending ** in the expression.
<br>
Since Javascript language does not comprehend (^) by default as power function instead it understands (**) as that. 
<br> 
function calculate() {
<br>
          try {
<br>
               let expr = display.innerText;
<br>
               expr = expr.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, 'Math.pow($1,$2)');
<br>
               display.innerText = eval(expr);
<br>
               scrollToRight();
<br>
           } catch {
<br>
               display.innerText = 'Error';
<br>
           }
<br>
        }
<br>
<br>
This line <mark>expr = expr.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, 'Math.pow($1,$2)')</mark> <br> replaces the raised to symbol (^) wherever used in the expression and uses power function between the operands. 
<br>
The <mark>/g</mark> is the global flag which replaces all matches of the regular expression in the string, not just the first one.
