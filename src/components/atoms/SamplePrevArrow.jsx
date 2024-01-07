import IconArrowL from '../../assets/images/icons/icon-arrowLeft.svg?react'

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconArrowL
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}