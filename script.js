// Initialize button click count
var noButtonClickCount = 0;
var currentIndex = 0;

// Function to handle initial response
function checkInitialResponse() {
    var response = document.getElementById("first-response").value.toLowerCase();
    if (response === "yes") {
        document.getElementById("initial-question").classList.add("hidden");
        document.getElementById("second-question").classList.remove("hidden");
    } else if (response === "no") {
        alert("Whoops! Looks like you typed 'No.' Let's try 'Yes' instead!");
    } else {
        alert("Please type 'yes' or 'no'");
    }
}

// Function to handle second response
function checkSecondResponse() {
    var response = document.getElementById("second-response").value.toLowerCase();
    if (response === "yes") {
        document.getElementById("second-question").classList.add("hidden");
        document.getElementById("happy-birthday").classList.remove("hidden");
        // Start showing birthday messages when the user clicks the second submit button
        showBirthdayMessage();
    } else if (response === "no") {
        alert("Whoops! Looks like you typed 'No.' Let's try 'Yes' instead!");
    } else {
        alert("Please type 'yes' or 'no'");
    }
}

// Function to show confession message
function showConfession() {
    document.getElementById("happy-birthday").classList.add("hidden");
    document.getElementById("confession-message").classList.remove("hidden");
    // Start showing birthday messages when the user reaches this point
    showBirthdayMessage();
}

// Function to ask if like
function askLike() {
    document.getElementById("confession-message").classList.add("hidden");
    document.getElementById("like-question").classList.remove("hidden");
    // Start showing birthday messages when the user reaches this point
    showBirthdayMessage();
}


// Function to show like response
function showLikeResponse(response) {
    if (response === "yes") {
        document.getElementById("like-question").classList.add("hidden");
        document.getElementById("like-response").classList.remove("hidden");
        var heartContainer = document.getElementById("heart-container");
        heartContainer.style.display = "block";
    }
}

// Function to move "No" button and adjust appearance
function teleportNo() {
    noButtonClickCount++;
    var noButton = document.getElementById("no-btn");
    var buttonRect = noButton.getBoundingClientRect();
    var maxX = window.innerWidth - buttonRect.width;
    var maxY = window.innerHeight - buttonRect.height;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.top = randomY + "px";
    noButton.style.left = randomX + "px";

    if (noButtonClickCount >= 3) {
        var scaleFactor = 1 - (noButtonClickCount - 2) * 0.1;
        noButton.style.transform = "scale(" + scaleFactor + ")";
    }

    if (noButtonClickCount >= 2) {
        var yesButton = document.getElementById("yes-btn");
        if (noButtonClickCount === 2) {
            yesButton.textContent = "Yes na kasii";
        }
        if (noButtonClickCount === 3) {
            yesButton.textContent = "Sinasaktan mo na ako, pindutin mo na kasi yung Yes";
        }
        if (noButtonClickCount === 5) {
            yesButton.textContent = "ang sakit na po, yes na kasi pintudin mo";
        }
        var scaleFactor = 2 + noButtonClickCount * 0.2;
        yesButton.style.transform = "scale(" + scaleFactor + ")";

        var fontSize = 20 - (noButtonClickCount - 2) * 2;
        yesButton.style.fontSize = fontSize + "px";
    }
}

// Function to display birthday messages with typing animation
function showBirthdayMessage() {
    const birthdayMessage = document.getElementById('birthday-message');
    const messages = [
        "Hellooooooooooo, allow me to call you bebii now AAHAHAHAHAH",
        "Happy 14th birthday for you, my bebii.",
        "I thank you for being part of my life.",
        "Thank you din kasi nung ano, binabati mo ako ng happy birthday, so this time, babatiin kita.",
        "I hope you appreciate this kind of greeting(programming) and the words as well as I appreciated you in my life,",
        "but for me, this isn't enough.",
        "Pero sana happy ka sa ginawa ko,",
        "and thankyou always for being the source of my happiness.",
        "I hope that on this very special day ay happy ka and filled with joy and blessing.",
        "I thank God for letting us na mag meet in this lifetime.",
        "Sana healthy ka at palaging happy.",
        "Enjoy your birthday! Happy birthday po.",
        "Uhm....",
        " may sasabihin pa ako.....",
        "Do you still remember nung May 3? AHAAHHAHAH",
        "Diba, sabi mo biglang nag-change 'yung tone ng mga messages ko?",
        "And akala mo galit ako sayo...",
        "Uhmm...,",
        "actually, may ginawa ako, and 'yung ginagawa ko is itong small gift ko sayo para sa birthday mo.",
        "And, sana ma-appreciate mo talaga.",
        "And, diba, nag-send ako ng calculator na ginawa ko?",
        "Ginawa ko 'yun para maging cover dito,",
        "para kunyari 'yun 'yung reason kung bakit ako naging ganon,",
        "pero 'yung totoo, ito talaga 'yung ginagawa ko. Hehehe, sorry ulit..",
        "Uhm...",
        "May sasabihin pa ulit ako..",
        "but yeah.....",
        "I'm taking this chance to....",
        "I've been waiting on this moment to openly express my heart's current feelings sayo right now.",
        "I want you to know na you've become someone na special sakin.",
        "HAHSHSHS, idk why pero you REALLY REALLY captured my heart in ways na 'di ko ma-imagine",
        "Yeah.....",
        "I like you a lot and, uhm",
        "I never fake my compliments about you",
        "And do you know what?",
        "Mas maganda ka sa paningin ko pag you don't wear makeup because you look VERY VERY beautiful to me and...",
        "I reallyyy like your eyes though",
        "like when tinitignan ko, like uh, I'm falling instantly.",
        "And your smile is VERY VERY CUTEEEEE especially with dimples AHAHAHA(nainlovelalo)",
        "and araw araw, I fall in love even more. I dont know why HAHAHAH. Ginayuma mo ako no",
        "I've been wanting to tell you this for a while now",
        "and I couldn't think of a better moment than now.",
        "Regardless of how you feel, I'm very happy na nakuha ko na 'yung chance na ma-share this feeling sayo.",
        "Happy birthday, bebiiiiii.",
        "HAHAH ginayuma mo talaga ata ako eh HAHAHAH",
        "hesbhabha enjoy your birthday, bebiiii iloveyouuu MWAHMWAHMWAHMWAH",
        "I hope you really appreciate this even though ang pangit tas simple lang because I'm not really that good talaga ih",
        "And I hope I make you happy sa ginawa ko hehehe. I Loveee youuu."
    ];

    const message = messages[currentIndex];
    if (message) {
        // Set the initial text content of the element
        if (message === "Hellooooooooooo, allow me to call you Bebi now. AAHAHAHAHAH") {
            birthdayMessage.textContent = "";
        } else {
            birthdayMessage.textContent = message[0];
        }
        // Initiate the typing animation
        typeMessage(birthdayMessage, message, () => {
            setTimeout(() => {
                currentIndex++;
                if (currentIndex < messages.length) {
                    showBirthdayMessage(); // Show the next message
                } else {
                    showButton(); // Display the next button after the last message
                }
            }, 2000); // Adjust this delay as needed
        });
    }
}

// Function for typing animation
function typeMessage(element, message, callback) {
    let index = 0;
    const speed = 55; // Speed of typing in milliseconds

    function type() {
        if (index <= message.length) {
            // If it's the first character and not a space, add it immediately
            if (index === 0 || message[index - 1] === " ") {
                element.textContent += message[index];
            } else {
                // Add the next character and continue typing
                element.textContent = message.substring(0, index + 1);
            }
            index++;
            if (index <= message.length) {
                setTimeout(type, speed);
            } else {
                callback();
            }
        }
    }

    type();
}



// Function to show next button
function showButton() {
    var button = document.getElementById("next-btn");
    button.style.display = "block";
}

// Initial load function
window.onload = function () {
    // Don't start showing messages on load
};