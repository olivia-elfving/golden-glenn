import { useEffect, useState } from 'react';
import BridgeSvg from './BridgeSvg';
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
            setRaise(false);
        }
        else if (status === "Closed") {
            setRaise(true);
        }
    };

    ws.onopen = () => {
        ws.send("connected");
        setIsWsOnline(true);
    };

    ws.onmessage = (event) => {
        const { status } = JSON.parse(event.data);
        setStatus(status);
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
            <BridgeSvg raise={raise} />
            <p className="bridge__label">Nästa broöppning är {nextTime}</p>
            <WebsocketOnline isOnline={isWsOnline} />
        </>
    )
}

export default Bridge;
