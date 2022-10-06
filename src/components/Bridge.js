import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import BridgeSvg from './BridgeSvg';
import BridgeSVGTest from './BridgeSVGTest';
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

    useWebSocket(websocketUrl, {
        onOpen: () => {
            setTimeout(() => {
                setIsWsOnline(true);
            }, 1000);
        },
        onMessage: (message) => {
            const reponseData = JSON.parse(message.data);
            const { State } = reponseData.data;
            setStatus(State);
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });

    const setStatus = (status) => {
        if (status === "Open") {
            setRaise(true);
        }
        else if (status === "Closed") {
            setRaise(false);
        }
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
            <BridgeSVGTest />
            <p className="bridge__label">{raise ? "Pågående broöppning" : "Öppen för trafik"}</p>
            <p className="bridge__label">Nästa planerade broöpping är {nextTime}</p>
        </>
    )
}

export default Bridge;
