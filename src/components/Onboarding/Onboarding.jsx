import { useEffect, useState } from "react";
import './Onboarding.css'

function Onboarding() {

    const [hidePopup, setHidePopup] = useState(false);

    const closeOnboarding = () => {
        localStorage.setItem("hasOnboarded", "true");
        setHidePopup(true)
    };
    
    useEffect(() => {
        const hasOnboarded = localStorage.getItem("hasOnboarded");
        if (hasOnboarded === "true") {
            setHidePopup(true);
        }
    }, []);

    if (hidePopup === true) {
        return null;
    } 

    return (
        <div className="popup">
            <h3>Information</h3>
            <span className="closePopupBtn" onClick={closeOnboarding}>&times;</span>
            <p>Tyvärr kan vi inte veta när alla broöppningar är på förhand, då vissa öppningar sker utanför det planerade schemat.</p>
            <p>Du får dock liveuppdateringar om nuvarande brostatus när bat-signalen har ett fast lysande sken.</p>
        </div>
    )
}

export default Onboarding;