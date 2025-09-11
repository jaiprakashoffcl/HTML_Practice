let day = 'friday';
let message;

switch(day)
{
    case 'monday':
        message='first day of week';
        break;

    case 'tuesday':
        message='second day of week';
        break;
    
    case 'wednesday':
        message='third day of week';
        break;

    case 'friday':
        message='happy weekend';
        break;

    default:
        message='no day invalid';
        break;
}

console.log(message)