window.addEventListener("load", () => {
  loadQuote();
});

function loadQuote() {
  let quotes = [
    "Design is not just what it looks like and feels like. Design is how it works.",
    "Innovation distinguishes between a leader and a follower.",
    "I want to put a ding in the universe.",
    "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
    "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
    "It's better to be a pirate than to join the Navy.",
    'The hardest thing when you think about focusing. You think focusing is about saying "Yes." No. Focusing is about saying "No." And when you say "No," you piss off people.',
    "I'm as proud of what we don't do as I am of what we do.",
    "Things don't have to change the world to be important.",
    "It's rare that you see an artist in his 30s or 40s able to really contribute something amazing.",
  ];
  const quoteAuthors = [
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
    "Steve Jobs",
  ];
  const homeWelcomeTextSection = document.querySelector("#quote");
  const homeWelcomeAuthorSection = document.querySelector(
    "#daily-welcome-quote-author"
  );
  const index = Math.floor(Math.random() * quotes.length);
  console.log("Quote " + quotes[index], "quoteAuthors " + quoteAuthors[index]);
  homeWelcomeTextSection.innerHTML = "” " + quotes[index] + " ”";
  homeWelcomeAuthorSection.innerHTML = "~ " + quoteAuthors[index];
}
