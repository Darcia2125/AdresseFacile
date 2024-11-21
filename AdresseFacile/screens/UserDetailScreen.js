import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'; // Utilisé pour les champs du formulaire
import { Controller, useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons'; // Pour les icônes, installez avec `expo install @expo/vector-icons`


const UserDetailScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Remplacez cette ligne pour envoyer les données au backend
    alert("Informations validées !");
  };

  return (
    <View style={styles.container}>
      {/* Section supérieure */}
      <View style={styles.header}>
        
        <View style={styles.leftCircle}>
          <Image
            source={require('../assets/Adiresiko.png')} // Remplacez par le chemin de votre image
            style={styles.circleImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rightCircles}>
        <View style={[styles.circle]}>
        <Image
              source={require('../assets/Bag.jpg')} // Remplacez par le chemin de votre image
              style={[styles.circleImage, { width: 30, height: 30 }]} // Taille personnalisée
              resizeMode="cover"
            />
          </View>
          <View style={styles.circle}>
            <Image
              source={require('../assets/Profil.png')} // Remplacez par le chemin de votre image
              style={styles.circleImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      

      {/* Formulaire */}
      <View style={styles.formSection}>
      <Text style={styles.headerTitle}>
        Complétez ou modifiez vos contacts    
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

        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={24} color="#0096C9" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Localisation</Text>
            <Text style={styles.detailValue}>Voir sur la carte</Text>
          </View>
        </View>


        </View>

          {/* Bouton Validez */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.buttonText}>Validez</Text>
        </TouchableOpacity>
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
    backgroundColor: '#0096C9',
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
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
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
    width: 50,
    height: 50,
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

});

export default UserDetailScreen;
