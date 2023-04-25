import { COLORS, SIZES, icons, images } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
