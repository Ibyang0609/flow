import { useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const INSTRUCTIONS = [
    "1. Prepare your E-Waste.", 
    "2. Place ONLY ONE E-Waste on the machine at a time.", 
    "3. Please wait a second for the camera to identify the object.", 
    "4. E-Waste identified.", 
    "5. If you want to add more E-Waste click “yes”", 
    "6. If you don’t want to add more click “no”", 
    "7. Please add your name and contact number.", 
    "8. You can view now your receipt details.", 
    "9. Click “print receipt.”"
];

export default function InstructionsScreen() {
    const router = useRouter();
    
    const goToScanning = () => {
        router.push('/scanning'); 
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground
                source={require('@/assets/images/welcome_bg.jpg')} 
                style={styles.headerBanner}
            >
                <Text style={styles.headerText}>INSTRUCTIONS</Text>
            </ImageBackground>

            <View style={styles.contentBox}>
                <Text style={styles.listTitle}>Instruction for using a Machine</Text>
                
                <ScrollView style={styles.itemsWrapper}>
                    {INSTRUCTIONS.map((instruction, index) => (
                        <Text key={index} style={styles.instructionItem}>
                            {instruction}
                        </Text> 
                    ))}
                </ScrollView>

                <TouchableOpacity 
                    onPress={goToScanning} 
                    style={styles.continueButton}
                >
                    <Text style={styles.buttonText}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: { 
        flex: 1, 
        backgroundColor: '#ffffffff' 
    }, 
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
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'white',
        marginTop: 20,
    },
    contentBox: {
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
        fontSize: 25, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        color: 'white' 
    },
    itemsWrapper: {
        flex: 1, 
        marginBottom: 20, 
    },
    instructionItem: { 
        fontSize: 18, 
        color: 'white', 
        paddingVertical: 8, 
        fontWeight: 'bold', 
        lineHeight: 25,
    },
    continueButton: {
        backgroundColor: '#383838', 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignSelf: 'flex-end', 
    },
    buttonText: { 
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold' 
    }
});
