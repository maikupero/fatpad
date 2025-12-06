namespace Aoc2025.Days.DayNN;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "DayNN");

  private static string[] ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));
    return lines;
  }

  public string Part1()
  {
    var parsedData = ParseData(false);
    return "TODO";
  }

  public string Part2()
  {
    // var parsedData = ParseData(false);
    return "TODO";
  }
}