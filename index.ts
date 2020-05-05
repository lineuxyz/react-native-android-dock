import { Dimensions, Platform, StatusBar } from 'react-native';

export function androidDevice() {
  const dimenencion = Dimensions.get('window');
  return (
    Platform.OS === 'android' &&
    !Platform.isTablet && 
    !Platform.isTV &&
    ((dimenencion.height === 830 || dimenencion.widht === 830) || (dimenencion.height === 900 || dimenencion.widht === 900)) 
  );
}

export function ifAndroidDevice(androidStyle, regularStyle) {
  if (androidDevice()) {
    return androidStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    android: ifAndroidDevice(safe ? 30 : 20, 20),
    ios: StatusBar.currentHeight,
    default: 0
  });
}

export function getDockSpace() {
  return androidDevice() ? 20: 0;
}

