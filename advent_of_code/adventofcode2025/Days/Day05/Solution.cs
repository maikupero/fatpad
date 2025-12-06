namespace Aoc2025.Days.Day05;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day05");

  private static (List<Range>, List<long>) ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));
    var ranges = lines[..lines.IndexOf("")]
      .Select(r => r.Split('-'))
      .Select(a => new Range(long.Parse(a[0]), long.Parse(a[1])))
      .ToList();
    var squishedRanges = SquishRanges(ranges);
    var ingredientIds = lines[(lines.IndexOf("") + 1)..]
      .Select(long.Parse)
      .ToList();

    return (squishedRanges, ingredientIds);
  }

  public string Part1()
  {
    var (squishedRanges, ingredientIds) = ParseData(true);
    return ingredientIds
      .Count(id => NumIsInAnyRange(id, squishedRanges))
      .ToString();
  }

  public string Part2()
  {
    var (squishedRanges, irrelevantIds) = ParseData(true);
    return squishedRanges.Sum(r => r.Max - r.Min + 1).ToString();
  }
}