
import admin from 'firebase-admin';
import serviceAccount from '../Firebase/TravelloData.json' assert { type: 'json' };

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
