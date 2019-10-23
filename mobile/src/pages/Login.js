import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Image, Text, Platform, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Login(){

	const [email, setEmail] = useState('') // Cria estado para buscar o valor digitado em tela.
	const [techs, setTechs] = useState('') // Cria estado para buscar o valor digitado em tela.

	async function handleSubmit(){
		// email, tech

		console.log(email)
		console.log(techs)
	}

	return (
		<KeyboardAvoidingView enable={Platform.OS == 'ios'} behavior="padding" style={style.container}>
			<Image source={logo} />
			<View style={style.form}>
				<Text style={style.label}>SEU E-MAIL *</Text>
				<TextInput
					style={style.input} // Determina o estilo do Input
					placeholder="Seu e-mail" // Texto que será apresentando no Input
					placeholderTextColor="#999" // Cor do texto do input
					keyboardType="email-address" // Determina que será um input de e-mail
					autoCapitalize="none" // Não permite digitar letras maiusculas
					autoCorrect={false} // Não verificação correção do texto digitado.
					value={email}
					onChangeText={setEmail}
				/>
				<Text style={style.label}>TECNOLOGIAS *</Text>
				<TextInput
					style={style.input} // Determina o estilo do Input
					placeholder="Tecnologias de interesse" // Texto que será apresentando no Input
					placeholderTextColor="#999" // Cor do texto do input
					autoCapitalize='words'
					keyboardType='default'
					autoCorrect={false} // Não verificação correção do texto digitado.
					value={techs}
					onChangeText={setTechs}
				/>
				<TouchableOpacity onPress={handleSubmit} style={style.button}>
					<Text style={style.buttonText}>Encontrar Spots</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}


const style = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	form:{
		alignSelf: 'stretch',
		paddingHorizontal: 30,
		marginTop: 30,
	},
	label:{
		fontWeight: 'bold',
		color: '#444',
		marginBottom: 8,
	},
	input:{
		borderWidth:1,
		borderColor: '#ddd',
		paddingHorizontal: 20,
		fontSize: 16,
		color: '#444',
		height: 44,
		marginBottom: 20,
		borderRadius: 2,
	},
	button:{
		height: 42,
		backgroundColor: '#f05a5b',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
	},
	buttonText:{
		color: '#FFF',
		fontWeight: 'bold',
		fontSize:16,
	}

})