import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { actualizarEmpleado, crearEmpleado } from '../acciones';
import { Card, CardSection, Input, Button } from './reutilizables';

class CrearEmpleado extends Component {

    onButtonPress() {
      const { nombre, telefono, cambio } = this.props;
      this.props.crearEmpleado({ nombre, telefono, cambio: cambio || 'Lunes' });
    }

    render() {
        return (
          <Card>
              <CardSection>
                <Input 
                  label="Nombre"
                  placeholder="Matias"
                  value={this.props.nombre}
                  onChangeText={value => this.props.actualizarEmpleado({ prop: 'nombre', value })}
                />
              </CardSection>
                
              <CardSection>
                <Input 
                  label="Telefono"
                  placeholder="3814666869"
                  value={this.props.telefono}
                  onChangeText={value => this.props.actualizarEmpleado({ prop: 'telefono', value })}
                />
              </CardSection>

              <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTextStyle}>asasas</Text>
                <Picker
                  style={{ flex: 1 }}
                  selectedValue={this.props.cambio}
                  onValueChange={value => this.props.actualizarEmpleado({ prop: 'cambio', value })}
                >
                  <Picker.Item label="Lunes" value="Lunes" />
                  <Picker.Item label="Martes" value="Martes" />
                  <Picker.Item label="Miercoles" value="Miercoles" />
                  <Picker.Item label="Jueves" value="Jueves" />
                  <Picker.Item label="Viernes" value="Viernes" />
                  <Picker.Item label="Sabado" value="Sabado" />
                  <Picker.Item label="Domingo" value="Domingo" />
                </Picker>
              </CardSection>

              <CardSection>
                <Button presionarBoton={this.onButtonPress.bind(this)}>
                    Crear
                </Button>
              </CardSection>
          </Card>
        );
    }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { nombre, telefono, cambio } = state.formularioEmpleado;
  return { nombre, telefono, cambio };
};

export default connect(mapStateToProps, { actualizarEmpleado, crearEmpleado })(CrearEmpleado);
