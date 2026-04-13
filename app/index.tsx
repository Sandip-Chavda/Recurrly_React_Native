import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import React from "react";
import Onboarding from "./onboarding";

const Index = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Onboarding />;
};

export default Index;
