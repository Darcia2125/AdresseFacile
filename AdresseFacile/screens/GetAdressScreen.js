import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GetAdressScreen = ({ navigation }) => {
// Fonction pour basculer la localisation de la caméra
const [cameraLocationEnabled, setCameraLocationEnabled] = useState(false);
  const [phoneLocationEnabled, setPhoneLocationEnabled] = useState(false);
const toggleCameraLocation = () => {
    setCameraLocationEnabled(!cameraLocationEnabled);
  };

 // Fonction pour changer l'état quand l'icône est pressée
 const togglePhoneLocation = () => {
  setPhoneLocationEnabled(!phoneLocationEnabled);
};

  return (
    <View style={styles.container}>
      {/* Section supérieure */}
      <View style={styles.header}>
        <View style={styles.leftCircle}>
          <Image
            source={require('../assets/Adiresiko.png')}
            style={styles.circleImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rightCircles}>
          <View style={[styles.circle]}>
            <Image
              source={require('../assets/Bag.jpg')}
              style={[styles.circleImage, { width: 30, height: 30 }]} // Taille personnalisée
              resizeMode="cover"
            />
          </View>
          <View style={styles.circle}>
            <Image
              source={require('../assets/Profil.png')}
              style={styles.circleImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Section principale */}
      <View style={styles.formSection}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            <Text style={styles.boldLargeText}>Récupérez{"\n"}Votre adresse</Text>
          </Text>
        </View>

        
        {/* Localisation caméra */}
      <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RecupAdresse')}>
          <Ionicons
            name={ 'location'}
            size={42}
            color={'black'} // Change couleur de l'icône
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('RecupAdresse')}
          style={[
            styles.cameraText,
            {
              backgroundColor:  'blue' , // Change couleur du fond
              color: 'white', // Change couleur du texte
              borderTopRightRadius: 20, // Bordure arrondie en haut à droite
              borderBottomRightRadius: 20, // Bordure arrondie en bas à droite
              borderTopLeftRadius: 0, // Pas de bordure arrondie en haut à gauche
              borderBottomLeftRadius: 0, // Pas de bordure arrondie en bas à gauche
              height: 45, //

            },
          ]}
        >
        Répertoire {"\n"}Individuel        
        </Text>
      </View>

      <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('GetAdress')}>
          <Ionicons
            name={ 'location'}
            size={42}
            color={'black'} // Change couleur de l'icône
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

          
        <Text onPress={() => navigation.navigate('GetAdress')}
          style={[
            styles.cameraText,
            {
              backgroundColor:  'blue' , // Change couleur du fond
              color: 'white', // Change couleur du texte
              borderTopRightRadius: 20, // Bordure arrondie en haut à droite
              borderBottomRightRadius: 20, // Bordure arrondie en bas à droite
              borderTopLeftRadius: 0, // Pas de bordure arrondie en haut à gauche
              borderBottomLeftRadius: 0, // Pas de bordure arrondie en bas à gauche
              height: 40, //

            },
          ]}
        >
        Répertoire{"\n"} Public       
        </Text>
      </View>

      <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('GetAdress')}>
          <Ionicons
            name={ 'location'}
            size={42}
            color={'black'} // Change couleur de l'icône
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('GetAdress')}
          style={[
            styles.cameraText,
            {
              backgroundColor:  'blue' , // Change couleur du fond
              color: 'white', // Change couleur du texte
              borderTopRightRadius: 20, // Bordure arrondie en haut à droite
              borderBottomRightRadius: 20, // Bordure arrondie en bas à droite
              borderTopLeftRadius: 0, // Pas de bordure arrondie en haut à gauche
              borderBottomLeftRadius: 0, // Pas de bordure arrondie en bas à gauche
              height: 45, //
            },
          ]}
        >
        Répertoire {"\n"} Entreprise      
        </Text>
        </View>

        {/* Icônes partager et itinéraire */}
      <View style={styles.iconRow}>
        {/* Bouton partager */}
        <TouchableOpacity style={styles.roundButton}>
          <Ionicons name="share-social" size={30} color="#32CD32" />
        </TouchableOpacity>

        {/* Bouton itinéraire */}
        <TouchableOpacity style={styles.roundButton}>
          <Ionicons name="navigate" size={30} color="#32CD32" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
      <View style={styles.menuItem}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
        <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="arrow-redo" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="camera" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="location" size={30} color="black" />
        </TouchableOpacity>
      </View>
    

        </View>
      </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  leftCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
  },
  rightCircles: {
    flexDirection: 'row',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    overflow: 'hidden',
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    color: '#FFFFFF', // Blanc
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: '20',
  },
  formSection: {
    flex: 1,
    backgroundColor: '#CCC9C9',
    padding: 20,
  },
  messageContainer: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  boldLargeText: {
    fontSize: 22, // Plus grand
    fontWeight: 'bold', // Gras
    color: 'black', // Même couleur pour uniformité
  },
  messageText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  sliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginLeft:'30%',
    marginBottom: 25,
  },
  sliderBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 90,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  onlineBackground: {
    backgroundColor: 'green',
  },
  offlineBackground: {
    backgroundColor: 'black',
  },
  sliderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  onlineText: {
    color: 'white',
  },
  offlineText: {
    color: 'gray',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    marginLeft: 10,
  },
  
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#CCC',
  },
  iconButtonActive: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
  },
  iconButtonInactive: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'blue',
  },
  cameraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    width: 260, //
    marginLeft: 20,
    marginBottom: 40,
  },
  cameraIcon: {
    marginRight: 10,
  },
  cameraText: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight:'bold',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 260, //
    marginLeft: 20,
    marginBottom: 50,
  },
  phoneIcon: {
    marginRight: 10,
  },
  phoneText: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight:'bold',
  },
  iconContainer: {
    flexDirection: 'row', // Aligner les sliders horizontalement
    justifyContent: 'space-between', // Espacer les sliders
    alignItems: 'center', // Centrer verticalement
    width: '100%', // Utiliser toute la largeur
  },

  iconBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 15,
    width: 160,
    margin: 5,
    height: 60,
    marginBottom: 20,
    borderRadius: 50,
    marginLeft: 1,
  },
  carEnabledBackground: {
    backgroundColor: '#00A26B', // Vert si activé
  },
  carDisabledBackground: {
    backgroundColor: '#2699FB', // Bleu si désactivé
  },
  pedestrianEnabledBackground: {
    backgroundColor: '#00A26B', // Vert si activé
  },
  pedestrianDisabledBackground: {
    backgroundColor: '#2699FB', // Bleu si désactivé
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Texte "Piéton" en blanc
  },
  icon: {
    marginRight: 10,
  },
  iconSwitch: {
    marginLeft: -10,
  },
  switchLarge: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Agrandir le Switch
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    width: '120%',
    height: 60,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  

});

export default GetAdressScreen;
