# FunkoApp - Share Your Funko Pops Photos

## App Description

FunkoApp is a mobile application for sharing Funko Pop figure photos with fellow collectors.

## Installation and Running

1. **Clone the Repository**
```
git clone https://github.com/amg98/funkoapp.git
```

2. **Install dependencies**
```
cd funkoapp
yarn
cd ios && pod install
```

3. **Run the App**
```
yarn android   # For Android
yarn ios       # For iOS
```

## Technologies used
- React Native
- Expo
- React Query
- Firebase (Storage, Firestore, Cloud Messaging, Auth)
- I18N

## Limitations
- Push notifications don't work on iOS as there is no App Store Connect account available for this project. Camera couldn't be tested on iOS for the same reason.
