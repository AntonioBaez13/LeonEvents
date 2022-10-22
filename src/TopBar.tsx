import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const addIcon = <FontAwesomeIcon icon={faCirclePlus} />;

function TopBar(props:object){
    return(
        <header className="top-bar-container">
            <div className="top-bar">
                <span className="top-bar-title">What's On</span>
                <div className='top-bar-tools'>
                    <span className='top-bar-help-text'>Añadir Evento</span>
                    <span className='add-event-button'>{addIcon}</span>
                </div>
            </div>
        </header>
    );
}

export default TopBar;