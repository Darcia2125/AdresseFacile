import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'; // Utilisé pour les champs du formulaire
import { Controller, useForm } from 'react-hook-form';

const UserInfoScreen = ({ navigation }) => {
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
      Remplissez ce formulaire et{"\n"} bénéficiez de tous nos services
    </Text>
        <View style={styles.form}>
        <Text style={styles.formTitle}>Remplissez</Text>

          <Controller
            name="nom"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Nom"
                value={value}
                onChangeText={onChange}
                style={styles.input}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="prenom"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Prénom"
                value={value}
                onChangeText={onChange}
                style={styles.input}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="dateNaissance"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Date de naissance"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
            )}
          />
          <Controller
            name="telephone"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Téléphone"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Email"
                value={value}
                onChangeText={onChange}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            )}
          />
          {/* Bouton Validez */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserDetail')}>
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
});

export default UserInfoScreen;
