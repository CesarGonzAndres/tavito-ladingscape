export default function Button(buttonInfo) {
    const { handleClick, buttonText, styleClasses } = buttonInfo;
    return (
        <>
            <button onClick={handleClick} className={styleClasses}>{buttonText}</button>
        </>
    )
}
