import { Text, View, ScrollView } from 'react-native';
import { HabitDay } from '../HabitDay';
import useHabitDay from '../HabitDay/hooks/useHabitDay';
import useSummary from './hooks/useSummary';
import { useNavigation } from '@react-navigation/native';
import useGetSummary from '../../../hooks/habits/useGetSummary';
import { useEffect } from 'react';

export const Summary = () => {
  const { days, summaryDates, amountOfDaysToFill } = useSummary();
  const { DAY_SIZE } = useHabitDay();
  const { navigate } = useNavigation();
  const { data, isLoading } = useGetSummary();

  useEffect(() => {
    console.log(data);
  }, [data, isLoading]);

  return (
    <View className="w-full my-6 flex-col">
      {isLoading ? (
        <View className="flex-row">
          {days.map((day, index) => (
            <Text
              key={`${day}+${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{
                width: DAY_SIZE,
                height: DAY_SIZE,
              }}
            >
              {day}
            </Text>
          ))}
        </View>
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View className="flex-row flex-wrap">
          {summaryDates.map((day) => (
            <HabitDay
              onPress={() => navigate('habitDay', { date: day.toISOString() })}
              key={day.toISOString()}
            />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-900 opacity-80"
                style={{
                  height: DAY_SIZE,
                  width: DAY_SIZE,
                }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
