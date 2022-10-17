import './Styles.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faClock, faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import { Button, InputAdornment, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

const closeIcon = <FontAwesomeIcon icon={faXmark} />;
const clockIcon = <FontAwesomeIcon icon={faClock} />;
const uploadIcon = <FontAwesomeIcon icon={faCloudArrowUp} />;

function AddEventModal(props:object){
    return(
        <div className='modal-window'>
            <div className='modal-content'>
                <ModalHeader/>
                <ModalBody/>
                <ModalFooter/>
            </div>
        </div>
    );
}

function ModalHeader(props:object){
    return(
        <div className='modal-header'>
            <span className='modal-header-title'>Añadir Evento</span>
            <span className='modal-header-close'>{closeIcon}</span>
        </div>
    );
}

function ModalBody(props:object){
    const[value,setValue] = useState<Dayjs | null>(null);

    return(
        <div className='modal-body'>
            <TextField required label='Nombre Del Evento' variant='outlined' size='small' inputProps={{ maxLength: 55 }} />
            <TextField multiline label='Descripcion Del Evento' variant='outlined'/>
            <TextField required label='Localizacion' variant='outlined' size='small' inputProps={{ maxLength: 100 }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Fecha Evento  *'
                    disablePast={true}
                    value={value}
                    onChange={(date) => { setValue(date) }}
                    renderInput={(params) => <TextField {...params} />} 
                    />
            </LocalizationProvider>
            <span>
                <TextField  required label='Hora Inicio' variant='outlined' size='small' InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>{clockIcon}</InputAdornment>
                    )
                }} />
                <TextField label='Hora Fin' variant='outlined' size='small' InputProps={{
                    endAdornment:(
                        <InputAdornment position='end'>{clockIcon}</InputAdornment>
                )}} />                   
            </span>
            <TextField label='Link' variant='outlined' size='small' inputProps={{maxLength:60}}/>
            <span className='upload-image-button'>Subir Imagen {uploadIcon} </span>
        </div>
    );
}

function ModalFooter(props:object){
    return(
        <div className='modal-footer'>
            <Button variant='contained'>Enviar Solicitud</Button>
        </div>
    );
}
export default AddEventModal;

