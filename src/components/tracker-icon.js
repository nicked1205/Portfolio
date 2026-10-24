// 7x7 pixel-art section icons, drawn row by row ('#' is a lit pixel)
const icons = {
    Introduction: [
        '..###..',
        '..###..',
        '..###..',
        '.......',
        '.#####.',
        '#######',
        '#######',
    ],
    Roles: [
        '#......',
        '.#.....',
        '..#....',
        '.#.....',
        '#......',
        '.......',
        '...####',
    ],
    Experience: [
        '..###..',
        '..#.#..',
        '#######',
        '#.....#',
        '#######',
        '#.....#',
        '#######',
    ],
    Projects: [
        '###....',
        '#######',
        '#.....#',
        '#.....#',
        '#.....#',
        '#.....#',
        '#######',
    ],
    Contact: [
        '.......',
        '#######',
        '##...##',
        '#.#.#.#',
        '#..#..#',
        '#.....#',
        '#######',
    ],
};

function TrackerIcon({ name }) {
    const rows = icons[name];

    return (
        <svg className='tracker-icon' viewBox='0 0 7 7' shapeRendering='crispEdges' aria-hidden='true'>
            {rows.flatMap((row, y) =>
                [...row].map((pixel, x) => pixel === '#' && <rect key={`${x}-${y}`} x={x} y={y} width='1' height='1' />)
            )}
        </svg>
    );
}

export default TrackerIcon;
