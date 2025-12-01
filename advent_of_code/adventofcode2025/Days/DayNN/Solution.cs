namespace Aoc2025.Days.DayNN;

public class Solution : IDay
{
  private readonly string[] input;
  private readonly string[] example;

  public Solution()
  {
    var basePath = Path.Combine(Directory.GetCurrentDirectory(), "Days", "DayNN");

    input = File.ReadAllLines(Path.Combine(basePath, "Input.txt"));
    example = File.ReadAllLines(Path.Combine(basePath, "Example.txt"));
  }

  public string[] ParseData(bool exampleIsSolved)
  {
    var originalText = exampleIsSolved ? input : example;
    return originalText;
  }

  public string Part1()
  {
    const bool exampleIsSolved = false;
    var parsedData = ParseData(exampleIsSolved);
    return "TODO";
  }
  public string Part2()
  {
    // const bool exampleIsSolved = false;
    // var parsedData = ParseData(exampleIsSolved);
    return "TODO";
  }
}