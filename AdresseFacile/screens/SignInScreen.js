import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Button from '../components/Button';
import InputField from '../components/InputField';

const SignInScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Envoyez les données au backend ici pour la vérification
    // Exemple : Authentification réussie
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'L’email est obligatoire',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Veuillez entrer un email valide',
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <InputField
              label="Email"
              placeholder="Entrez votre email"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: 'Le mot de passe est obligatoire',
          minLength: {
            value: 6,
            message: 'Le mot de passe doit contenir au moins 6 caractères',
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <InputField
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />
      <Button title="Se connecter" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Pas encore de compte ? S'inscrire"
        onPress={() => navigation.navigate('SignUp')}
        style={styles.secondaryButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
  },
});

export default SignInScreen;
