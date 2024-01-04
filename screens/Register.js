import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const handleSendCode = async () => {
    const confirmation = await auth().signInWithPhoneNumber(`+256${phoneNumber}`);
    setConfirm(confirmation);
  };

  const handleVerifyCode = async () => {
    try {
      await confirm.confirm(verificationCode);
      // Code verification successful, proceed with login
    } catch (error) {
      console.log('Invalid verification code');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/uganda.png')} style={{ width: 100, height: 100 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>+256</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, flex: 1 }}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity onPress={handleSendCode}>
        <Text>Send Verification Code</Text>
      </TouchableOpacity>
      {confirm && (
        <View>
          <TextInput
            style={{ borderWidth: 1, padding: 10 }}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <Button title="Verify Code" onPress={handleVerifyCode} />
        </View>
      )}
    </View>
  );
};

export default Register;
