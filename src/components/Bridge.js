import { useEffect, useState } from 'react';
import BridgeSvg from './BridgeSvg';
import nextTime from '../helpers/nextTime';

function Bridge() {

    const [raise, setRaise] = useState(false);
    const [nextTime, setNextTime] = useState(null);

    useEffect(() => {
        getBridgeStatus();
        setNextTime(nextTime());
    }, []);

    const getBridgeStatus = async () => {
        const response = await fetch('https://n400itshfa000002-development-apim.azure-api.net/RoadSignals?subscription-key=ce34027e127f4566b931cdfcc5136f0f');
        const { status } = await response.json();
        if (status === "Open") {
            setRaise(false);
        }
        else {
            setRaise(true);
        }
    }

    return (
        <>
            <BridgeSvg raise={raise} />
            <p className="bridge__label">Nästa broöppning är {nextTime}</p>
        </>
    )
}

export default Bridge;