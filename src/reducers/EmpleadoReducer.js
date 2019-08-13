import {
    RECUPERAR_EMPLEADO
} from '../acciones/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECUPERAR_EMPLEADO:
          return action.payload;

        default:
          return state;  
    }
};
