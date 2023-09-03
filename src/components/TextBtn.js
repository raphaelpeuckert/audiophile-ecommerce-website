export default function TextBtn(props) {
    const text = props.text;
    return(
        <button className="btn--text">
            {text}
        </button>
    )
}