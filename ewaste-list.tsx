// app/(flow)/ewaste-list.tsx
import { useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EWASTE_ITEMS = [
    "1. CPU", "2. Laptop", "3. Monitor", "4. UTP Wires", "5. Router", 
    "6. Modem", "7. Cellphone", "8. UPS", "9. Transformer", "10. Keyboard", "11. Mouse"
];

export default function EwasteListPage() {
    const router = useRouter();
    
    const goToInstructions = () => {
        router.push('/instructions'); 
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground
                // NOTE: Change this path to your actual banner image path if you have one
                source={require('@/assets/images/welcome_bg.jpg')} 
                style={styles.headerBanner}
            >
                <Text style={styles.headerText}>E-WASTE ITEM LIST</Text>
            </ImageBackground>

            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>List of acceptable E-WASTE</Text>
                
                {/* E-Waste Items */}
                <View style={styles.itemsWrapper}>
                    {EWASTE_ITEMS.map((item, index) => (
                        <Text key={index} style={styles.listItem}>{item}</Text> 
                    ))}
                </View>

                <TouchableOpacity 
                    onPress={goToInstructions} 
                    style={styles.continueButton}
                >
                    <Text style={styles.buttonText}>continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: '#ffffffff' }, 
    headerBanner: {
        width: '100%',
        height: 100, 
        backgroundColor: '#6b8e23', 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#ccc',
    },
    headerText: { 
        fontSize: 35, 
        fontWeight: 'bold', 
        color: 'white',
        marginTop: 20, 
    },

    listContainer: {
        backgroundColor: '#6b8e23',
        borderRadius: 10,
        padding: 30, 
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10, 
        marginBottom: 20,
        justifyContent: 'space-between', 
    },
    listTitle: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        color: 'white' 
    },
    itemsWrapper: {
        flex: 1, 
    },
    listItem: { 
        fontSize: 18, 
        color: 'white', 
        paddingVertical: 5,
        fontWeight: 'bold', 
    },
    continueButton: {
        backgroundColor: '#383838', 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignSelf: 'flex-end', 
    },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});