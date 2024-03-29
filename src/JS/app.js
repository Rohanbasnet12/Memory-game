// Create card item array
const cardsItem = [
    './assests/IMG/img1.svg',
    './assests/IMG/img2.svg',
    './assests/IMG/img3.svg',
    './assests/IMG/img4.svg',
    './assests/IMG/img5.svg',
    './assests/IMG/img6.svg',
    './assests/IMG/img7.svg',
    './assests/IMG/img8.svg',
    './assests/IMG/img1.svg',
    './assests/IMG/img2.svg',
    './assests/IMG/img3.svg',
    './assests/IMG/img4.svg',
    './assests/IMG/img5.svg',
    './assests/IMG/img6.svg',
    './assests/IMG/img7.svg',
    './assests/IMG/img8.svg',
];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a random integer between 0 and max (exclusive)
function getRandomInt(max) {
    var randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    return randomValues[0] % max;
}

// Function to reset the game
function resetGame() {
    // Shuffle the cards
    shuffleArray(cardsItem);

    // Clear the existing cards from the DOM
    $('.memoryCard_wrapper').empty();

    // Loop through the shuffled cardsItem array
    for (let i = 0; i < cardsItem.length; i++) {
        // Create a div element with class name "card"
        const card = $('<div>', { class: 'card' });
        // Create an img element with class name "cardImg"
        const cardImg = $('<img>', { class: 'cardImg' });
        // Set the src attribute of the img element to the corresponding image URL
        cardImg.attr('src', cardsItem[i]);
        // Append the img element to the card element
        card.append(cardImg);
        // Append the card element to an existing container with class "memoryCard_wrapper"
        $('.memoryCard_wrapper').append(card);

        $(document).ready(function () {
            $('.card').on('click', function () {
                $(this).addClass('showCard');

                setTimeout(function () {
                    var showCards = $('.showCard');

                    if (showCards.length > 1) {
                        if ($(showCards[0]).html() === $(showCards[1]).html()) {
                            showCards.each(function () {
                                $(this).addClass('boxMatch').removeClass('showCard');
                            });

                            if ($('.boxMatch').length === cardsItem.length) {
                                alert('You won!');
                            }
                        } else {
                            showCards.removeClass('showCard');
                        }
                    }
                }, 500);
            });
        });

    }
}


// Initial setup
$(document).ready(function () {
    // Shuffle the cards
    shuffleArray(cardsItem);

    // Render the shuffled cards
    resetGame();

    // Add click event listener to the reset button
    $('#resetBtn').on('click', resetGame);
});
