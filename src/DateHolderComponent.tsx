import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Event } from './EventComponent';
import { StringToLongFormattedDate } from './DateTimeUtils';

const rightArrow = <FontAwesomeIcon icon={faRightLong} />;

//Use this as test data to create the Dates components 
const times: string[] = ['09/29/2022', '10/08/2022', '10/29/2022', '11/10/2022', '12/31/2022'];

interface DatesHolderprops {
    day: string
};

function DatesHolder(props: DatesHolderprops){
    return(
        <div>
            <div className='show-date'>
                <span>{rightArrow}</span>
                <span>{StringToLongFormattedDate(props.day)}</span>
            </div>
            <div className='multiple-events-container'>
                <Event/>
            </div>
        </div>
    );
}

function DatesList(props:object){
    return(
        <div>
            {times.map((day,i) => <DatesHolder key={i} day={day}/>)}
        </div>
    );
}

export default DatesList;