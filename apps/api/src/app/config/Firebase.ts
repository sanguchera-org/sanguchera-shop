import * as admin from 'firebase-admin';
import { environment } from '../../environments/environment';

export class Firebase {
  public initialize(): void {
    admin.initializeApp({
      credential: admin.credential.cert(environment.firebase.credential),
    });
  }

  public firestore(): admin.firestore.Firestore {
    return admin.firestore();
  }

  public storage(): admin.storage.Storage {
    return admin.storage();
  }

  public auth(): admin.auth.Auth {
    return admin.auth();
  }
}
