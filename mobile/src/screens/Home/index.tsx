import { View } from "react-native"
import { Summary } from "../../components/Home/Summary"
import { Header } from "../../components/shared/Header"

export const Home = () => {
    return (
        <View className="flex-1 px-8 py-20 bg-background-primary">
            <Header />
            <Summary />
        </View>
    )
}