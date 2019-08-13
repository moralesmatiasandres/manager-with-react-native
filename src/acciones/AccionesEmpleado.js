import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    ACTUALIZAR_EMPLEADO,
    CREAR_EMPLEADO,
    RECUPERAR_EMPLEADO
} from './types';

export const actualizarEmpleado = ({ prop, value }) => {
    return {
        type: ACTUALIZAR_EMPLEADO,
        payload: { prop, value }
    };
};

export const crearEmpleado = ({ nombre, telefono, cambio }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/usuarios/${currentUser.uid}/empleados`)
      .push({ nombre, telefono, cambio })
      .then(() => {
          dispatch({ type: CREAR_EMPLEADO });
          Actions.pop({ type: 'reset' });
        });
    };
};

export const recuperarEmpleado = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
       firebase.database().ref(`/usuarios/${currentUser.uid}/empleados`)
       .on('value', snapshot => {
          dispatch({ type: RECUPERAR_EMPLEADO, payload: snapshot.val() });
       });
    };
};

