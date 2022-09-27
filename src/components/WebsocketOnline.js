import './WebsocketOnline.css';

const WebsocketOnline = ({ isOnline }) => {
    return (
        <>
            <div className={`online__message__container ${isOnline ? 'online__message__container--online' : ''}`}>
                <span className='online__message__text'><i className='fal fa-bat'></i> Connecting to bridge...</span>
            </div>
            <div className={`lightbeam__container ${isOnline ? 'lightbeam__container--online' : 'lightbeam__container--connecting'}`}>
                <div className='lightbeam'></div>
                <i className='fal fa-bat websocketOnline'></i>
            </div>
        </>
    )
}

export default WebsocketOnline;