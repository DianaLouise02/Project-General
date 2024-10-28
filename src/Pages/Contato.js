import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import axios from 'axios';

export default function Contato() {
      const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro! Por favor, preencha todos os campos.");
            return;
        }
        const novoContato = { nome,telefone }
        axios
            .post('http://10.0.2.2:3000/contatos', novoContato)
            .then(response => {
                if (response.status === 201) {
                    Alert.alert('Contato adicionado com sucesso!');
                    setNome('');
                    setTelefone('');
                } else {
                    Alert.alert('Erro! Não é possível adicionar contato.')
                }
            })
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o telefone"
                value={telefone}
                onChangeText={setTelefone}
            />

            <Button title= "Enviar contato" onPress={enviarContato} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }

});
