import 'react-native-reanimated';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {
  MD2LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import LoginScreen from './src/screens/LoginScreen';
import DashboardWaitlist from './src/screens/DashboardWaitlist';
import DashboardWaitLaporan from './src/screens/DashboardWaitLaporan';
import ScanButton from './src/components/ScanButton';
import DashboardStatusHijau from './src/screens/DashboardStatusHijau';
import DashBoardStatusKuning from './src/screens/DashboardStatusKuning';
import DashboardStatusMerah from './src/screens/DashboardStatusMerah';
import LaporButton from './src/components/LaporButton';
import ScanMasuk from './src/components/ScanMasuk';
import ScanKeluar from './src/components/ScanKeluar';
import HeaderBar2 from './src/components/HeaderBar2';
import ScanQR from './src/screens/ScanQR';
import ScanBerhasil from './src/screens/ScanBerhasil';
import ScanKeluarBerhasil from './src/screens/ScanKeluarBerhasil';
import LaporanBerhasil from './src/screens/LaporanBerhasil';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigations/AuthNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App></App>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
