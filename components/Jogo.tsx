import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type JogoProps = {
  nome: string;
  plataforma: string;
  preco: number;
};

const Jogo: React.FC<JogoProps> = ({ nome, plataforma, preco }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.plataforma}>Plataforma: {plataforma}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  plataforma: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  preco: {
    fontSize: 16,
    color: '#008000',
    fontWeight: '600',
  },
});

export default Jogo;
