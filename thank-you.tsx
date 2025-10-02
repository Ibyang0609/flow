import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ThankYouScreen() {
    const router = useRouter();
    // Start from 10 as shown in the UI/logic
    const [timer, setTimer] = useState(10); 

    useEffect(() => {
        // Countdown timer
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        // Auto-navigate after 10 seconds (or when timer hits 0)
        const timeout = setTimeout(() => {
            // FIX: Since the 'welcome' screen is now renamed to 'index.tsx' 
            // inside the (flow) group, the route is just '/'.
            router.replace('/'); 
        }, 10000); 

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <SafeAreaView style={styles.fullScreen}>
            <ImageBackground 
                source={require('@/assets/images/welcome_bg.jpg')} 
                style={styles.background}
            >
                <View style={styles.container}>
                    <View style={styles.logoRow}>
                        <Text style={styles.qcText}>QC</Text>
                        <Text style={styles.eCollectText}> E-COLLECT</Text>
                    </View>

                    <Text style={styles.thankYouText}>THANK YOU FOR USING</Text>
                    <Text style={styles.thankYouText}>QC E-COLLECT</Text>
                    
                    {/* Timer */}
                    <Text style={styles.timerText}>{timer}</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreen: { 
        flex: 1, 
        backgroundColor: '#ffffffff', 
        padding: 20, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    background: { 
        width: '100%', 
        height: 300, 
        borderRadius: 15,
        overflow: 'hidden', 
        borderWidth: 3, 
        borderColor: '#a8c2a8', 
        shadowColor: '#000',
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    qcText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#1e90ff', // Blue for 'QC'
    },
    eCollectText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: 'red', // Red for 'E-COLLECT'
    },
    thankYouText: { 
        fontSize: 28, 
        color: 'white', 
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 35,
    },
    timerText: { 
        fontSize: 80, 
        fontWeight: 'bold', 
        color: '#FFFF00', 
        marginTop: 20,
    }
});
