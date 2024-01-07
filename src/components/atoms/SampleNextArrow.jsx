import IconArrowR from '../../assets/images/icons/icon-arrowRight.svg?react'

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconArrowR
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}