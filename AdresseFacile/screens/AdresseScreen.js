import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper'; // Utilisation de react-native-paper pour les champs de texte
import { useForm, Controller } from 'react-hook-form';
const AdresseScreen = ({ navigation }) => {
    const { control, handleSubmit } = useForm();


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
      <ScrollView contentContainerStyle={styles.formSection}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            <Text style={[styles.boldLargeText, { color: 'black', textAlign:'center', fontSize:20 }]}>Precisez les informations{"\n"} de votre adresse</Text>
          </Text>
        </View>

      
        <View style={styles.cameraContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Picture')}>
                <Image 
                source={require('../assets/Profil.png')} // Remplacez le chemin de l'image selon votre projet
                style={styles.cameraImage} 
                />
            </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
          <Controller
            name="Nom lieu/Personne/Entreprise"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Nom lieu/Personne/Entreprise"
                value={value}
                onChangeText={onChange}
                style={styles.inputField}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="Sigle Entreprise"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Sigle Entreprise"
                value={value}
                onChangeText={onChange}
                style={styles.inputField}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="Adresse"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Adresse"
                value={value}
                onChangeText={onChange}
                style={styles.inputField}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="Ville"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Ville"
                value={value}
                onChangeText={onChange}
                style={styles.inputField}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="Code postal"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Code postal"
                value={value}
                onChangeText={onChange}
                style={styles.inputField}
                autoCapitalize="none"
              />
            )}
          />
        </View>
        {/* Bouton "S'inscrire" */}
      <TouchableOpacity style={styles.button}         
      onPress={() => navigation.navigate('AdresseClass')}
      >
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
      

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
      </ScrollView>
        
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
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="location" size={30} color="black" />
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
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 10,
      width: '100%',
    },
    formSection: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    messageContainer: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
    boldLargeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    cameraContainer: {
      width: 150,
      height: 100,
      backgroundColor: '#E4E4E4',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginVertical: 20,
      alignSelf: 'center',
    },
    cameraImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 8,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    inputField: {
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
    },
    button: {
      backgroundColor: '#0096C9',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
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
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: 60,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    menuItem: {
      alignItems: 'center',
    },
  });
  
  
  export default AdresseScreen;
  