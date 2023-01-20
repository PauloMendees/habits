import React from 'react';
import { View } from 'react-native';

interface Params {
  percentage: number;
}

export function ProgressBar({ percentage }: Params) {
  return (
    <View className="w-full flex-row h-3 rounded-xl bg-zinc-700 items-center justify-start">
      <View
        className="bg-brand-purple rounded-xl h-3"
        style={{
          width: `${percentage}%`,
        }}
      />
    </View>
  );
}
