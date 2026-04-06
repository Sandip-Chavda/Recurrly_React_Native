import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignInScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-card">
      <Text>SignIn Screen</Text>

      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 bg-primary text-white rounded p-4"
      >
        Go to Sign up
      </Link>
    </SafeAreaView>
  );
};

export default SignInScreen;
