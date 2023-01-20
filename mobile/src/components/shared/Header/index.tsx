import { Text, View } from 'react-native';
import Logo from '../../../assets/logo.svg';
import { Feather } from '@expo/vector-icons';
import colors from '../../../theme/colors';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const { navigate } = useNavigation();

  return (
    <View className="w-full flex flex-row justify-between items-center bg-background-primary">
      <Logo />
      <Button isOutlined onPress={() => navigate('createHabit')}>
        <Feather name="plus" color={colors.brand.purple} size={20} />
        <Text className="font-semibold text-white-primary ml-3">Novo</Text>
      </Button>
    </View>
  );
};
