import React, { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import BridgeSvg from './BridgeSvg';
import ShipSvg from './ShipSvg';
import BridgeStatus from './BridgeStatus/BridgeStatus';
import WebsocketOnline from './Websocket/WebsocketOnline';
import OpeningTime from './OpeningTimes/OpeningTimes';
import Onboarding from './Onboarding/Onboarding';
import useTheme from './useTheme';
import './Bridge.css';

const serverUrl = "golden-horde-webhook.onrender.com/";
const websocketUrl = `wss://${serverUrl}`;

function Bridge() {
    const [isWsOnline, setIsWsOnline] = useState<boolean>(false);
    const [raise, setRaise] = useState<boolean>(false);
    const theme = useTheme();

    useWebSocket(websocketUrl, {
        onOpen: () => {
            setTimeout(() => {
                setIsWsOnline(true);
            }, 2000);
        },
        onMessage: (message) => {
            const reponseData = JSON.parse(message.data);
            const { State } = reponseData.data;
            setStatus(State);
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });

    const setStatus = (status: string) => {
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
    }, []);

    useEffect(() => {
        // Backup until webhooks behave better
        const interval = setInterval(() => {
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
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <WebsocketOnline isOnline={isWsOnline} />
            <BridgeStatus raise={raise} />
            <div className="bridge__container">    
                <BridgeSvg raise={raise} theme={theme} />
                <ShipSvg sail={raise} />
            </div>
            <OpeningTime />
            <Onboarding />
        </>
    )
}

export default Bridge;
