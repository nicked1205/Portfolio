import '../App.css';

function Panel({ children, content }) {
  return (
    <div className="panel">
      <h1  className="content">
        {content}        
      </h1>
    </div>
  );
}

export default Panel;