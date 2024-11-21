import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RNCamera } from 'react-native-camera';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const PictureScreen = ({ navigation }) => {
    const [camera, setCamera] = useState(null); // State to hold camera reference
    const [photoUri, setPhotoUri] = useState(null); // State to store the captured photo URI
    const [hasPermission, setHasPermission] = useState(null); // State for camera permission

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            try {
                const data = await camera.takePictureAsync();
                console.log('Photo URI:', data.uri);  // Debugging: Check if the URI is being captured
                setPhotoUri(data.uri);  // Update the photo URI state
            } catch (error) {
                console.error("Error taking picture:", error);
                Alert.alert("Error", "Failed to take picture. Please try again.");
            }
        }
    };

    if (hasPermission === null) {
        return <View style={styles.container}><Text>Requesting camera permission...</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={styles.container}><Text>No access to camera</Text></View>;
    }

    return (
        <View style={styles.container}>
            {/* Header Section */}
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
                            style={[styles.circleImage, { width: 30, height: 30 }]} // Custom size
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
            {/* Divider */}
            <View style={styles.divider} />

            {/* Main Section */}
            <View style={styles.formSection}>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>
                        <Text style={[styles.boldLargeText, { color: '#E06467' }]}>Prendre une photo</Text>
                    </Text>
                </View>

                {/* Display captured photo */}
                <TouchableOpacity 
                    style={styles.photoFrameContainer} 
                    onPress={() => navigation.navigate('Adresse')} // Navigate to the new screen on frame tap
                >
                    {photoUri ? (
                        <Image source={{ uri: photoUri }} style={styles.capturedImage} />
                    ) : (
                        <Text style={styles.photoFrameText}>Votre photo ici</Text>
                    )}

                    {/* Camera */}
                    <RNCamera
                        ref={(ref) => setCamera(ref)}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                    >
                        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                            <Ionicons name="camera" size={50} color="white" />
                        </TouchableOpacity>
                    </RNCamera>
                    </TouchableOpacity>

                {/* Social and Navigation Icons */}
                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="share-social" size={30} color="#32CD32" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="navigate" size={30} color="#32CD32" />
                    </TouchableOpacity>
                </View>

                {/* Bottom Menu */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
                        <Ionicons name="home" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
                        <Ionicons name="arrow-redo" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
                        <Ionicons name="camera" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Itineraire1')}>
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
        marginTop: -10,
    },
    formSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 340,
        marginTop: -508,
    },
    boldLargeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: -400,
    },
    roundButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#E4E4E4',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoFrameContainer: {
        position: 'absolute',
        bottom: 80,
        width: '90%',
        height: 450,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoFrameText: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    capturedImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    captureButton: {
        backgroundColor: '#32CD32',
        padding: 15,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    menuItem: {
        alignItems: 'center',
    },
    menuText: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
});

export default PictureScreen;
