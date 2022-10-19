import './Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const leftArrowIcon = <FontAwesomeIcon icon={faChevronLeft}/>;

interface PanelSubSectionProps {
    name: string
};

function EventInfoPanel(props:object){
    const [hasImage, setHasImage] = useState(true);
    
    return(
        <div className='side-panel'>
            <div className='side-panel-content'>
                <SidePanelHeader/>
                {hasImage
                    ? <SidePanelEventImage />
                    : null
                }
                <SidePanelEventDetails/>
                <SidePanelSubSections name='Descripcion'/>
                <SidePanelSubSections name='Localizacion' />
                <div className='panel-sub-sections'>
                    <div className='panel-sub-heading'>Link</div>
                    <a href='www.google.com'>www.google.com</a>
                </div>
            </div>
        </div>
    );
}

function SidePanelHeader(props:object){
    return(
        <div className='modal-header panel'>
            <span className='modal-header-close'>{leftArrowIcon}</span>
            <span className='modal-header-title'>Informacion del Evento</span>
        </div>
    );
}

function SidePanelEventImage(props:object){
    return(
        <div className='panel-image-container'>
            <img src={require('./testContent/testImage.jpeg')} />
        </div>
    );
}

function SidePanelEventDetails(props: object) {
    return (
        <div className='panel-event-main-info'>
            <div className='panel-event-date'>
                <div>Sept</div>
                <div>29</div>
                <div>2022</div>
            </div>
            <div className='panel-event-details'>
                <div className='event-name-text'>Panorama</div>
                <div className='event-times'>Jueves 22:00PM - 02:00AM</div>
            </div>
        </div>
    );
}

function SidePanelSubSections(props: PanelSubSectionProps){
    return(
        <div className='panel-sub-sections'>
            <div className='panel-sub-heading'>{props.name}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
        </div>
    );
}

export default EventInfoPanel;
