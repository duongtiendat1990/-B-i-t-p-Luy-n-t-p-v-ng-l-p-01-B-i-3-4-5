function printFibonacciSequence() {
    let fibonacciSequence=[];
    let number = document.getElementById('number').value;
    let count = 0;
    let table = "<table border='1' width='300' cellspacing='0' cellpadding='3'><tr>";
    let j = 0;
    for(let x=0;count<=number-1;x++) {
        let fibonacciNumber = fibonacciSequence[x - 2] + fibonacciSequence[x - 1];
        if (fibonacciNumber) {
            fibonacciSequence.push(fibonacciNumber);
            count++;
            table = table + "<td>" + fibonacciNumber + "</td>";
            j++
        } else {
            fibonacciNumber = 1;
            fibonacciSequence.push(fibonacciNumber);
            count++;
            table = table + "<td>" + fibonacciNumber;
            j++
        }
        if (j==5) {
            table = table + "</ tr>" +"<tr>";
            j = 0
        }
    }
    table = table + "</table>";
    document.getElementById('table').innerHTML = table;
}