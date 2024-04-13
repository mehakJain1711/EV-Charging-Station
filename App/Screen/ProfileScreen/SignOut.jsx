import React from 'react';
import { Button, View } from 'react-native';
import { useClerk } from '@clerk/clerk-react';

const ProfileScreen = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Optionally, navigate to the login screen or perform other actions after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;
