import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Rond en haut avec une image */}
      <View style={styles.circle}>
        <Image
          source={require('../assets/Logo.png')} // Remplacez par votre image
          style={styles.circleImage}
        />
      </View>

      {/* Image en bas du rond */}
      <Image
        source={require('../assets/image1.png')} // Remplacez par votre image
        style={styles.bottomImage}
      />

      {/* Texte stylisé */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Votre solution pour la {"\n"}localisation d'adresses,
          alliant{"\n"} précision
          et rapidité.{"\n"}
          Inscrivez-vous en quelques minutes
        </Text>
      </View>

      {/* Flèches et bouton OK */}
      <View style={styles.buttonContainer}>
        <Image
            source={require('../assets/fleche.png')} // Flèche entièrement noire
            style={styles.blackArrowImage}
            />

        {/* Bouton */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')} // Redirection vers l'écran SignIn
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fond blanc
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circle: {
    width: 170,
    height: 170,
    borderRadius: 100, // Rend le conteneur circulaire
    overflow: 'hidden', // Coupe l'image pour qu'elle reste dans le cercle
    backgroundColor: '#f8f9fa',
    marginBottom: 20,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  bottomImage: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
    marginBottom: -5,
  },
  textContainer: {
    padding: 10, // Ajoute de l'espace autour du texte
    borderRadius: 10, // Coin arrondi
    backgroundColor: '#FFFFFF', // Fond blanc
    fontFamily: 'System', // Pour le texte en gras
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontStyle: 'italic', // Italique
    color: '#4B1617', // Couleur du texte
    fontFamily: 'Roboto', // Pour le texte en gras
  },
  buttonContainer: {
    alignItems: 'center',
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000', // Bordure noire
    backgroundColor: '#fff', // Fond blanc
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  arrowImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', // Pour s'assurer que l'image s'ajuste bien
  },
  blackArrowImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // Pour s'assurer que l'image s'ajuste bien
    marginBottom: 40,
    marginTop: -10,
  },
  button: {
    backgroundColor: '#F36BBD', // Couleur rose
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;