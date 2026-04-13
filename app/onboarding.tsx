import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Onboarding = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#EA7A53]">
      <View className="flex-1 items-center justify-start">
        <View className=" w-full overflow-hidden rounded-b-[48px] bg-[#EA7A53] shadow-lg shadow-black/10">
          <Image
            source={require("../assets/images/splash-pattern.png")}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="px-5 pb-10">
        <Text className="text-[31px] text-center font-sans-extrabold text-white">
          Gain Financial Clarity
        </Text>
        <Text className="text-base text-center mt-2 font-sans-medium leading-7 text-white/90">
          Track, analyze and cancel with ease
        </Text>

        <Pressable
          className="mt-7 rounded-full bg-white px-8 py-4 items-center justify-center shadow-xl shadow-black/15"
          onPress={() => router.push("/sign-in")}
          accessibilityLabel="Get Started"
        >
          <Text className="text-base font-sans-bold text-[#081126]">
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
