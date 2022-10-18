import './BridgeStatus.css';

function BridgeStatus({ raise }) {

    if (raise) {
        return (
            <p className="bridge__status bridge--raised">Pågående broöppning</p>
        )
    }

    return (
        <p className="bridge__status bridge--closed"><span>Öppen</span> för trafik</p>
    )
}

export default BridgeStatus;