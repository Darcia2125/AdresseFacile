import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper'; // Utilisé pour les champs du formulaire
import { Controller, useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons'; // Pour les icônes, installez avec `expo install @expo/vector-icons`
import MapView, { Marker } from 'react-native-maps';

const ContactClasseScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Remplacez cette ligne pour envoyer les données au backend
    alert("Informations validées !");
  };

  return (
<View style={styles.container}> {/* Rendre la page scrollable */}
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
      

      {/* Formulaire */}
      <ScrollView style={styles.formSection}>
      <Text style={styles.headerTitle}>
        Adresse classé dans{"\n"} repertoire indivisuel   
      </Text>
        <View style={styles.form}>
         {/* Photo avec icônes */}
      <View style={styles.profileSection}>
        <View style={styles.iconContainer}>
          <Ionicons name="settings" size={24} color="#0096C9" />
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/profil1.png')} // Remplacez par le chemin de votre image
            style={styles.profileImage}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="pencil" size={24} color="#0096C9" />
        </View>
        </View>

        {/* Informations utilisateur */}
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userAddress}>123 Rue Principale, Paris</Text>
      </View>

      <View style={styles.detailsSection}>
        <View style={styles.detailItem}>
          <Ionicons name="call-outline" size={24} color="#0096C9" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Téléphone</Text>
            <Text style={styles.detailValue}>+33 6 12 34 56 78</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Ionicons name="mail-outline" size={24} color="#0096C9" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>johndoe@example.com</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Ionicons name="chatbubbles-outline" size={24} color="#0096C9" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Message</Text>
            <Text style={styles.detailValue}>Envoyez un message</Text>
          </View>
        </View>
        {/* Carte avec adresse et bouton au-dessus */}
        <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: -18.8792,
                  longitude: 47.5079,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker coordinate={{latitude: -18.8792, longitude: 47.5079}} title="Address" />
              </MapView>

              {/* Adresse et bouton superposés */}
              <View style={styles.overlay}>
                <Text style={styles.addressTitle}>Adresse :</Text>
                <Text style={styles.addressText}>123 Rue Principale, Paris</Text>
                <TouchableOpacity style={styles.itineraryButton}>
                  <Text style={styles.itineraryButtonText}>Insérer dans Itinéraire</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        
        </View>
        
        </ScrollView>
        
    
       {/* Menu en bas */}
       <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Home')}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Transfert')}>
          <Ionicons name="swap-horizontal" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Camera')}>
          <Ionicons name="camera" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Itinerary')}>
          <Ionicons name="map" size={30} color="black" />
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
    color: '#5C0F11', // Blanc
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: '20',
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
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  formTitle: {
    color: '#000000', // Noir
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#0096C9',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
    marginLeft: '20%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginTop: -20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#0096C9',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0096C9',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0096C9',
    marginBottom: 5,
  },
  userAddress: {
    fontSize: 14,
    color: '#555555',
  },
  detailsSection: {
    marginTop: 0,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    marginLeft: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0096C9',
  },
  detailValue: {
    fontSize: 14,
    color: '#555555',
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Transparence du fond
    padding: 10,
    borderRadius: 10,
    width: '80%',
    zIndex: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0096C9',
  },
  addressText: {
    fontSize: 14,
    color: '#555555',
  },
  itineraryButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#0096C9',
    borderRadius: 5,
    alignItems: 'center',
  },
  itineraryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 12,
    color: '#0096C9',
  },
});

export default ContactClasseScreen;
