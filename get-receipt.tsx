// app/(flow)/get-receipt.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function GetReceiptScreen() {
    const router = useRouter();
    
    useEffect(() => {
        // Auto-navigate after 3 seconds 
        const timer = setTimeout(() => {
            router.replace('/thank-you'); 
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.greenBox}>
                <Text style={styles.mainText}>PLEASE GET YOUR</Text>
                <Text style={styles.mainText}>RECEIPT</Text>
                <Text style={styles.icon}>👉</Text> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: { 
        flex: 1, 
        backgroundColor: '#ffffffff',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    greenBox: { 
        backgroundColor: '#a8c2a8',
        padding: 60, 
        borderRadius: 20, 
        borderWidth: 2, 
        borderColor: 'black', 
        width: '80%', 
        maxWidth: 300, 
        aspectRatio: 1,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    mainText: { 
        fontSize: 30, 
        color: 'white', 
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 35,
    },
    icon: { 
        fontSize: 80,
        marginTop: 20 
    }
});