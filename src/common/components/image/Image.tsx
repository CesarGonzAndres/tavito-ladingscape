export default function Image({styles, img_url, altName}) {
    return (
        <>
            <img src={img_url} alt={altName} className={styles} />
        </>
    )
}
