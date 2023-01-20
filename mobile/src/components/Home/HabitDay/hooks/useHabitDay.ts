import {Dimensions} from 'react-native'

export default function useHabitDay() {
    const WEEK_DAYS = 7
    const SCREEN_HORIZONTAL_PADDING = (32*2)/5
    const DAY_MARGIN = 8
    const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

    return {DAY_SIZE, DAY_MARGIN}
}