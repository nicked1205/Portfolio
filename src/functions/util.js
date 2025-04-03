function formatContent(contentArr, title) {
    return (
        <div className='information-container'>
            {title && <div className='information-title'>{title}</div>}
            {contentArr.map((str, index) => (
            <div className='information' key={index}>{str}</div>))}
        </div>
    )
}

export default formatContent;