import clsx from "clsx";
import React from "react";
import { Text, View } from "react-native";

interface InsightStatCardProps {
  title: string;
  value: string;
  delta: string;
  variant?: "positive" | "negative" | "neutral";
  className?: string;
}

const InsightStatCard = ({
  title,
  value,
  delta,
  variant = "positive",
  className,
}: InsightStatCardProps) => {
  const deltaColor =
    variant === "positive"
      ? "#16a34a"
      : variant === "negative"
        ? "#dc2626"
        : "#6b7280";

  return (
    <View
      className={clsx(
        "rounded-3xl px-5 py-2.5 shadow-lg shadow-black/5 border",
        className,
      )}
    >
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="text-base font-sans-semibold text-[#6b7280]">
            {title}
          </Text>
          <Text className="mt-2 text-2xl font-sans-extrabold text-[#081126]">
            {value}
          </Text>
        </View>
        <Text
          className="mt-2 text-base font-sans-semibold"
          style={{ color: deltaColor }}
        >
          {delta}
        </Text>
      </View>
    </View>
  );
};

export default InsightStatCard;
