import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, ScrollView,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Polyline } from 'react-native-maps';

const ItineraireCarScreen = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [isCarEnabled, setIsCarEnabled] = useState(false);
  const [isPedestrianEnabled, setIsPedestrianEnabled] = useState(false);
  const startCoordinates = { latitude: 48.8584, longitude: 2.2945 }; // Exemple : Paris, Tour Eiffel


  const handleChange = (field, value) => {
    setLocations({ ...locations, [field]: value });
  };


  const [counter, setCounter] = useState(0); // État pour le compteur

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter > 0 ? counter - 1 : 0);

    // Coordonnées pour tracer le chemin
    const carRoute = [
        { latitude: 48.8588443, longitude: 2.2943506 }, // Exemple de coordonnées de départ (Tour Eiffel)
        { latitude: 48.860611, longitude: 2.337644 },  // Exemple de coordonnées de destination (Louvre)
      ];
      const pedestrianRoute = [
        { latitude: 48.8584, longitude: 2.2945 },
        { latitude: 48.8590, longitude: 2.2955 },
      ];


  return (
    <View style={styles.container}>
      {/* Contenu scrollable */}
      
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
                style={[styles.circleImage, { width: 30, height: 30 }]}
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
        {/* Trait séparateur */}
      <View style={styles.divider} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Section principale */}
        <View style={styles.formSection}>

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
                  { marginLeft: isOnline ? -40 : 50 },
                ]}
              >
                {isOnline ? 'Online' : 'Offline'}
              </Text>
            </View>
            <Switch
              value={isOnline}
              onValueChange={() => setIsOnline(!isOnline)}
              trackColor={{ true: 'green', false: 'grey' }}
              thumbColor="white"
              style={[styles.switch, { marginLeft: isOnline ? 60 : 10 }]}
            />
          </View>

          <View style={styles.mapContainer}>
      {/* Carte affichée en tout temps */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: startCoordinates.latitude,
          longitude: startCoordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Affichage des polylignes selon les modes activés */}
        {isCarEnabled && (
          <Polyline coordinates={carRoute} strokeColor="blue" strokeWidth={5} />
        )}

        {isPedestrianEnabled && (
          <Polyline
          coordinates={carRoute}
          strokeColor="blue"
          strokeWidth={2}
          lineDashPattern={[10, 5]}  // 10 pour la longueur du tiret, 5 pour l'espace entre les tirets
          />
        )}

      </MapView>
    </View>
    </View>
          
          {/* Sliders pour Car et Piéton */}
        <View style={styles.topSliders}>
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.iconBackground1,
                isCarEnabled
                  ? styles.carEnabledBackground
                  : styles.carDisabledBackground,
              ]}
            >
              <Text style={styles.iconText}>Car</Text>
              <Ionicons name="car" size={32} color="black" />
              <Switch
                value={isCarEnabled}
                onValueChange={() => setIsCarEnabled(!isCarEnabled)}
                trackColor={{ true: '#00A26B', false: '#2699FB' }}
                thumbColor="white"
                style={[styles.iconSwitch, styles.switchLarge]}
              />
            </View>
            <View
              style={[
                styles.iconBackground1,
                isPedestrianEnabled
                  ? styles.pedestrianEnabledBackground
                  : styles.pedestrianDisabledBackground,
              ]}
            >
              <Text style={styles.iconText}>Piéton</Text>
              <Ionicons name="walk" size={32} color="black" />
              <Switch
                value={isPedestrianEnabled}
                onValueChange={() => setIsPedestrianEnabled(!isPedestrianEnabled)}
                trackColor={{ true: '#00A26B', false: '#2699FB' }}
                thumbColor="white"
                style={[styles.iconSwitch, styles.switchLarge]}
              />
            </View>
          </View>
        </View>
       
      </ScrollView>

      {/* Menu en bas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="arrow-redo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Ionicons name="camera" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Ionicons name="location" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  divider: {
    height: 1, // Épaisseur du trait
    backgroundColor: '#ccc', // Couleur du trait
    marginVertical: 10, // Espacement vertical au-dessus et en dessous
    width: '100%', // Prend toute la largeur
    marginTop: -10, //
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
    backgroundColor: '#fff',
    padding: 20,
  },

  sliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginLeft:'30%',
    marginBottom: -15,
    marginTop: -10,
  
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
    backgroundColor: 'grey',
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
    color: 'white',
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
  containerButton: {
    alignItems: 'center', // Aligner verticalement
    justifyContent: 'space-between', // Espace entre les éléments
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    
  },
  iconBackground: {
    backgroundColor: '#00A26B',
    padding: 10,
    borderRadius: 5,
  },
  
  textBackground: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginLeft: 10,
    paddingHorizontal: 20, // Augmenter le padding horizontal
    borderRadius: 5,
    width: '50%',
  },
  text: {
    color: '#0F056B',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#D3D3D3', // Gris clair
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    color: 'black',
    fontSize: 16,

  },

  buttonText: {
    color: '#F36BBD',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16
  },
  counterWrapper: {
    flexDirection: 'row', // Disposer le compteur et les boutons horizontalement
    alignItems: 'center',
  },
  counterButtons: {
    flexDirection: 'column', // Empiler les boutons verticalement
    alignItems: 'center',
  },
  counterButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5, // Espacement entre les boutons
    marginTop: 10, //
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  counterDisplay: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 40,
  },
  counterValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  launchButton: {
    backgroundColor: '#F36BBD',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 30,
    marginTop: -10,
  },
  launchText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row', // Aligner les sliders horizontalement
    justifyContent: 'space-between', // Espacer les sliders
    alignItems: 'center', // Centrer verticalement
    width: '100%', // Utiliser toute la largeur
  },

  iconBackground1: {
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
    marginTop: -25,
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

  mapContainer: {
    height: 400,
    marginTop: 20,
    borderRadius: 10,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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

export default ItineraireCarScreen;
