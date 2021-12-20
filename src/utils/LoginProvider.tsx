import React, {useEffect, useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

interface ContextType {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
}
interface Props {
  children: React.ReactNode;
}
export const LoginContext = React.createContext({} as ContextType);

export default function LoginProvider(props: Props) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged); //TODO
    return subscribe;
  }, []);

  return (
    <LoginContext.Provider value={{user, isLoading}}>
      {props.children}
    </LoginContext.Provider>
  );
}
