import { useEffect, useState } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#';

// Resolves `text` left to right out of random glyphs, restarting whenever `text` changes
function useDecode(text, { delay = 0, speed = 1.5 } = {}) {
    const [output, setOutput] = useState('');

    useEffect(() => {
        let frame = 0;
        let request;
        const start = performance.now() + delay * 1000;
        setOutput('');

        const tick = (now) => {
            if (now >= start) {
                frame++;
                const revealed = Math.floor(frame * speed);
                let next = text.slice(0, revealed);
                for (let i = revealed; i < Math.min(text.length, revealed + 6); i++) {
                    next += text[i] === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
                }
                setOutput(next);
                if (revealed >= text.length) return;
            }
            request = requestAnimationFrame(tick);
        };
        request = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(request);
    }, [text, delay, speed]);

    return output;
}

export default useDecode;
