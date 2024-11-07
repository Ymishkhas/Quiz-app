import Progressbar from './Progressbar';
import Countdown from './Countdown';
import './Header.css'

const Header = ({minutes, seconds, progress}) => {

    return (
        <div className='header'>
            <Countdown minutes={minutes} seconds={seconds} />
            <Progressbar progress={progress} />
        </div>
    )
}

export default Header;