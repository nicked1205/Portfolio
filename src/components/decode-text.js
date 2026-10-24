import useDecode from '../functions/useDecode';

// Reserves the full text's space up front so the decode effect never changes the layout
function DecodeText({ text, ...options }) {
    const decoded = useDecode(text, options);

    return (
        <span className='decode-text'>
            <span className='decode-text-ghost'>{text}</span>
            <span className='decode-text-live'>{decoded}</span>
        </span>
    );
}

export default DecodeText;
