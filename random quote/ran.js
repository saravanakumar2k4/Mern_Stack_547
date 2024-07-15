var quotes = [
    {
        quote: "The secret to a happy life is to find something you're willing to lose for it.",
        author: "Haruki Murakami"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Person 1"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Person 2"
    },
    {
        quote: "It's not the destination, but the journey that matters.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the cour",
        author: 'San'
    },
    {
        quote: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
        author: "Nikola Tesla"
    }];


    function generateRanQuote(){
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = quotes[randomIndex];
        document.getElementById("quote").innerHTML ="<h1 class ='display-4 fw-bold text-success'>" + randomQuote.quote + '<br>' + "<h1 class='h5 text-warning'> Author: " + randomQuote.author;

    }