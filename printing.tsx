// app/(flow)/printing.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function PrintingScreen() {
    const router = useRouter();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/get-receipt'); 
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.greenBox}>
                <Text style={styles.mainText}>PRINTING...</Text>
                <Text style={styles.subText}>PLEASE WAIT YOUR RECEIPT</Text>
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
    },
    subText: { 
        fontSize: 16, 
        color: 'white', 
        marginTop: 10,
        textAlign: 'center',
    }
});