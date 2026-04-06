import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView>
      <Text>Subscription Details : {id}</Text>

      <Link href={"/"} className="mt-4 bg-primary text-white rounded p-4">
        Go Back
      </Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
