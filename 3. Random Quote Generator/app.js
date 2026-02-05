const { useImperativeHandle } = require("react")

const quotes = [
    "The only way to do great work is to love what you do."
    "Life is what happens when you're busy making other plans."
    "The purpose of our lives is to be happy."
    "Get buy living or get busy dying."
    "In the end, it's not the years in your life that count. It's the life in your years."
]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    
    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)
    
    if (usedIndexes.has(randomIdx)) continue
    
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break}
}