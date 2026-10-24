// Draws a 7x7 pixel-art icon from rows of '#' (lit) and '.' (off)
function PixelIcon({ rows, className }) {
    return (
        <svg className={className} viewBox='0 0 7 7' shapeRendering='crispEdges' aria-hidden='true'>
            {rows.flatMap((row, y) =>
                [...row].map((pixel, x) => pixel === '#' && <rect key={`${x}-${y}`} x={x} y={y} width='1' height='1' />)
            )}
        </svg>
    );
}

export default PixelIcon;
