import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LocationScreen = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [isCarEnabled, setIsCarEnabled] = useState(false);
  const [isPedestrianEnabled, setIsPedestrianEnabled] = useState(false);
  const [cameraLocationEnabled, setCameraLocationEnabled] = useState(false);
  const [phoneLocationEnabled, setPhoneLocationEnabled] = useState(false);

    // Fonction pour basculer la localisation de la caméra
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
            Activez vos paramètres{"\n"}
            <Text style={styles.boldLargeText}>Localisation et Intinéraires</Text>
          </Text>
        </View>

        {/* Slider Online/Offline */}
        <View style={styles.sliderWrapper}>
          <View
            style={[
              styles.sliderBackground,
              isOnline ? styles.onlineBackground : styles.offlineBackground,

            ]}
          >
            <Text
              style={[
                styles.sliderText,
                isOnline ? styles.onlineText : styles.offlineText,
                { marginLeft: isOnline ? -40 : 50 } // Si online, marginLeft du texte est 10, sinon 50

              ]}
            >
              {isOnline ? 'Online' : 'Offline'}
            </Text>

          </View>
          <Switch
            value={isOnline}
            onValueChange={() => setIsOnline(!isOnline)}
            trackColor={{ true: 'green', false: 'black' }}
            thumbColor="white"
            style={[styles.switch, { marginLeft: isOnline ? 60 : 10 }]}           />
        </View>

        {/* Localisation caméra */}
      <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={toggleCameraLocation}>
          <Ionicons
            name="camera"
            size={42}
            color={cameraLocationEnabled ? 'white' : 'black'} // Change couleur de l'icône
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text onPress={toggleCameraLocation}
          style={[
            styles.cameraText,
            {
              backgroundColor: cameraLocationEnabled ? 'black' : 'white', // Change couleur du fond
              color: cameraLocationEnabled ? 'white' : '#5C0F11', // Change couleur du texte
              borderTopRightRadius: 20, // Bordure arrondie en haut à droite
              borderBottomRightRadius: 20, // Bordure arrondie en bas à droite
              borderTopLeftRadius: 0, // Pas de bordure arrondie en haut à gauche
              borderBottomLeftRadius: 0, // Pas de bordure arrondie en bas à gauche
            },
          ]}
        >
          {cameraLocationEnabled
            ? "Localisation \ncaméra activée"
            : "Activer  localisation \n Camera "}
        </Text>
      </View>

       {/* Localisation téléphone */}
      <View style={styles.phoneContainer}>
        <TouchableOpacity onPress={togglePhoneLocation}>
          <Ionicons
            name={phoneLocationEnabled ? 'phone-portrait' : 'phone-portrait'}
            size={42}
            color={phoneLocationEnabled ? 'white' : 'black'} // Change couleur de l'icône
            style={styles.phoneIcon}
          />
        </TouchableOpacity>

        <Text onPress={togglePhoneLocation}
          style={[
            styles.phoneText,
            {
              backgroundColor: phoneLocationEnabled ? 'black' : 'white', // Change couleur du fond
              color: phoneLocationEnabled ? 'white' : '#5C0F11', // Change couleur du texte
              borderTopRightRadius: 20, // Bordure arrondie en haut à droite
              borderBottomRightRadius: 20, // Bordure arrondie en bas à droite
              borderTopLeftRadius: 0, // Pas de bordure arrondie en haut à gauche
              borderBottomLeftRadius: 0, // Pas de bordure arrondie en bas à gauche
            },
          ]}
        >
          {phoneLocationEnabled
            ? "Localisation \ntéléphone activée"
            : "Activer Localisation \n téléphone "}
        </Text>
      </View>
        {/* Sliders Piéton et Voiture avec Fond */}
        <View style={styles.iconContainer}>
        {/* Voiture Slider */}
        <View
        style={[
          styles.iconBackground,
          isCarEnabled ? styles.carEnabledBackground : styles.carDisabledBackground,
        ]}
      >
        <Text style={styles.iconText}>Car</Text>
        <Ionicons
          name="car"
          size={32}
          color="black" // L'icône sera toujours noire
          style={styles.icon}
        />
        <Switch
          value={isCarEnabled}
          onValueChange={() => setIsCarEnabled(!isCarEnabled)}
          trackColor={{ true: '#00A26B', false: '#2699FB' }}
          thumbColor="white"
          style={[styles.iconSwitch, styles.switchLarge, ]} // Ajout de la taille agrandie ici
          />
      </View>

      {/* Piéton Slider */}
      <View
        style={[
          styles.iconBackground,
          isPedestrianEnabled ? styles.pedestrianEnabledBackground : styles.pedestrianDisabledBackground,
        ]}
      >
        <Text style={styles.iconText}>Piéton</Text>
        <Ionicons
          name="walk"
          size={32}
          color="black" // L'icône sera toujours noire
          style={styles.icon}
        />
        <Switch
          value={isPedestrianEnabled}
          onValueChange={() => setIsPedestrianEnabled(!isPedestrianEnabled)}
          trackColor={{ true: '#00A26B', false: '#2699FB' }}
          thumbColor="white"
          style={[styles.iconSwitch, styles.switchLarge]} // Ajout de la taille agrandie ici
          />
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
    height: 40,
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
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Aligner les items horizontalement
    alignItems: 'center',
    backgroundColor: 'white', // Fond blanc pour le menu
    height: 60,
    position: 'absolute', // Position absolue pour fixer en bas
    bottom: 0, // Toujours au bas de l'écran
    top: 130, // Toujours
    left: -40,
    right: 0,
    borderTopWidth: 1, // Bordure en haut du menu
    borderTopColor: '#ccc', // Couleur de la bordure
    width: '120%', // S'assurer que le menu prend toute la largeur
  },
  menuItem: {
    alignItems: 'center', // Centrer l'icône et le texte
  },
  menuText: {
    fontSize: 12, // Taille de police pour le texte
    color: 'black', // Couleur du texte
    marginTop: 5, // Espacer le texte de l'icône
  },
  

});

export default LocationScreen;
