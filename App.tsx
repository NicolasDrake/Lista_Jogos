import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Jogo from './components/Jogo';
import { jogos } from './data/jogos';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Jogos</Text>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Jogo
            nome={item.nome}
            plataforma={item.plataforma}
            preco={item.preco}
          />
        )}
        contentContainerStyle={styles.lista}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
