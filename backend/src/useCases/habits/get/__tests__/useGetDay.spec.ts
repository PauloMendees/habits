import {
  fakeDate,
  fakeJWT,
  fakeSecret,
  mockCompleteDayHabits,
  mockedPossibleHabits,
} from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { useGetDay } from '../useGetDay';

describe('Testing useGetDay useCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = fakeSecret;
  });

  it('Should return data correctly', async () => {
    prismaMock.habit.findMany.mockResolvedValue(mockedPossibleHabits);
    prismaMock.completedDayHabits.findMany.mockResolvedValue(
      mockCompleteDayHabits,
    );

    const expetectedData = {
      possibleHabits: mockedPossibleHabits,
      completedHabits: {
        ids: mockCompleteDayHabits.map((habit) => habit.habit_id),
        percentage: mockCompleteDayHabits.length / mockedPossibleHabits.length,
      },
    };

    expect(useGetDay({ authToken: fakeJWT, date: fakeDate })).resolves.toEqual(
      expetectedData,
    );
  });
});
