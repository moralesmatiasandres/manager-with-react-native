import {
    ACTUALIZAR_EMPLEADO,
    CREAR_EMPLEADO
} from '../acciones/types';

const INITIAL_STATE = {
    nombre: '',
    telefono: '',
    cambio: ''
};

export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
          case ACTUALIZAR_EMPLEADO:
            return { ...state, [action.payload.prop]: action.payload.value }; 
           case CREAR_EMPLEADO:
            return INITIAL_STATE; 
          default:
            return state;
      }
};
