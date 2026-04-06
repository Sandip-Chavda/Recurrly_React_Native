import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabbar = components.tabBar;

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabbar.horizontalInset),
          height: tabbar.height,
          marginHorizontal: tabbar.horizontalInset,
          borderRadius: tabbar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabbar.height / 2 - tabbar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabbar.iconFrame,
          height: tabbar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {/* <Tabs.Screen name="index" options={{}} />
      <Tabs.Screen name="subscriptions" options={{}} />
      <Tabs.Screen name="insights" options={{}} />
      <Tabs.Screen name="settings" options={{}} /> */}
      {/* below route will stay as route but not shown in tabbar */}
      {/* <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} /> */}

      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, focused, size }) => (
                <TabIcon focused={focused} icon={tab.icon} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabsLayout;
