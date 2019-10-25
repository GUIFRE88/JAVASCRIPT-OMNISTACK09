import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Image, AsyncStorage } from 'react-native'

// SafeAreaView - Seleciona apenas a área que poderá ser usada em tela.
// StyleSheet - Estilizações em CSS.
// ScrollView - Habilita scroll vertical na tela.
// Image - Utilização de imagem.
// AsyncStorage - Banco de dados do celular.

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List(){

	const [techs, setTechs] = useState([])

	useEffect( ()=> {
		AsyncStorage.getItem('techs').then(storagedTchs =>{
			const techsArray = storagedTchs.split(',').map(tech => tech.trim())

			setTechs(techsArray)
		})
	}, [])

	return (

		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Image style={styles.logo} source={logo}/>
				{techs.map( tech => <SpotList key={tech} tech={tech} /> ) }
			</ScrollView>
		</SafeAreaView>



	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},

	logo:{
		height:32,
		resizeMode: "contain",
		alignSelf: 'center',
		marginTop: 30
	},
})