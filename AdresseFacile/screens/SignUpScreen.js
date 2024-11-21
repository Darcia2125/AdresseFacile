import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'; // Utilisation de react-native-paper pour les champs de texte
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons'; // Utilisation d'Ionicons pour les icônes des yeux

const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Envoyez les données au backend ici
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
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
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Email"
              value={value}
              onChangeText={onChange}
              style={styles.inputField}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                label="Mot de passe"
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
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                label="Confirmer Mot de passe"
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
      <TouchableOpacity style={styles.button}         
      onPress={() => navigation.navigate('NextUp')}
      >
        <Text style={styles.buttonText}>Inscrivez-vous</Text>
      </TouchableOpacity>

      {/* Bouton secondaire */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.secondaryButtonText}>Déjà un compte ? Se connecter</Text>
      </TouchableOpacity>

      {/* Logos de Google, Facebook, et LinkedIn */}
      <View style={styles.socialLogos}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/linkedin.png')} style={styles.socialIcon} />
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
      </View>

      {/* Image en bas */}
      <Image
        source={require('../assets/photo2.png')} // Remplacez par le chemin de votre image
        style={styles.bottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, justifyContent: 'center', backgroundColor: '#FFFFFF' },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: -2,
    marginTop: 150,
    alignSelf: 'center',
  },
  circleImage: {
    width: '100%',
    height: '100%',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
    marginLeft:'-5%'
  },
  socialLogos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  bottomImage: {
    width: '90%', // Modifiez la largeur de l'image si nécessaire
    height: 250,  // Ajustez la hauteur si l'image est trop grande
    resizeMode: 'contain', // Garde l'image proportionnelle
    alignSelf: 'flex-end', // Aligne l'image à droite
    marginRight:'-20%',
    marginTop:-0,
  },
});

export default SignUpScreen;
