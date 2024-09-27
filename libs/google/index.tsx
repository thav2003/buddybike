import {
  GoogleSignin,
  isErrorWithCode,
  NativeModuleError,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      "884555979437-e08cterkotagocfto743evklvq7u8n3o.apps.googleusercontent.com",
    scopes: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
    ],
    offlineAccess: false,
    forceCodeForRefreshToken: true,
    iosClientId:
      "884555979437-mro0jtaf1iqof723f8aenssj695mdnd4.apps.googleusercontent.com",
    profileImageSize: 120,
  });
};
export const prettyJson = (value: any) => {
  function sort(object: any) {
    if (!object || typeof object !== "object" || object instanceof Array)
      return object;
    const keys = Object.keys(object);
    keys.sort();
    const newObject = {};
    for (let i = 0; i < keys.length; i++) {
      // @ts-ignore
      newObject[keys[i]] = sort(object[keys[i]]);
    }
    return newObject;
  }
  return JSON.stringify(sort(value), null, 2);
};

export const getCurrentUser = async () => {
  try {
    configureGoogleSignIn();
    const { type, data } = await GoogleSignin.signInSilently();
    if (type === "success") {
      console.log({ userInfo: data, error: undefined });
      return data;
    } else if (type === "noSavedCredentialFound") {
      console.log({
        error: "User not signed in yet, please sign in :)",
      });
      return false;
    }
  } catch (error) {
    const typedError = error as NativeModuleError;
    console.log({ error: typedError });
  }
};

export const googleLogin = async () => {
  try {
    configureGoogleSignIn();
    await GoogleSignin.hasPlayServices();
    const { type, data } = await GoogleSignin.signIn();
    if (type === "success") {
      console.log({ userInfo: data, error: undefined });
    } else {
      // sign in was cancelled by user
      setTimeout(() => {
        Alert.alert("cancelled");
      }, 500);
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      console.log("error", error.message);
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert(
            "in progress",
            "operation (eg. sign in) already in progress"
          );
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert("play services not available or outdated");
          break;
        default:
          Alert.alert("Something went wrong: ", error.toString());
      }
      console.error(error);
    } else {
      alert(`an error that's not related to google sign in occurred`);
    }
  }
};
export const googleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.log({
      error: error as NativeModuleError,
    });
  }
};
