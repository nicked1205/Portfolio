import '../css/App.css';

function Panel({ children, content, currentPanel, index }) {
  return (
    <div  className={`panel ${currentPanel === index ? "active" : "inactive"}`}>
      <h1 data-text={content } className="glitch">
        {content}        
      </h1>
      {children}
      <div className="terminal-lines"></div>
    </div>
  );
}

export default Panel;