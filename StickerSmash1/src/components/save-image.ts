import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

export async function saveImageAsync(imageRef: any) {
  try {
    const localUri = await captureRef(imageRef, {
      height: 440,
      quality: 1,
    });

    await MediaLibrary.saveToLibraryAsync(localUri);
    if (localUri) {
      alert('Saved!');
    }
  } catch (e) {
    console.log(e);
  }
}
