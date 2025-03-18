// This is inspired by https://codepen.io/soulwire/pen/mEMPrK //

const chars = '@!<>-_\\/[]{}—=+*^?#________'
const phrases = [
    'Software Developer',
    'AI Engineer',
    'Data Analyst'
    ];
let queue = []
let frame = 0
let frameRequest = null
let el = null;
let resolve = null;

function setText(newText) {
    const oldText = el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((r) => resolve = r)
    queue = []
    for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(frameRequest)
    frame = 0
    update()
    return promise
}

function update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i]
        if (frame >= end) {
            complete++
            output += to
        } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
                char = randomChar()
                queue[i].char = char
            }
            output += `${char}`
        } else {
            output += from
        }
    }
    el.innerHTML = output

    if (complete === queue.length) {
        resolve()
    } else {
        frameRequest = requestAnimationFrame(update)
        frame++
    }
}

function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)]
}

export function scramble() {
    const element = document.getElementById('scramble');
    el = element;
    let counter = 0
    function next() {
        setText(phrases[counter]).then(() => {
            setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length
    }

    next()
}