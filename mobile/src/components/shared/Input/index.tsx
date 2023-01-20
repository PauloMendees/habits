import { Text, TextInput, TextInputProps, View } from 'react-native';
import colors from 'tailwindcss/colors';

interface InputProps extends TextInputProps {
  label?: string;
}

export const CustomInput = ({ label, ...rest }: InputProps) => {
  return (
    <View className="w-full flex flex-col">
      {label ? (
        <Text className="text-white-primary text-[16px] font-semibold mb-3">{label}</Text>
      ) : (
        <></>
      )}
      <TextInput
        {...rest}
        placeholderTextColor={colors.zinc[400]}
        className="bg-zinc-900 text-white-primary p-4 h-[52px] rounded-lg focus:border-2 focus:border-brand-green"
        keyboardAppearance="dark"
      />
    </View>
  );
};
