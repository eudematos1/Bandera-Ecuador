// App.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [mensaje, setMensaje] = useState('');

  const mostrarMensajeAmarillo = () => {
    setMensaje('Amarillo - Ecuador');
  };

  const mostrarMensajeAzul = () => {
    setMensaje('Azul - Ecuador');
  };

  const mostrarMensajeRojo = () => {
    setMensaje('Rojo - Ecuador');
  };

  return (
    <View style={styles.cuadradoAmarillo}>
      <TouchableOpacity onPress={mostrarMensajeAmarillo} style={styles.cuadradoAmarillo}>
        <View style={styles.cuadradoAzul}>
          <TouchableOpacity onPress={mostrarMensajeAzul} style={styles.cuadradoAzul}>
            <TouchableOpacity onPress={mostrarMensajeRojo} style={styles.cuadradoRojo}></TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {mensaje !== '' && <Text>{mensaje}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cuadradoAmarillo: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadradoAzul: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadradoRojo: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default App;

