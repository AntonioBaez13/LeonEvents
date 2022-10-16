import './Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const infoButton = <FontAwesomeIcon icon={faCircleInfo}/>;
const dashIcon = <FontAwesomeIcon icon={faMinus} />;
//Test Data to compose the component
const eventName:string = 'Panorama';
const startTime:string = '22:00 PM';
const endTime:string = '01:00 AM';


function Event(props:object){
    const [videoExist, setVideoExist] = useState(true);

    return(
        <div className='event-container'>
            {videoExist
                ? <div className='event-picture'>
                    <img src={require('./testContent/testImage.jpeg')}/>
                </div>
                : null
            }
            <div className='event-main-info'>
                <span className='short-description '>
                    <span className='event-name-text '>{eventName}</span>
                    <span className='event-times'>{startTime} {dashIcon} {endTime}</span>
                </span>
                <span className='info-button-container'>
                    {infoButton} 
                </span>
            </div>
        </div>
    );
}

export {Event}