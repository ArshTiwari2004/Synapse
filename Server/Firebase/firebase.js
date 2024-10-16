import admin from 'firebase-admin';
import serviceAccount from '../firebase/travello-ac634-firebase-adminsdk-q9qgf-fec856f8fa.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const verifyFirebaseToken = async (token) => {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken;
    } catch (error) {
      throw new Error('Invalid Firebase token');
    }
  };