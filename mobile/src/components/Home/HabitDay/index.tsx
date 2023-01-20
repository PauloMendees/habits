import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import useHabitDay from './hooks/useHabitDay';

interface Props {
  onPress?: () => void;
}

export const HabitDay = ({ onPress }: Props) => {
  const { DAY_SIZE } = useHabitDay();

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{
        height: DAY_SIZE,
        width: DAY_SIZE,
      }}
      activeOpacity={0.7}
    />
  );
};
