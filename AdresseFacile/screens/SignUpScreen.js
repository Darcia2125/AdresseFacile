import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Button from '../components/Button';
import InputField from '../components/InputField';

const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Envoyez les données au backend ici
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Email"
            placeholder="Entrez votre email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="S'inscrire" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Déjà un compte ? Se connecter"
        onPress={() => navigation.navigate('SignIn')}
        style={styles.secondaryButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  secondaryButton: { marginTop: 10, backgroundColor: '#ccc' },
});

export default SignUpScreen;
