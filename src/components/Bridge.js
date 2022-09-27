import { useEffect, useState } from 'react';
import BridgeSvg from './BridgeSvg';
import ShipSvg from './ShipSvg';
import './Bridge.css';
import nextOpeningTime from '../helpers/nextOpeningTime';
import WebsocketOnline from './WebsocketOnline';

const serverUrl = "golden-horde-webhook.onrender.com/";

function Bridge() {
    const [isWsOnline, setIsWsOnline] = useState(false);
    const [raise, setRaise] = useState(false);
    const [nextTime, setNextTime] = useState(null);

    const ws = new WebSocket(`wss://${serverUrl}`);

    const setStatus = (status) => {
        if (status === "Open") {
            setRaise(true);
        }
        else if (status === "Closed") {
            setRaise(false);
        }
    };

    ws.onopen = () => {
        ws.send("connected");
        setTimeout(() => {
            setIsWsOnline(true);
        }, 1000);
    };

    ws.onmessage = (event) => {
        const { State } = JSON.parse(event.data);
        setStatus(State);
    };

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
