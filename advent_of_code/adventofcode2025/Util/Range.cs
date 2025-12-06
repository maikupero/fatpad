namespace Aoc2025.Util;


public record Range(long Min, long Max);

public class RangeUtils
{
  public static bool NumIsInRange(long num, Range range)
    => num >= range.Min && num <= range.Max;

  public static bool NumIsInAnyRange(long num, List<Range> ranges)
    => ranges.Any(range => NumIsInRange(num, range));

  public static bool RangesOverlap(Range range1, Range range2)
    => range1.Min <= range2.Max && range1.Max >= range2.Min;

  public static Range MergeRanges(Range range1, Range range2)
    => new(Math.Min(range1.Min, range2.Min), Math.Max(range1.Max, range2.Max));

  public static void AddRangeAndSquish(Range newRange, List<Range> ranges)
  {
    var overlapping = ranges.Where(r => RangesOverlap(r, newRange)).ToList();

    if (overlapping.Count > 0)
    {
      foreach (var r in overlapping)
        ranges.Remove(r);
      long min = Math.Min(newRange.Min, overlapping.Min(r => r.Min));
      long max = Math.Max(newRange.Max, overlapping.Max(r => r.Max));
      ranges.Add(new Range(min, max));
    }
    else
    {
      ranges.Add(newRange);
    }

    ranges.Sort((a, b) => a.Min.CompareTo(b.Min));
  }

  public static List<Range> SquishRanges(List<Range> ranges)
  {
    var squishedRanges = new List<Range>();
    foreach (var range in ranges)
      AddRangeAndSquish(range, squishedRanges);
    return squishedRanges;
  }
}
