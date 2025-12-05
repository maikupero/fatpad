namespace Aoc2025.Days.Day02;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day02");

  static List<(string, string)> ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var originalText = File.ReadAllLines(Path.Combine(BasePath, filename));
    var idRanges = new List<(string, string)>();
    foreach (var idRange in originalText[0].Split(','))
    {
      var range = idRange.Split('-');
      var (first, last) = (range[0], range[1]);
      idRanges.Add((first, last));
    }
    return idRanges;
  }

  static (string start, string end) ClampRangeToEvenDigits((string start, string end) idRange)
  {
    var (start, end) = idRange;
    bool startIsEven = start.Length % 2 == 0;
    bool endIsEven = end.Length % 2 == 0;

    if (!startIsEven && !endIsEven)
      return (start, end);

    if (!startIsEven)
      start = ((long)Math.Pow(10, start.Length)).ToString();

    if (!endIsEven)
      end = ((long)Math.Pow(10, end.Length - 1) - 1).ToString();

    return (start, end);
  }

  static bool CanHaveSillyPatterns((string, string) clampedIdRange)
  {
    return clampedIdRange.Item1.Length % 2 == 0 || clampedIdRange.Item2.Length % 2 == 0;
  }

  static long CalculateSillyPatterns((string, string) range)
  {
    long startNum = long.Parse(range.Item1);
    long endNum = long.Parse(range.Item2);

    int minDigits = range.Item1.Length;
    int maxDigits = range.Item2.Length;

    long total = 0;

    for (int digits = minDigits; digits <= maxDigits; digits += 2)
    {
      long multiplier = (long)Math.Pow(10, digits / 2) + 1;
      long prefixMin = (long)Math.Ceiling(startNum / (double)multiplier);
      long prefixMax = (long)Math.Floor(endNum / (double)multiplier);

      if (prefixMax >= prefixMin)
      {
        long n = prefixMax - prefixMin + 1;
        long sumPrefixes = n * (prefixMin + prefixMax) / 2;
        total += sumPrefixes * multiplier;
      }
    }

    return total;
  }

  public string Part1()
  {
    const bool exampleIsSolved = true;
    List<(string, string)> parsedData = ParseData(exampleIsSolved);
    long invalidIdSum = 0;
    foreach (var idRange in parsedData)
    {
      var clampedRange = ClampRangeToEvenDigits(idRange);
      if (CanHaveSillyPatterns(clampedRange))
        invalidIdSum += CalculateSillyPatterns(clampedRange);
    }
    return invalidIdSum.ToString();
  }

  static List<int> GetPossiblePatternLengths(int totalDigits)
  {
    var lengths = new List<int>();
    for (int i = 1; i <= totalDigits; i++)
      if (totalDigits % i == 0) lengths.Add(i);
    return lengths;
  }

  static long GenerateSillyNumber(long prefix, int repeatCount)
  {
    string prefixStr = prefix.ToString();
    string repeated = string.Concat(Enumerable.Repeat(prefixStr, repeatCount));
    return long.Parse(repeated);
  }

  static long FindSillyNumbers((string, string) idRange)
  {
    long startNum = long.Parse(idRange.Item1);
    long endNum = long.Parse(idRange.Item2);
    int startDigits = idRange.Item1.Length;
    int endDigits = idRange.Item2.Length;

    var seen = new HashSet<long>();
    long total = 0;

    for (int digits = startDigits; digits <= endDigits; digits++)
    {
      var patternLengths = GetPossiblePatternLengths(digits);

      foreach (var patternLength in patternLengths)
      {
        int repeatCount = digits / patternLength;
        if (repeatCount < 2) continue;

        long minPrefix = (long)Math.Pow(10, patternLength - 1);
        long maxPrefix = (long)Math.Pow(10, patternLength) - 1;

        for (long prefix = minPrefix; prefix <= maxPrefix; prefix++)
        {
          long sillyNumber = GenerateSillyNumber(prefix, repeatCount);
          if (
              sillyNumber >= startNum &&
              sillyNumber <= endNum &&
              seen.Add(sillyNumber)
          )
            total += sillyNumber;
        }
      }
    }

    return total;
  }

  public string Part2()
  {
    const bool exampleIsSolved = true;
    var parsedData = ParseData(exampleIsSolved);
    long invalidIdCount = 0;

    foreach (var range in parsedData)
    {
      invalidIdCount += FindSillyNumbers(range);
    }

    return invalidIdCount.ToString();
  }
}