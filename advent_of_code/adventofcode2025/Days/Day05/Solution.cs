namespace Aoc2025.Days.Day05;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day05");

  private static string[] ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    return File.ReadAllLines(Path.Combine(BasePath, filename));
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