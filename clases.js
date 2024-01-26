import React, { useState } from "react";
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  }

  return (
    <View>
      <Text>Strength:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        name="strength"
        value={character.strength.toString()}
        onChangeText={(text) => handleChange(text, "strength")}
      />
    </View>
  );
}
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// function ButtonComponent() {
//   const [count, setCount] = useState(0);

//   return (
//     <View>
//       <Button
//         title={`Contador: ${count}`}
//         onPress={() => setCount(count + 1)}
//       />
//     </View>
//   );
// }

// function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Botones con Estado</Text>
//       <ButtonComponent />
//     </View>
//   );
// }

// export default App;

// -