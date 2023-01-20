import { generateDaysRange } from '../../../../utils/generateDaysRange';

export default function useSummary() {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const summaryDates = generateDaysRange();
  const minimunSummarySize = 18 * 4;
  const amountOfDaysToFill = minimunSummarySize - summaryDates.length;

  return { days, summaryDates, amountOfDaysToFill };
}
