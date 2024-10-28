import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Sobre() {
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor
    const listContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")

            .then((resposta) => {
                setContatos(resposta.data)
            })

            .catch((error) => {
                console.error("Erro ao buscar contatos", error)
            })
    }
    // Função para excluir um contato
    const deleteContato = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                // Atualizar a lista de contato
                setContatos(contatos.filter((contato) => contato.id !== id));
                Alert.alert("Contato excluído com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao excluir contato", error);
                Alert.alert("Erro! Não foi possível excluir")
            })
    };

    // useEffect para buscar dados 
    useEffect(() => {
        listContatos();
    }, [])


    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Contatos </Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View key = {index} style={styles.contatoItem}>
                        <Text>{contato.nome}</Text>
                        <Text>{contato.telefone}</Text>
                    </View>
                    
                ))
            ) : (
                <Text style={styles.noContacts}> Nenhum contato disponível</Text>
            )}
        </View>
    </ScrollView>
    )
}

// Estilos para a tela
const styles = StyleSheet.create({
    container:{
        padding: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight:"bold",
        marginBottom: 10
    },
    contatoItem: {
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    noContacts: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginTop: 20
    }

})
