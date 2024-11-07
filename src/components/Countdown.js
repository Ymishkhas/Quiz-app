import './Countdown.css'

const Countdown = ({minutes, seconds}) => {
    return (
        <div className='countdown'>
            <p>{minutes}m {seconds}s</p>
            
        </div>
    )
}

export default Countdown;