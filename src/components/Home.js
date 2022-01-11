import React, { useEffect, useState } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

export function Home() {
    const [qtd, setQtd] = useState(0)
    const [price, setPrice] = useState(0)
    const [result, setResult] = useState('')
    const [error, setError] = useState(false)

    function handleCalc() {
        if (!qtd || !price) {
            setError(!error)
            setResult('Preencha todos os campos !')
            return
        }

        if (error) {
            setError(!error)
        }

        setResult((price * 1000 / qtd).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Calculadora de Preço</Text>
                <Text style={styles.title}>por Kg/Litro</Text>


                <Text style={styles.inputTitle}>ML / Gramas</Text>
                <TextInput
                    placeholder="Ex: 500"
                    placeholderTextColor="#7f7f7f"
                    onChangeText={setQtd}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={styles.inputTitle}>Preço</Text>
                <TextInput
                    placeholder="Ex: 2,50"
                    placeholderTextColor="#7f7f7f"
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={[styles.result, (error) ? styles.error : '']}>{result}</Text>

                <TouchableOpacity onPress={handleCalc} style={styles.button}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#151515'
    },
    error: {
        color: '#DC143C'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputTitle: {
        marginTop: 40,
        marginBottom: 15,
        fontSize: 18,
        color: '#fff',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#505050'
    },
    result: {
        marginVertical: 60,
        fontSize: 20,
        color: '#fff'
    },
    button: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#404040',
        borderRadius: 14
    },
    buttonText: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#151515'
    }
})
