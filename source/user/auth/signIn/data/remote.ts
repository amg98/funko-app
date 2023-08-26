import firebase from '@react-native-firebase/app';
import {COLLECTIONS, UserDocument} from '../../../../common/data/firestore';
import firestore from '@react-native-firebase/firestore';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {LoginForm} from '../domain';

type FirebaseSignInInput = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

type FirebaseSignInResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
};

const mapToBackend = (form: LoginForm): FirebaseSignInInput => ({
  email: form.email,
  password: form.password,
  returnSecureToken: true,
});

export const signInMutation = async (formData: LoginForm) => {
  try {
    const apiKey = firebase.app().options.apiKey;
    const {idToken, refreshToken, expiresIn, localId}: FirebaseSignInResponse =
      await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mapToBackend(formData)),
        },
      ).then(it => it.json());

    const {docs} = await firestore()
      .collection(COLLECTIONS.Users)
      .where('id', '==', localId)
      .get();

    const user = docs[0].data() as UserDocument;

    return {
      idToken,
      refreshToken,
      expiresIn,
      user,
    };
  } catch (error) {
    console.log(error);
    throw new AppError(t('alert/unknown-error'));
  }
};
