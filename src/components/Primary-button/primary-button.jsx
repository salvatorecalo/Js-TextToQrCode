function PrimaryButton({text, props, link}) {
    return (
        <a 
            href={link}
            className={props + " bg-emerald-500 hover:bg-emerald-600 transition-all ease-in duration-150 text-white px-8 py-3 rounded-lg cursor-pointer"}
        >
            {text}
        </a>
    );
}
export default PrimaryButton;