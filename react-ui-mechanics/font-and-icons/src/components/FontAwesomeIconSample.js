import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngry, faCoffee} from "@fortawesome/free-solid-svg-icons";

export const FontAwesomeIconSample = () => {
    return (
        <>
            <span>Font Awesome</span>
            <FontAwesomeIcon icon={faCoffee}/>
            <FontAwesomeIcon icon={faAngry}/>
        </>
    );
}
