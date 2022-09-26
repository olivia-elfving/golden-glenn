import './WebsocketOnline.css';

const WebsocketOnline = ({ isOnline }) => {
    return (
        <div className={`lightbeam__container ${isOnline ? 'lightbeam__container--online' : 'lightbeam__container--connecting'}`}>
            <div className='lightbeam'></div>
            <i className='fal fa-bat websocketOnline'></i>
        </div>
    )
}

export default WebsocketOnline;