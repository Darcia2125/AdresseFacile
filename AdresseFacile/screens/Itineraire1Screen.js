import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Itineraire1Screen = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);

  const [counter, setCounter] = useState(0); // État pour le compteur

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter > 0 ? counter - 1 : 0);


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
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              <Text style={styles.boldLargeText}>Créer itinéraire</Text>
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

          <View>
            <Text
              style={{
                color: '#F36BBD',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}
            >
              Créer à tout moment{"\n"}votre itinéraire offline
            </Text>
          </View>
          
          <View style={styles.containerButton}>

          {/* Boutons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconBackground}>
                  <Ionicons name="location" size={20} color="white" />
                </View>
                <View style={styles.textBackground}>
                  <Text style={styles.text}>Départ</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconBackground}>
                  <Ionicons name="locate" size={20} color="white" />
                </View>
                <View style={styles.textBackground}>
                  <Text style={styles.text}>Repère</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconBackground}>
                  <Ionicons name="location" size={20} color="white" />
                </View>
                <View style={styles.textBackground}>
                  <Text style={styles.text}>Arrivée</Text>
                </View>
              </TouchableOpacity>
          </View>

          <View style={styles.counterWrapper}>
            <View style={styles.counterDisplay}>
              <Text style={styles.counterValue}>{counter}</Text>
            </View>
            <View style={styles.counterButtons}>
              <TouchableOpacity onPress={incrementCounter} style={styles.counterButton}>
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={decrementCounter} style={styles.counterButton}>
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>

          {/* Bouton Lancer */}
          <TouchableOpacity style={styles.launchButton} onPress={() => navigation.navigate('Itineraire1Next')}>
            <Text style={styles.launchText}>Lancer</Text>
          </TouchableOpacity>

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
  messageContainer: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 30,
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
    marginBottom: 15,
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
    flexDirection: 'row', // Organisation horizontale
    alignItems: 'center', // Aligner verticalement
    justifyContent: 'space-between', // Espace entre les éléments
    paddingHorizontal: 10,
    marginVertical: 10,
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
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  
  textBackground: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    width: '50%',
  },
  text: {
    color: '#F36BBD',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 18,
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
    paddingHorizontal: 120,
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

export default Itineraire1Screen;
