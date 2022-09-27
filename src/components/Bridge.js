import { useEffect, useState } from 'react';
import BridgeSvg from './BridgeSvg';
import ShipSvg from './ShipSvg';
import './Bridge.css';
import nextOpeningTime from '../helpers/nextOpeningTime';
import WebsocketOnline from './WebsocketOnline';

const serverUrl = "golden-horde-webhook.onrender.com/";
const websocketUrl = `wss://${serverUrl}`;

function Bridge() {
    const [isWsOnline, setIsWsOnline] = useState(false);
    const [raise, setRaise] = useState(false);
    const [nextTime, setNextTime] = useState(null);
    const [webSocket, setWebSocket] = useState(new WebSocket(websocketUrl));

    const setStatus = (status) => {
        if (status === "Open") {
            setRaise(true);
        }
        else if (status === "Closed") {
            setRaise(false);
        }
    };

    useEffect(() => {
        webSocket.onopen = () => {
            setTimeout(() => {
                setIsWsOnline(true);
            }, 1000);
        };

        webSocket.onmessage = (event) => {
            const { State } = JSON.parse(event.data);
            setStatus(State);
        };

        webSocket.onclose = () => {
            setIsWsOnline(false);
            setTimeout(() => {
                setWebSocket(new WebSocket(websocketUrl));
            }, 1000);
        };

        webSocket.onerror = (err) => {
            console.log('Socket encountered error: ', err.message, 'Closing socket');
            setIsWsOnline(false);
            webSocket.close();
        };

        return () => {
            webSocket.close();
        };
    }, [webSocket]);

    useEffect(() => {
        const getBridgeStatus = async () => {
            try {
                const response = await fetch(`https://${serverUrl}`);
                const { status } = await response.json();
                setStatus(status);
            }
            catch(error) {
                console.info(error);
            }
        }
        getBridgeStatus();
        setNextTime(nextOpeningTime());
    }, []);

    return (
        <>
            <WebsocketOnline isOnline={isWsOnline} />
            <div className="bridge__container">    
                <BridgeSvg raise={raise} />
                <ShipSvg sail={raise} />
            </div>
            <p className="bridge__label">{raise ? "Pågående broöppning" : "Öppen för trafik"}</p>
            <p className="bridge__label">Nästa planerade broöpping är {nextTime}</p>
        </>
    )
}

export default Bridge;
