import { View, SafeAreaView } from 'react-native';
import Navigator from './routes/authStack.js'
import { NavigationContainer } from '@react-navigation/native';
import { PracticeProvider } from './Context/PracticeContext';
//SafeAreaView enables our apps screens to not interact with the status bar.

export default function App() {
  return (
      <PracticeProvider>
        <NavigationContainer><Navigator/></NavigationContainer>
      </PracticeProvider>
  );
}
