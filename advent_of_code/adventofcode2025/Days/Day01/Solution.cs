namespace Aoc2025.Days.Day01;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day01");

  static List<int> ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var originalText = File.ReadAllLines(Path.Combine(BasePath, filename));

    var attachedoDocumento = new List<int>();
    for (int i = 0; i < originalText.Length; i++)
    {
      string line = originalText[i];
      char direction = line[0];
      int value = int.Parse(line[1..]);
      attachedoDocumento.Add(direction == 'L' ? -value : value);
    }

    return attachedoDocumento;
  }

  public string Part1()
  {
    var instructions = ParseData(true);
    int timesPassedZero = 0;
    int currentNumber = 50;
    foreach (var instruction in instructions)
    {
      currentNumber += instruction;
      if (currentNumber < 0)
      {
        currentNumber = 100 - Math.Abs(currentNumber % 100);
      }
      else if (currentNumber > 99)
      {
        currentNumber %= 100;
      }
      if (currentNumber % 100 == 0)
      {
        timesPassedZero += 1;
      }
    }
    return timesPassedZero.ToString();
  }

  public string Part2()
  {
    var instructions = ParseData(true);
    int timesPassedZero = 0;
    int currentNumber = 50;

    foreach (var instruction in instructions)
    {
      bool startedAtZero = currentNumber == 0;
      timesPassedZero += Math.Abs(instruction) / 100;
      currentNumber += instruction % 100;

      if (currentNumber == 0)
      {
        timesPassedZero += 1;
      }
      else if (currentNumber < 0)
      {
        timesPassedZero += startedAtZero ? 0 : 1;
        currentNumber = 100 - Math.Abs(currentNumber);
      }
      else if (currentNumber > 99)
      {
        timesPassedZero += 1;
        currentNumber %= 100;
      }
    }
    return timesPassedZero.ToString();
  }
}