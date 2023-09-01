

export default function MySelect({callback()}: void) {
    return (
        <select name="colors" onChange={callback}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="aqua">aqua</option>
        </select>
    )
}

// function changeColor(id: HTMLElement, value: string) {
//     id.style.backgroundColor = value;
// }
