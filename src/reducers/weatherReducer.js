import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    //console.log('Action received ', action);

    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Action received ', action.type);
            //non mutating the state by using concat 
            //creates new version of the state and new array 
            //return state.concat([action.payload.data]);
            //above is the same as bellow in ES6
            return [action.payload.data, ...state]; // returns something like this [city, city, city]
            break;

        default:
            break;
    }
    return state;
}