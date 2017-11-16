$(function () {

    // contact form animations
    $('#contact').click(function () {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) // if the target of the click isn't the container...
            &&
            container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
    });

});

var quotes = ['The Monarch\'s wings are colored in a black, orange and white pattern and they have a wing-span of 3 1/2-4 inches.',
  'Millions of Monarchs migrate approximately 2500 miles in the fall to the warmer climates of California and Mexico.',
  'Monarchs typically mate more than once and can cumulatively lay about 250 eggs.',
  'These butterflies only eat milkweed as larvae. As adults they eat nectar from plants such as lilacs, red clover and thistles.',
  'As both caterpillars and butterflies, Monarchs are aposematic-warning predators with their coloring of their poisonous characteristics.',
  'Due to habitat destruction and the use of pesticides the Monarch population is dwindling.',
  'Monarchs have a broad spectrum perception of colors and can see UV light humans can\'t.',
  'The metamorphosis process is made up of four stages and each year has four generations of butterflies.',
  'Their wings flap slower than other butterflies at about 300 to 720 times per minute.', ]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
