import { StyleSheet, Image } from 'react-native';
import backgroundImage from '../../assets/images/background-image.png';

export default function ImageViewer({ imageSource }) {
  const sourceImage = imageSource ? { uri: imageSource } : backgroundImage;

  return <Image source={sourceImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
