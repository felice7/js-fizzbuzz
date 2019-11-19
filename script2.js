// //Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"


for (var i=1; i <= 100; i++)
//stampa numeri da 1 fino a 100
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    // sostituzione multipli di 3 e 5 nr. 15 30 45 60 75 90  
    else if (i % 3 == 0)
        console.log("Fizz");
    // sostituzione multipli di 3    
    else if (i % 5 == 0)
        console.log("Buzz");
    // sostituzione multipli di 5    
    else
        console.log(i);
    //tutti gli altri numeri invariati
}
