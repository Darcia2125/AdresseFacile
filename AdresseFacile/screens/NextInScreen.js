import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NextInScreen = ({ navigation }) => {
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
      {/* Trait séparateur */}
        <View style={styles.divider} />

      {/* Section principale */}
      <View style={styles.formSection}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            <Text style={[styles.boldLargeText, { color: '#E06467' }]}>Prendre une photo{"\n"} de votre adresse</Text>
          </Text>
        </View>

        {/* Icône appareil photo dans un carré */}
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Picture')}>
          <Ionicons name="camera" size={70} color="#A4A4A4" />
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Picture')}>
          <Ionicons name="camera" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Itineraire1')}>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightCircles: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleImage: {
      width: '100%',
      height: '100%',
    },
    divider: {
        height: 1, // Épaisseur du trait
        backgroundColor: '#ccc', // Couleur du trait
        marginVertical: 10, // Espacement vertical au-dessus et en dessous
        width: '100%', // Prend toute la largeur
        marginTop: -10, //
      },
    formSection: {
      flex: 1,
      justifyContent: 'center', // Centrer verticalement
      alignItems: 'center', // Centrer horizontalement
    },
    messageContainer: {
      backgroundColor: '#E4E4E4',
      padding: 20,
      borderRadius: 10,
      marginBottom: 50,
      marginTop: -80,
    },
    boldLargeText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    },
    cameraContainer: {
      width: 150,
      height: 150,
      backgroundColor: '#E4E4E4',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 0,
      marginBottom: 60,
    },
    cameraButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: -45,
    },
    roundButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#FFFFFF',
      borderColor: '#E4E4E4',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: 60,
      position: 'absolute',
      bottom: 0, // Fixé au bas de l'écran
      left: 0,
      right: 0,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
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
  
  export default NextInScreen;
  