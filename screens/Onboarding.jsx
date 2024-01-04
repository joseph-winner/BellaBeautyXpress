import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const Onboardin = () => {
  const navigation = useNavigation()
  const dotComponent = ({ selected }) => {
    return (
      <View style={{ height: 18, width: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', backgroundColor: 'maroon', marginHorizontal: 4 }}>
        {selected && <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: 'white' }} />}
      </View>
    );
  };
  return (
    <Onboarding
    onSkip={() =>navigation.replace("Home")}
    onDone={() =>navigation.replace("Home")}
    DotComponent={dotComponent}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          image: <Image source={require('../assets/boarding1.png')} style={{ width: '75%', height: "50%", objectFit: 'cover' }} />,
        },

        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          image: <Image source={require('../assets/boarding2.png')} style={{ width: '75%', height: "50%", objectFit: 'cover' }} />,
        },

        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          image: <Image source={require('../assets/boarding3.png')} style={{ width: '75%', height: "50%", objectFit: 'cover' }} />,
        },
      ]}
    />
  )
}

export default Onboardin