import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'; // Utilisation de react-native-paper pour les champs de texte
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons'; // Utilisation d'Ionicons pour les icônes des yeux

const NextUpScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Envoyez les données au backend ici
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
        {/* Flèches gauche et droite */}
      <Image
        source={require('../assets/fleche1.png')} // Remplacez par le chemin de votre image
        style={styles.arrowLeft}
      />
      <Image
        source={require('../assets/fleche2.png')} // Remplacez par le chemin de votre image
        style={styles.arrowRight}
      />
      {/* Rond avec image en haut */}
      <View style={styles.circle}>
        <Image
          source={require('../assets/Adiresiko.png')} // Remplacez par le chemin de votre image
          style={styles.circleImage}
          resizeMode="cover"
        />
      </View>

      {/* Formulaire de SignUp */}
      <View style={styles.inputContainer}>
        <Controller
          name="exemple@gmail.com"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="exemple@gmail.com"
              value={value}
              onChangeText={onChange}
              style={styles.inputField}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          name="xxxxxxxxxxxxxx"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                label="xxxxxxxxxxxxxx"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
                style={styles.inputField}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        />
        <Controller
          name="xxxxxxxxxxxxxx"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                label="xxxxxxxxxxxxxx"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showConfirmPassword}
                style={styles.inputField}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Bouton "S'inscrire" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserInfo')}>
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>

      <Text style={styles.secondaryButtonText}>En vous inscrivant, vous acceptez les Conditons{"\n"}Générales et la Politique de Confidentialité {"\n"}d'utilisation de cette application</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, justifyContent: 'center', backgroundColor: '#FFFFFF' },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: -2,
    marginTop: -50,
    alignSelf: 'center',
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  arrowLeft: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 50,
    left: 50,
    resizeMode: 'contain',
  },
  arrowRight: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 50,
    right: 50,
    resizeMode: 'contain',
  },
  inputContainer: {
    marginBottom: -10,
    width: '80%',
    marginLeft:'5%'
  },
  inputField: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal:20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 40,
  },
  button: {
    backgroundColor: '#0096C9',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    width: 150,
    marginLeft:'25%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'left',
    color: 'grey',
    marginTop: 10,
    marginLeft:'15%'
  },
});

export default NextUpScreen;
