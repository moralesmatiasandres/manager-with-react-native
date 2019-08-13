import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './componentes/LoginForm';
import ListaEmpleados from './componentes/ListaEmpleados';
import CrearEmpleado from './componentes/CrearEmpleado';


const RouterComponent = () => {
    return (
        <Router>
          <Scene key="root" hideNavBar>
           
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Por favor Ingrese" initial />
            </Scene>

            <Scene key="main">
              <Scene
               onRight={() => Actions.crearEmpleado()}
               rightTitle="Agregar"           
               key="listaEmpleados"
               component={ListaEmpleados} 
               title="Empleados"
              />
            <Scene key="crearEmpleado" component={CrearEmpleado} title="Crear Empleado" />  
            </Scene>  

          </Scene>
        </Router>
    );
};

export default RouterComponent;
