import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <Text>SignUp Screen</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;
