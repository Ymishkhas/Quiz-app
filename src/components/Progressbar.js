import './Progressbar.css';

const Progressbar = ({progress}) => {

    return (
        <div className='Progressbar'>
            <div className='progressnode' style={{width: `${progress}%`}}>
                <p>{progress + '%'}</p>
            </div>
        </div>
    )
}

export default Progressbar;