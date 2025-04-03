import '../css/App.css';
import formatContent from '../functions/util';

function InformationDisplay() {
    let title ="Introduction";
    let contents = ["Name: Cat Tuong Anh Nguyen","Age: 21",
        "Description: Working on the Bachelor of Science degree from the University of Melbourne, and developing Computing and Software Systems knowledge through internships and personal projects.",
        "Take pride on positive respond to criticism, will to learn, to become better despite what to come, and ability to adapt.", 
        "Life motto: “It’s better to light a candle than to curse the darkness.” - By William Lonsdale Atkinson."];

    const formattedContent = formatContent(contents, title)

    return (
        <>
            <div  className="information-display">
                {formattedContent}
            </div>
            <div className="information-display-underlay">
                {formattedContent}
            </div>
        </>
    );
}

export default InformationDisplay;