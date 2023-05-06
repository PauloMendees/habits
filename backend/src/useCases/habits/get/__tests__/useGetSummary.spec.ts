import {
  fakeDate,
  fakeID,
  fakeJWT,
  fakeSecret,
  mockedDaysWithCompletedHabits,
  mockedHabitsWithWeekDay,
} from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { useGetSummary } from '../useGetSummary';

describe('Testing useGetSummary useCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = fakeSecret;
  });

  it('Should return data with the correct logic apllyied', async () => {
    const expectedResponse = [
      {
        id: fakeID,
        date: new Date('2015-03-25'),
        completed: 2,
        amount: 0,
      },
      {
        id: fakeID,
        date: fakeDate,
        completed: 2,
        amount: 1,
      },
    ];

    prismaMock.day.findMany.mockResolvedValue(mockedDaysWithCompletedHabits);
    prismaMock.habit.findMany.mockResolvedValue(mockedHabitsWithWeekDay);
    const useCaseResponse = await useGetSummary(fakeJWT);
    expect(useCaseResponse).toStrictEqual(expectedResponse);
  });
});
