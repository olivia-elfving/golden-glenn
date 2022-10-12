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
            <p>Tiden för "Nästa planerade broöppning" är baserat på ett förutbestämt schema.</p>
            <p>Tyvärr kan vi inte veta exakt när nästa broöppning är, men du får liveuppdateringar från bron när bat-signalen har ett fast lysande sken.</p>
        </div>
    )
}

export default Onboarding;