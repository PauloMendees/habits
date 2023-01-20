import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BackButton } from '../../components/shared/BackButton';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import useDayDetails from './hooks/useDayDetails';
import { ProgressBar } from '../../components/shared/ProgressBar';
import { Checkbox } from '../../components/shared/Checkbox';

interface Params {
  date: string;
}

export const DayDetails = () => {
  const route = useRoute();
  const { date } = route.params as Params;
  const { dayAndMonth, dayName } = useDayDetails(date);
  const fakeHabits = ['fake'];

  return (
    <View className="flex-1 bg-background-primary pt-20 px-8">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <BackButton />
        <Text className="text-zinc-400 text-base font-semibold mt-6">{dayName}</Text>
        <Text className="text-white-primary text-[32px] font-extrabold my-3">{dayAndMonth}</Text>
        <ProgressBar percentage={Math.round(Math.random() * 100)} />
        {fakeHabits.length ? (
          <View className="mt-4">
            {fakeHabits.map((habit, i) => (
              <Checkbox label={habit} key={`${habit}-${i}`} />
            ))}
          </View>
        ) : (
          <Text className="text-base text-zinc-400 mt-4">
            Você ainda não está monitorando nenhum hábito, comece{' '}
            <Text className="text-base text-violet-400 underline">cadastrando um.</Text>
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
