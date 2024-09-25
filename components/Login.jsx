import { View, Image, StyleSheet, Text , TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import MorphingLogo from './AnimatedLogo';
const Login = () => {
    const [fontsLoaded] = useFonts({
        'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    });
    const router=useRouter();
    if (!fontsLoaded) {
        return null; // Optionally render a loading indicator or nothing while fonts are loading
    }

    return (
        <View style={styles.container}>
           <MorphingLogo />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                   Google Developer Groups on Campus
                </Text>
                <Text style={styles.subtitle}>
                The GDG Community mobile app enhances engagement by providing event notifications, member profiles, discussion forums, and resource sharing.
                </Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => router.push('auth/sign-in')}>
                    <Text style={styles.buttonText} >Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center', // Center the image horizontally
    },
    image: {
        marginTop:'50%',
        width: '70%',
        height: 100, // Adjust based on design needs
        aspectRatio: 2,
        resizeMode: 'contain', // Maintain the aspect ratio of the image
    },
    textContainer: {
        alignItems: 'center', // Center text horizontally
        marginTop: 20, // Space between the image and the text
    },
    title: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        paddingTop: 15,
    },
    subtitle: {
        fontSize: 17,
        fontFamily: 'outfit',
        textAlign: 'center',
        color: Colors.GRAY,
        marginTop: 10,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: 30,
        alignItems: 'center', // Center text in the button
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'outfit',
        textAlign: 'center',
        color: Colors.WHITE,
    }
});

export default Login;
