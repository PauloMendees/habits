import { ActivityIndicator, View } from "react-native"
import { colors } from "../../../theme/colors"

export const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background.primary}}>
            <ActivityIndicator color={colors.brand.green} size={"large"} />
        </View>
    )
}