import { View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../../theme/colors';

interface CheckboxProps extends TouchableOpacityProps {
  checked?: boolean;
  label?: string;
}

export const Checkbox = ({ checked = false, label, ...rest }: CheckboxProps) => {
  return (
    <View className="flex flex-row items-center my-1">
      <TouchableOpacity activeOpacity={0.7} className="flex-row items-center" {...rest}>
        {checked ? (
          <View className="bg-brand-green flex-row items-center h-8 w-8 justify-center rounded-lg">
            <Feather name="check" size={20} color={colors.white.primary} />
          </View>
        ) : (
          <View className="h-8 w-8 rounded-lg bg-zinc-900 border-2 border-zinc-800" />
        )}
        {label ? <Text className="text-base text-white-primary ml-3">{label}</Text> : <></>}
      </TouchableOpacity>
    </View>
  );
};
