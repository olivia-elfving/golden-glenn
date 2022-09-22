import './WebsocketOnline.css';

const WebsocketOnline = ({ isOnline }) => {
    return (
        <div className='lightbeam__container'>
            <div className='lightbeam'></div>
            <i className='fal fa-bat websocketOnline'></i>
        </div>
    )
}

export default WebsocketOnline;