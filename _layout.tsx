// app/(flow)/_layout.tsx
import { Stack } from 'expo-router';

export default function FlowLayout() {
  return (
    // This Stack component tells Expo Router to treat all files 
    // inside (flow) as a linear stack of screens.
    <Stack>
      {/* You can optionally define screen options here if needed, 
          but simply including <Stack> should fix the routing errors. */}
      {/* Example: Hide the header for the welcome screen */}
      <Stack.Screen 
        name="welcome" 
        options={{ headerShown: false }} 
      />
      {/* All other screens will inherit the default stack behavior */}
    </Stack>
  );
}
