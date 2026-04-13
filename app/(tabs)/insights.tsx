import InsightStatCard from "@/components/InsightStatCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useSubscriptionStore } from "@/lib/subscriptionStore";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [14, 18, 12, 38, 30, 42],
      color: (opacity = 1) => `rgba(234, 122, 83, ${opacity})`,
      strokeWidth: 3,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#fff9e3",
  backgroundGradientTo: "#fff9e3",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(8, 17, 38, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(8, 17, 38, ${opacity})`,
  propsForDots: {
    r: "5",
    fill: "#081126",
  },
  propsForBackgroundLines: {
    stroke: "rgba(8, 17, 38, 0.08)",
  },
};

const Insights = () => {
  const { subscriptions } = useSubscriptionStore();
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);
  const screenWidth = Dimensions.get("window").width - 40;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={subscriptions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 28,
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className="pb-20" />}
        ListHeaderComponent={() => (
          <View>
            <View className="pt-5">
              <Text className="text-3xl font-sans-extrabold text-primary">
                Insights
              </Text>
            </View>

            <Text className="text-base mt-4 font-sans-semibold text-muted-foreground">
              Monthly
            </Text>

            <View className="mt-4 w-full rounded-4xl shadow-lg shadow-black/5 overflow-hidden">
              <View className="rounded-3xl bg-[#f6ecc9] overflow-hidden">
                <LineChart
                  data={chartData}
                  width={screenWidth}
                  height={230}
                  chartConfig={chartConfig}
                  withInnerLines={true}
                  withOuterLines={true}
                  withVerticalLines={false}
                  fromZero={false}
                  withDots
                  bezier
                  style={{
                    borderRadius: 26,
                    overflow: "hidden",
                  }}
                />
              </View>
            </View>

            <View className="mt-7">
              <InsightStatCard
                title="Expenses"
                value="$424.63"
                delta="+12%"
                variant="negative"
                className="mb-6 w-full"
              />
            </View>

            <View className="mt-6 flex-row items-center justify-between">
              <Text className="text-2xl font-sans-extrabold text-primary">
                History
              </Text>
              <Text className="rounded-full border border-primary px-4 py-2 text-sm font-sans-semibold text-primary">
                View all
              </Text>
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId(
                expandedSubscriptionId === item.id ? null : item.id,
              )
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Insights;
