// app/(flow)/rewards.tsx
import { useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const REWARDS = [
    { item: "5 Kilos of Rice", points: 50 },
    { item: "Canned Goods", points: 100 },
    { item: "20 Kilos of Rice", points: 150 },
    { item: "30 Kilos of Rice", points: 250 },
    { item: "50 Kilos of Rice", points: 350 },
    { item: "800 Pesos Cash", points: 500 },
];

export default function RewardsScreen() {
  const router = useRouter();
  
  const goBack = () => {
    // Go back to the previous screen (Summary)
    router.back(); 
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/rewards_bg.jpg')} // Use your background image
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>REWARDS AND POINTS</Text>
            <TouchableOpacity onPress={goBack} style={styles.backButton}>
                <Text style={styles.backText}>back</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.contentRow}>
            {/* Rewards Column */}
            <View style={styles.column}>
                <Text style={styles.columnHeader}>REWARD</Text>
                {REWARDS.map((r, i) => (
                    <Text key={i} style={styles.itemText}>{`${i + 1}. ${r.item}`}</Text>
                ))}
            </View>

            {/* Points Column */}
            <View style={styles.column}>
                <Text style={styles.columnHeader}>POINTS</Text>
                {REWARDS.map((r, i) => (
                    <Text key={i} style={styles.pointsText}>{r.points}</Text>
                ))}
            </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: { flex: 1, paddingTop: 50 },
    container: { flex: 1 },
    header: { padding: 10 },
    headerText: { fontSize: 24, fontWeight: 'bold', color: 'red' },
    backButton: { position: 'absolute', top: 50, left: 10, padding: 10, backgroundColor: 'black' },
    backText: { color: 'white' },
    contentRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingHorizontal: 20, 
        marginTop: 20 
    },
    column: { width: '45%', padding: 10, backgroundColor: 'rgba(0, 50, 0, 0.7)' }, // Dark green semi-transparent
    columnHeader: { fontSize: 20, fontWeight: 'bold', color: 'blue', marginBottom: 15 },
    itemText: { fontSize: 18, color: 'white', paddingVertical: 5 },
    pointsText: { fontSize: 18, fontWeight: 'bold', color: 'yellow', paddingVertical: 5, textAlign: 'center' }
});
