const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder',
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand',
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller',
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.',
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison',
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman',
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly',
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga',
    },
    {
        quote: 'When you go through hardships and decide not to surrender, that is strength.',
        author: 'Arnold Schwarzenegger',
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn',
    },
    {
        quote: 'It is kind of fun to do the impossible.',
        author: 'Walt Disney',
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
    },
    {
        quote: 'I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.',
        author: 'Rosa Parks',
    },
];


const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
autor.innerText = todaysQuote.author;

