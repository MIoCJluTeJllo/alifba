import { Audio } from 'expo-av';

export const getSound = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({uri});
    return sound;
}