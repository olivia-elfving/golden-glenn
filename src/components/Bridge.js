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
        try {
            const response = await fetch('https://n400itshfa000002-development-apim.azure-api.net/RoadSignals?subscription-key=ce34027e127f4566b931cdfcc5136f0f');
            const { status } = await response.json();
            if (status === "Open") {
                setRaise(false);
            }
            else {
                setRaise(true);
            }
        }
        catch(error) {
            console.info('Bro-api:t har ännu inte släppts. Mer info; https://goteborg.se/wps/portal/start/kommun-o-politik/kommunfakta/oppna-data/oppna-data-soksida/oppna-data-datamangd#esc_entry=458&esc_context=6');
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
