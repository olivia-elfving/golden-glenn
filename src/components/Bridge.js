import { useEffect, useState } from 'react';
import BridgeSvg from './BridgeSvg';
import ShipSvg from './ShipSvg';
import nextOpeningTime from '../helpers/nextOpeningTime';
import './Bridge.css';

function Bridge() {

    const [raise, setRaise] = useState(false);
    const [nextTime, setNextTime] = useState(null);

    const ws = new WebSocket('wss://golden-horde-webhook.onrender.com/');

    const setStatus = (status) => {
        if (status === "Open") {
            setRaise(false);
        }
        else if (status === "Closed") {
            setRaise(true);
        }
    };

    ws.onopen = () => {
        ws.send("connected")
    };

    ws.onmessage = (event) => {
        const { status } = JSON.parse(event.data);
        setStatus(status);
    };

    useEffect(() => {
        const getBridgeStatus = async () => {
            try {
                const response = await fetch('https://golden-horde-webhook.onrender.com/');
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
            <div className="bridge__container">    
                <BridgeSvg raise={raise} />
                <ShipSvg sail={raise} />
            </div>
            <p className="bridge__label">{raise ? "Bridge is now raised" : "Open for traffic"}</p>
            <p className="bridge__label">Nästa broöppning är {nextTime}</p>
        </>
    )
}

export default Bridge;
