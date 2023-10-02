import "../../styles/components/common/CountIndicator.scss"

interface CountIndicatorProps{
    count: number,
    size?: "small"|"medium"|"large"
}

const CountIndicator = ({ count, size = "small" }: CountIndicatorProps) => {
    return (
        <div className= {"count-indicator "+size}><p>{count}</p></div>)
}

export default CountIndicator;