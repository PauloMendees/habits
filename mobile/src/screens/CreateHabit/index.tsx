import { ScrollView, View, Text } from 'react-native';
import { BackButton } from '../../components/shared/BackButton';
import { Button } from '../../components/shared/Button';
import { Checkbox } from '../../components/shared/Checkbox';
import { CustomInput } from '../../components/shared/Input';
import useCreateHabit from './hooks/useCreateHabit';
import { Feather } from '@expo/vector-icons';
import colors from '../../theme/colors';

export const CreateHabit = () => {
  const { weekDays, checkedDays, title, toggleCheckedDays, handleTitle } = useCreateHabit();

  return (
    <View className="flex-1 bg-background-primary pt-20 px-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className="text-white-primary text-[32px] font-extrabold my-6">Criar hábito</Text>
        <CustomInput
          placeholder="Exercícios, dormir bem, etc..."
          value={title}
          onChangeText={handleTitle}
          label="Qual seu comprometimento?"
        />
        <Text className="text-white-primary text-[16px] font-semibold mb-3 mt-6">
          Qual a recorrência?
        </Text>
        {weekDays.map((day, i) => (
          <Checkbox
            key={i}
            label={day}
            checked={checkedDays.includes(i)}
            onPress={() => toggleCheckedDays(i)}
          />
        ))}
        <Button mt={36}>
          <Feather name="check" color={colors.white.primary} size={14} />
          <Text className="text-white-primary text-base font-semibold ml-3">Confirmar</Text>
        </Button>
      </ScrollView>
    </View>
  );
};
