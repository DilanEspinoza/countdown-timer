function Box({ number, text, className }) {
    return (
        <div className={`container_box ${className}`}>
            <div className='container__numero '>{number}</div>
            <span>{text}</span>
        </div>
    );
}
export default Box;