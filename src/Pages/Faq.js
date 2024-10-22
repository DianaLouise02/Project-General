import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Faq() {
    const [faq, setFaq] = useState([]);

      // Função para buscar contatos do servidor
      const listFaq = () => {
        axios
            .get("http://10.0.2.2:3000/faq")
           
            .then((resposta) => {
                setFaq(resposta.data)
            })

            .catch((error) => {
                console.error("Erro ao buscar resultado", error)
            })
    }

    // useEffect para buscar dados 
    useEffect(() => {
        listFaq();
    }, [])



  return (
    <View>
    <Text style={estilos.titleGeneral}>FAQ</Text>
    {faq.length > 0 ? (
                faq.map((faq, index) => (
                    <View key = {index} style={estilos.container}>
                        <Text style={estilos.title}>{faq.titulo}</Text>
                        <Text style={estilos.resumo}>{faq.resumo}</Text>
                    </View>
                ))
            ) : (
                <Text style={estilos.noFaqs}> Nenhum resultado disponível</Text>
            )}
</View>
  )
}





// Estilos para a tela
const estilos = StyleSheet.create({
    container:{
        padding: 10, 
    },
    titleGeneral: {
        textAlign: "center",
        fontSize: 24,
        fontWeight:"bold",
        marginBottom: 10

    },
    title: {
        fontSize: 20,
        fontWeight:"bold",
        marginBottom: 10
    },
    resumo: {
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    noFaqs: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginTop: 20
    }

})