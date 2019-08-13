import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FormularioEmpleadoReducer from './FormularioEmpleadoReducer';
import EmpleadoRecucer from './EmpleadoReducer';

export default combineReducers({
    auth: AuthReducer,
    formularioEmpleado: FormularioEmpleadoReducer,
    empleados: EmpleadoRecucer
});
