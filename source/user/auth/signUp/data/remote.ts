import firebase from '@react-native-firebase/app';
import {COLLECTIONS, UserDocument} from '../../../../common/data/firestore';
import {RegisterForm} from '../domain';
import firestore from '@react-native-firebase/firestore';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';

type FirebaseSignUpInput = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

type FirebaseSignUpResponse = {
  kind: 'identitytoolkit#SignupNewUserResponse';
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string; // In seconds
  localId: string;
};

const mapRegisterFormToBackend = (form: RegisterForm): FirebaseSignUpInput => ({
  email: form.email,
  password: form.password,
  returnSecureToken: true,
});

export const signUpMutation = async (formData: RegisterForm) => {
  try {
    const apiKey = firebase.app().options.apiKey;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mapRegisterFormToBackend(formData)),
      },
    );

    if (response.status !== 200) {
      throw new AppError(t('alert/unknown-error'));
    }

    const {idToken, refreshToken, expiresIn, localId}: FirebaseSignUpResponse =
      await response.json();

    const user: UserDocument = {
      id: localId,
      name: formData.name,
      surname: formData.surname,
      avatar: 'https://picsum.photos/128', // Set a default one for this example
    };

    // FIXME: This of course causes inconsistent states
    await firestore().collection(COLLECTIONS.Users).add(user);

    return {
      idToken,
      refreshToken,
      expiresIn,
      localId,
      avatar: user.avatar,
    };
  } catch (error) {
    throw new AppError(t('alert/unknown-error'));
  }
};
