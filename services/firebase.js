import * as firebase from 'firebase';
import firebaseConfig from './config.json';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage()

export function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
        const paths = []
        // Loop over each item
        result.items.forEach(ref => {
            paths.push(ref.fullPath);
        });
        if (result.nextPageToken) {
            return listFilesAndDirectories(reference, result.nextPageToken);
        }
        return Promise.resolve(result);
    });
}

export async function getImgFromFirestore(path) {
    return storage.ref(path).getDownloadURL()
}

export const db = storage.ref('alphabet');
