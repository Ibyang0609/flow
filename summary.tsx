// app/(flow)/summary.tsx
import { useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SummaryScreen() {
    const router = useRouter();
    
    const goToInformation = () => {
        router.push('/information'); 
    };

    const goToRewards = () => {
        router.push('/rewards'); 
    };
    
    // Placeholder data
    const EWASTE_SUMMARY = [
        { name: '1. Keyboard', count: '1X' },
        { name: '2. Charger', count: '3X' },
        // ... add more items as needed
    ];

    return (
        <ImageBackground 
            source={require('@/assets/images/summary_bg.jpg')} 
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBanner}> 
                    <Text style={styles.headerText}>SUMMARY</Text>
                </View>

                <TouchableOpacity onPress={goToRewards} style={styles.rewardsLink}>
                    <Text style={styles.rewardsText}>view rewards</Text>
                </TouchableOpacity>

                <View style={styles.contentRow}>
                    
                    <View style={styles.columnWrapper}>
                        <Text style={styles.columnTitle}>E-WASTE DETECTED</Text>
                        <View style={styles.listBox}>
                            <Text style={styles.summaryTitle}>Summary of your E-WASTE</Text>
                            {EWASTE_SUMMARY.map((item, index) => (
                                <View key={index} style={styles.itemRow}>
                                    <Text style={styles.listText}>{item.name}</Text>
                                    <Text style={styles.listText}>{item.count}</Text>
                                </View>
                            ))}
                            {/* Add a placeholder for vertical growth */}
                            <View style={{ flex: 1 }} />
                        </View>
                    </View>

                    {/* Total Points Box */}
                    <View style={styles.columnWrapper}>
                        <Text style={styles.columnTitle}>TOTAL</Text>
                        <View style={styles.pointsBox}>
                            <Text style={styles.pointsNumber}>150</Text>
                            <Text style={styles.ecoPointsText}>ECO POINTS</Text>
                        </View>
                    </View>
                </View>

                {/* Proceed Button - Positioned absolutely near the bottom right */}
                <TouchableOpacity 
                    onPress={goToInformation} 
                    style={styles.proceedButton}
                >
                    <Text style={styles.buttonText}>proceed</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: { flex: 1, padding: 20, paddingTop: 50 },
    
    headerBanner: { /* Style for the top header bar, similar to ewaste-list */ },
    headerText: { /* Style for SUMMARY text */ },

    rewardsLink: { alignSelf: 'flex-end', marginRight: 10, marginTop: -20 },
    rewardsText: { color: 'white', textDecorationLine: 'underline', fontSize: 16 },
    
    contentRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10 
    },
    columnWrapper: { 
        width: '48%', // Allocate space for both columns 
        alignItems: 'center',
    },
    columnTitle: { 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18, 
        marginBottom: 5,
        alignSelf: 'flex-start',
    },

    // E-Waste List Box
    listBox: { 
        width: '100%', 
        backgroundColor: '#80b875', 
        padding: 15, 
        borderRadius: 10,
        height: 300, // Fixed height for matching look
    },
    summaryTitle: { color: 'white', fontSize: 16, marginBottom: 10 },
    itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    listText: { color: 'white', fontSize: 16 },

    // Total Points Box
    pointsBox: { 
        width: '100%', 
        backgroundColor: '#80b875', 
        padding: 15, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 300, // Fixed height for matching look
    },
    pointsNumber: { 
        fontSize: 80, // Very large font size
        fontWeight: 'bold', 
        color: '#6b8e23', // Darker green color for the text
        lineHeight: 100,
    },
    ecoPointsText: { 
        color: '#6b8e23', 
        fontWeight: 'bold', 
        fontSize: 18 
    },

    // Proceed Button
    proceedButton: { 
        backgroundColor: '#383838', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        position: 'absolute', // Positioned absolutely for precise placement
        bottom: 30,
        right: 30,
    },
    buttonText: { color: 'white', fontWeight: 'bold' }
});