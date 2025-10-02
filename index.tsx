import { useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
    const router = useRouter();

    const startProcess = () => {
        router.push('/ewaste-list'); 
    };

    return (
        <SafeAreaView style={styles.fullScreen}>
            <ImageBackground 
                source={require('@/assets/images/welcome_bg.jpg')} 
                style={styles.background}
            >
                <View style={styles.container}>
                    {/* Logo and Main Title */}

                    <Text style={styles.welcomeText}>WELCOME TO</Text>
                    <View style={styles.logoRow}>
                        <Text style={styles.qcText}>QC</Text>
                        <Text style={styles.eCollectText}> E-COLLECT</Text>
                    </View>
                    
                    {/* Call to Action Button */}
                    <TouchableOpacity 
                        onPress={startProcess} 
                        style={styles.startButton}
                    >
                        <Text style={styles.buttonText}>TAP ANYWHERE TO START</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreen: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#fff',
        padding: 20, 
    },
    background: { 
        
        width: '100%', 
        height: 350,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 3, 
        borderColor: '#000000ff', 
        shadowColor: '#5a5959ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    },
    
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    qcText: {
        fontSize: 32, 
        fontWeight: '900', 
        color: '#1e90ff', // Blue sa 'QC'
    },
    eCollectText: {
        fontSize: 37, 
        fontWeight: '900', // Extra bold
        color: 'red', // Red sa 'E-COLLECT'
    },
    
    welcomeText: { 
        fontSize: 40, 
        color: 'white', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
    startButton: {
        backgroundColor: '#0ed14fff', 
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 12,
    },
    buttonText: { 
        fontSize: 15, 
        fontWeight: '900', 
        color: '#383838',
    }
});
