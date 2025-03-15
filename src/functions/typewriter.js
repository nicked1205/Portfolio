// This is modified from Typewriter Effect by Geoff Graham //

const text = [
    ["sudo apt install toilet", 
    "toilet --metal 'Hello World'"],
    [
        "expr 0 / 0"
    ]
];
let speed = 100;
let index = 0;
let scrollAt = 20;
    
let textPos = 0;
let contents = '';
let row;
    
export function typewriter(tab)
{   
    console.log(tab)
    let arrLength = text[tab][0].length;
    contents =  ' ';
    row = Math.max(0, index-scrollAt);
    let destination = document.getElementById("typedtext");
    
    while ( row < index ) {
        contents += text[tab][row++] + '<br />';
    }

    console.log(text[tab][index])
    destination.innerHTML = contents + text[tab][index].substring(0, textPos) + "_";
    if ( textPos++ === arrLength ) {
        textPos = 0;
        index++;
        if ( index !== text[tab].length ) {
            arrLength = text[tab][index].length;
            setTimeout(typewriter, 500);
        }
    } else {
        setTimeout(typewriter, speed);
    }
}