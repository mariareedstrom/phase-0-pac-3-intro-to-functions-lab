
function shout(string) {
    return string.toUpperCase();    
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return "I can\'t hear you!";
    } if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
    
}



console.log(shout("hello!"));
console.log(whisper("HELLO"));
console.log(sayHiToGrandma("hi grandma!"));
console.log(sayHiToGrandma("HI GRANDMA!"));
console.log(sayHiToGrandma("I love you, Grandma."));
