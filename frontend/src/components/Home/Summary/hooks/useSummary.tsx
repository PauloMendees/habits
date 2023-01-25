import useSummaryQuery from '@/hooks/habits/useSummary';
import { generateDaysRange } from '@/utils/generateDaysRange';

export default function useSummary() {
  const { data: summary, isLoading } = useSummaryQuery();

  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const summaryDates = generateDaysRange();
  const minimunSummarySize = 18 * 7;
  const amountOfDaysToFill = minimunSummarySize - summaryDates.length;

  return { days, summaryDates, amountOfDaysToFill, summary, isLoading };
}
