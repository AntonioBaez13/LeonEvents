import dayjs from 'dayjs'

export function GetTimeRanges(){
    let timeRanges: string[] = [];

    const endOfDay = dayjs().endOf('day');
    let currentTime = dayjs().startOf('day');
    timeRanges.push(currentTime.format('HH:mm'));

    while (currentTime <= endOfDay.subtract(30, 'm')) {
        currentTime = dayjs(currentTime).add(30, 'm');
        timeRanges.push(currentTime.format('HH:mm'));
    }

    return timeRanges;
}


export function StringToLongFormattedDate(value:string){
    require('dayjs/locale/es')
    dayjs.locale('es');
    let date = dayjs(value);
    return CapitalizeFirstLetter(date.format('dddd D MMMM'));
}

function CapitalizeFirstLetter(text:string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}