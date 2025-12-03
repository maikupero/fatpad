namespace Aoc2025.Days.Day02;

public class Solution : IDay
{
  private readonly string[] input;
  private readonly string[] example;

  public Solution()
  {
    var basePath = Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day02");

    input = File.ReadAllLines(Path.Combine(basePath, "Input.txt"));
    example = File.ReadAllLines(Path.Combine(basePath, "Example.txt"));
  }

  public List<(string, string)> ParseData(bool exampleIsSolved)
  {
    var originalText = exampleIsSolved ? input : example;
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
      // wild math stuff i intuited existed but could not evoke from the depths of my soul
      // didnt want to brute force i guess
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
    // i.e. 9 digit id will only need to look at lengths 1, 3, 9
    var lengths = new List<int>();
    for (int i = 1; i <= totalDigits; i++)
      if (totalDigits % i == 0) lengths.Add(i);
    return lengths;
  }

  static long GenerateSillyNumber(long prefix, int repeatCount)
  {
    string prefixStr = prefix.ToString();
    string repeated = string.Concat(Enumerable.Repeat(prefixStr, repeatCount)); // 12, 3 -> "121212"
    return long.Parse(repeated);
  }

  static long FindSillyNumbers((string, string) idRange)
  {
    long startNum = long.Parse(idRange.Item1);
    long endNum = long.Parse(idRange.Item2);
    int startDigits = idRange.Item1.Length;
    int endDigits = idRange.Item2.Length;

    var seen = new HashSet<long>(); // skip them dupes
    long total = 0;

    for (int digits = startDigits; digits <= endDigits; digits++)
    {
      // i.e. range: 1516-643977, totalDigits=4..6
      var patternLengths = GetPossiblePatternLengths(digits);
      // 4, 5, 6 -> [1, 2], [1], and [1, 2, 3] so all silly number patterns will be of lengths 1 2 or 3

      foreach (var patternLength in patternLengths)
      {
        int repeatCount = digits / patternLength;
        if (repeatCount < 2) continue; // 1 would mean unique numbers like 8304 are silly? nope.

        long minPrefix = (long)Math.Pow(10, patternLength - 1); // 1 for patternLength=1, 10 for patternLength=2..
        long maxPrefix = (long)Math.Pow(10, patternLength) - 1; // 9 for patternLength=1, 99 for patternLength=2..

        for (long prefix = minPrefix; prefix <= maxPrefix; prefix++)
        {
          // prefix = 1, repeatCount = 4 → 1111     X under min
          // prefix = 3, repeatCount = 4 → 3333     :)
          // prefix = 69, repeatCount = 3 → 696969  X over max
          // prefix=12, repeatCount=3 → 121212      :)
          // prefix = 644 → 644644                  X over max
          // prefix=123, repeatCount=2 → 123123     :)
          long sillyNumber = GenerateSillyNumber(prefix, repeatCount);
          if (
            sillyNumber >= startNum &&
            sillyNumber <= endNum && // whatever simple logic is fine
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