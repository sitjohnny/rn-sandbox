import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import backgroundImage from './assets/images/background-image.png';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={backgroundImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button theme="primary" label={'Choose a photo'} />
                <Button label={'Use this photo'} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
