// app/(flow)/scanning.tsx
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define the two possible states
type ScanStatus = 'SUCCESS' | 'FAILED';

// Placeholder list data (for the right column)
const SCANNED_ITEMS = [
    { name: '1. Keyboard', count: '1x', points: 10 },
    { name: '2. Charger', count: '1x', points: 15 },
    // ... add more items
];

export default function ScanningScreen() {
    const router = useRouter();
    const [scanStatus, setScanStatus] = useState<ScanStatus>('SUCCESS'); 

    const goToSummary = () => {
        router.push('/summary'); 
    };

    const toggleStatus = () => {
        setScanStatus(prev => (prev === 'SUCCESS' ? 'FAILED' : 'SUCCESS'));
    };

    // Helper styles based on scan status
    const cameraBorderStyle = scanStatus === 'SUCCESS' ? styles.cameraBoxSuccess : styles.cameraBoxFailed;
    const messageBoxStyle = scanStatus === 'SUCCESS' ? styles.messageBoxSuccess : styles.messageBoxFailed;

    return (
        <SafeAreaView style={styles.screenContainer}>
            
            {/* LEFT SECTION: CAMERA AND MESSAGE (Flex: 40%) */}
            <View style={styles.scanSection}>
                
                <View style={[styles.cameraBox, cameraBorderStyle]}>
                    <Text style={styles.cameraText}>CAMERA</Text>
                </View>
                
                <View style={[styles.messageBox, messageBoxStyle]}>
                    <Text style={styles.messageText}>
                        {scanStatus === 'SUCCESS' 
                            ? 'PLEASE PUT YOUR E-WASTE ON TRASH BIN BELOW. 1 E-WASTE AT THE SAME TIME'
                            : 'PLEASE CHANGE THE POSITION OF YOUR ITEM, TRY ANOTHER ITEM'}
                    </Text>
                </View>
                
                {/* Toggle button for testing */}
                <TouchableOpacity onPress={toggleStatus} style={styles.toggleButton}>
                    <Text style={styles.toggleButtonText}>Toggle Scan Status</Text>
                </TouchableOpacity>
            </View>

            {/* RIGHT SECTION: SCANNED ITEMS LIST (Flex: 60%) */}
            <View style={styles.listSection}>
                <View style={styles.listHeaderRow}>
                    <Text style={styles.listHeader}>QC E-COLLECT (Scanned Items)</Text>
                    {/* Placeholder for date */}
                    <Text style={styles.listDate}>09/25/2025</Text>
                </View>

                <ScrollView style={styles.listContent}>
                    {SCANNED_ITEMS.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.count}</Text>
                            <Text style={styles.itemText}>{item.points.toString().padStart(2, '0')}</Text>
                        </View>
                    ))}
                </ScrollView>
                
                {/* Show proceed button ONLY on success (positioned at the bottom right) */}
                {scanStatus === 'SUCCESS' && (
                    <TouchableOpacity 
                        onPress={goToSummary} 
                        style={styles.proceedButton}
                    >
                        <Text style={styles.buttonText}>proceed</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: { 
        flex: 1, 
        backgroundColor: '#ffffffff', 
        padding: 10, 
        flexDirection: 'row' 
    },
    
    // LEFT SIDE (40% width)
    scanSection: { 
        flex: 0.4, // Adjusted proportion
        padding: 5, 
        alignItems: 'center', 
        justifyContent: 'flex-start', // Align content to the top
    },
    cameraBox: {
        width: '100%', 
        height: 150, 
        backgroundColor: 'black',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    cameraBoxSuccess: { borderColor: 'green' }, 
    cameraBoxFailed: { borderColor: 'red' }, 
    cameraText: { color: 'white' },

    messageBox: {
        width: '100%', 
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    messageBoxSuccess: { backgroundColor: '#5cb85c' }, 
    messageBoxFailed: { backgroundColor: '#5cb85c' }, 
    messageText: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12 },

    toggleButton: { 
        marginTop: 20, 
        padding: 10, 
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    toggleButtonText: { color: 'white' },

    // RIGHT SIDE (60% width)
    listSection: { 
        flex: 0.6, // Adjusted proportion
        padding: 15, 
        backgroundColor: 'white', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    listHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    listHeader: { fontSize: 16, fontWeight: 'bold' },
    listDate: { fontSize: 14 },
    
    listContent: { 
        flex: 10, 
        borderTopWidth: 1, 
        borderTopColor: '#919090ff', 
        paddingTop: 10, 
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    itemText: { fontSize: 14 },

    proceedButton: {
        backgroundColor: '#383838',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'flex-end',
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: { color: 'white', fontWeight: 'bold' }
});