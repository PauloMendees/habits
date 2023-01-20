import { ReactNode } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';

interface Props {
  children: ReactNode;
  isOutlined?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  mb?: number;
  mt?: number;
}

export const Button = ({ children, isOutlined, onPress, mb, mt }: Props) => {
  return (
    <TouchableOpacity
      className={`px-4 py-3 flex-row rounded-lg justify-center items-center ${
        isOutlined ? 'border border-brand-purple' : ''
      }`}
      activeOpacity={0.7}
      style={{
        backgroundColor: isOutlined ? 'transparent' : colors.brand.green,
        marginBottom: mb,
        marginTop: mt,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
