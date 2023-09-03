export default function LinkBtn(props) {
    const text = props.text;
    const href = props.href;
    return(
        <a className="btn--link" href={href}>
            {text}
        </a>
    )
}