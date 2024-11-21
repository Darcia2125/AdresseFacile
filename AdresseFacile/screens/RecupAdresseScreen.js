import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RecupAdresseScreen = ({ navigation }) => {
  const [selectedDirectory, setSelectedDirectory] = useState("Choisir un répertoire");
  const [showPopup, setShowPopup] = useState(false);
  const [contacts, setContacts] = useState([
    { id: "1", name: "John Doe", post: "San Francisco, CA" },
    { id: "2", name: "Bako Rabe", post: "Antsirabe, Travail" },
    { id: "3", name: "Jane Smith", post: "San Francisco, CA" },
    { id: "4", name: "Adam Smith", post: "Paris, Travail" },
    { id: "5", name: "Catherine Rose", post: "Lyon, Travail" },
  ]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [hoveredName, setHoveredName] = useState(null);

  const handleDirectoryChange = (directory) => {
    setSelectedDirectory(directory);
    setShowPopup(false); // Close popup after selection
  };

  const handleOutsideClick = () => {
    if (showPopup) {
      setShowPopup(false); // Close the popup if clicking outside
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.header}>Récupérer une adresse</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Chercher votre adresse"
              placeholderTextColor="#999"
            />
            <FontAwesome name="search" size={20} color="#999" />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.chooseButton]}
              onPress={() => setShowPopup(!showPopup)}
            >
              <Text style={styles.buttonText}>{selectedDirectory}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.validateButton]} onPress={() => navigation.navigate('ContactRecup')}>
              <Text style={styles.buttonText}>Valider</Text>
            </TouchableOpacity>
          </View>
          {showPopup && (
            <View style={styles.popup}>
              <TouchableOpacity
                onPress={() => handleDirectoryChange("Particulier")}
                style={styles.popupOption}
              >
                <Text style={styles.popupText}>Particulier</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDirectoryChange("Public")}
                style={styles.popupOption}
              >
                <Text style={styles.popupText}>Public</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDirectoryChange("Entreprise")}
                style={styles.popupOption}
              >
                <Text style={styles.popupText}>Entreprise</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.listSection}>
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            style={styles.contactList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => Alert.alert("Contact", `${item.name} cliqué`)}
                onMouseEnter={() => setHoveredName(item.id)}
                onMouseLeave={() => setHoveredName(null)}
              >
                <View style={styles.contactItem}>
                  <View style={styles.contactIcon}>
                    <FontAwesome name="user" size={24} color="#fff" />
                  </View>
                  <View style={styles.contactDetails}>
                    <Text
                      style={[
                        styles.contactName,
                        hoveredName === item.id && styles.hoveredName,
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.contactPost}>{item.post}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={styles.alphabetContainer}>
            {alphabet.map((letter) => (
              <TouchableOpacity
                key={letter}
                onPress={() => Alert.alert("Alphabet", `Vous avez cliqué sur ${letter}`)}
                onMouseEnter={() => setHoveredLetter(letter)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                <Text
                  style={[
                    styles.alphabetLetter,
                    hoveredLetter === letter && styles.hoveredLetter,
                  ]}
                >
                  {letter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => Alert.alert("Menu", "Accueil cliqué")}>
            <FontAwesome name="home" size={24} color="BLACK" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Menu", "Partager cliqué")}>
            <FontAwesome name="share-alt" size={24} color="BLACK" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Menu", "Camera cliqué")}>
            <FontAwesome name="camera" size={24} color="BLACK" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Menu", "Itinéraire cliqué")}>
            <FontAwesome name="road" size={24} color="BLACK" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topSection: {
    backgroundColor: "#2699FB",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "green",
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  chooseButton: {
    backgroundColor: "blue",
    flex: 1,
    marginRight: 10,
  },
  validateButton: {
    backgroundColor: "red",
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  popup: {
    position: "absolute",
    top: 120,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    padding: 10,
    zIndex: 100,
  },
  popupOption: {
    padding: 10,
  },
  popupText: {
    fontSize: 14,
  },
  listSection: {
    flex: 1,
    flexDirection: "row",
  },
  contactList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2699FB",
    justifyContent: "center",
    alignItems: "center",
  },
  contactDetails: {
    marginLeft: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  hoveredName: {
    color: "#2699FB", // Hover effect for name
  },
  contactPost: {
    fontSize: 12,
    color: "#666",
  },
  alphabetContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  alphabetLetter: {
    fontSize: 12,
    color: "#2699FB",
    marginVertical: 2,
  },
  hoveredLetter: {
    color: "#ff5733", // Hover effect for letter
  },
  bottomMenu: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default RecupAdresseScreen;
