// app/(flow)/receipt.tsx
import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Placeholder data (will be dynamic later)
const USER_NAME = "Juan Dela Cruz";
const CONTACT_NO = "0912345678";
const RECEIPT_ITEMS = [
    { name: "1. Keyboard", points: 15 },
    { name: "2. Charger", points: 5 },
    { name: "3. Cable wire", points: 3 },
    { name: "4. Cellphone", points: 10 },
    { name: "5. Mouse", points: 8 },
    { name: "6. MOBO", points: 15 },
];
const TOTAL_POINTS = 43;

export default function ReceiptScreen() {
    const router = useRouter();
    
    // TEMPORARY DEBUG: Log the path before pushing
    const goToPrinting = () => {
        const path = '/printing';
        console.log('Attempting to navigate to:', path);
        router.push(path); 
    };
    
    const goBack = () => {
        router.back(); 
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            {/* Back Button */}
            <TouchableOpacity onPress={goBack} style={styles.backButton}>
                <Text style={styles.backText}>back</Text>
            </TouchableOpacity>

            <View style={styles.receiptBox}>
                <Text style={styles.header}>QC E-COLLECT</Text>
                <Text style={styles.addressText}>address: Lorem Ipsum 23- 10</Text>
                <Text style={styles.addressText}>Tel: 0912345678</Text>
                <Text style={styles.addressText}>reference no. 6732826451</Text>
                
                <View style={styles.separator} />

                <Text style={styles.subHeader}>POINTS RECEIPT</Text>

                <View style={styles.summaryRow}>
                    <Text>Summary</Text>
                    <Text>11/23/2025</Text>
                </View>
                <Text style={styles.infoText}>Name: {USER_NAME}</Text>
                <Text style={styles.infoText}>Contact No: {CONTACT_NO}</Text>

                <View style={styles.itemTable}>
                    {RECEIPT_ITEMS.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <Text>{item.name}</Text>
                            <Text style={styles.itemPoints}>{item.points}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalRow}>
                    <Text style={styles.totalText}>Total Point</Text>
                    <Text style={styles.totalPointsText}>{TOTAL_POINTS}</Text>
                </View>

                <View style={styles.claimBox}>
                    <Text style={styles.claimText}>upon claiming your rewards please provide</Text>
                    <Text style={styles.claimText}>any Valid ID that matches with your Receipt</Text>
                    <Text style={styles.claimText}>information</Text>
                    <Text style={styles.thankYouText}>THANK YOU</Text>
                </View>
            </View>

            <TouchableOpacity 
                onPress={goToPrinting} 
                style={styles.printButton}
            >
                <Text style={styles.printButtonText}>Print</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: '#ffffffff', padding: 20, alignItems: 'center' },
    backButton: { position: 'absolute', top: 50, left: 10, padding: 10, backgroundColor: 'black', borderRadius: 5, zIndex: 10 },
    backText: { color: 'white', fontWeight: 'bold' },
    receiptBox: { 
        backgroundColor: '#dbdadaff', 
        width: '90%', 
        maxWidth: 400, 
        padding: 20, 
        borderWidth: 1, 
        borderColor: '#b9b8b8ff', 
        marginTop: 50, 
        borderRadius: 5 
    },
    header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
    addressText: { textAlign: 'center', fontSize: 12 },
    separator: { borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 10 },
    subHeader: { fontSize: 18, textAlign: 'center', fontWeight: 'bold', marginBottom: 10 },
    summaryRow: { flexDirection: 'row', justifyContent: 'space-between' },
    infoText: { fontSize: 14, marginTop: 2 },
    itemTable: { borderTopWidth: 1, borderTopColor: '#ccc', paddingVertical: 10, marginTop: 10 },
    itemRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 },
    itemPoints: { fontWeight: 'bold' },
    totalRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: 'black', paddingVertical: 10 },
    totalText: { fontSize: 18, fontWeight: 'bold' },
    totalPointsText: { fontSize: 18, fontWeight: 'bold' },
    claimBox: { borderWidth: 2, borderColor: 'blue', padding: 10, marginTop: 20, alignItems: 'center' },
    claimText: { fontSize: 10, textAlign: 'center' },
    thankYouText: { fontSize: 16, fontWeight: 'bold', marginTop: 5, color: 'blue' },
    printButton: { backgroundColor: '#383838', padding: 10, alignSelf: 'flex-end', marginTop: 10, borderRadius: 5, width: 80, alignItems: 'center' },
    printButtonText: { color: 'white', fontWeight: 'bold' }
});