import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from './reutilizables';

class ListItem extends Component {
    render() {
        const { nombre } = this.props.employee;

        return (
             <CardSection>
                 <Text style={styles.estiloTitulo}>
                   {nombre}
                 </Text>
             </CardSection>
        );
    }
}

const styles = {
    estiloTitulo: {
       fontSize: 18,
       paddingLeft: 15
    }
};

export default ListItem;

