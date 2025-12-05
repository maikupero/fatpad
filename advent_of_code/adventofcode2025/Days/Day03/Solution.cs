namespace Aoc2025.Days.Day03;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day03");

  static List<List<int>> ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var originalText = File.ReadAllLines(Path.Combine(BasePath, filename));
    var banks = new List<List<int>>();
    foreach (var bank in originalText)
    {
      List<int> batteries = [.. bank.Select(c => c - '0')];
      banks.Add(batteries);
    }
    return banks;
  }

  static int FindBestBatteryIndex(List<int> bank, int startIndex, int endIndex)
  {
    var currIndex = startIndex;
    var maxIndex = startIndex;
    var max = bank[startIndex];
    while (currIndex < endIndex)
    {
      if (bank[currIndex] > max)
      {
        maxIndex = currIndex;
        max = bank[currIndex];
      }
      currIndex++;
    }
    return maxIndex;
  }

  static long FindMaxVoltage(List<int> bank, int batteryCount)
  {
    long maxVoltage = 0;
    int[] voltageIdxs = new int[batteryCount];

    for (var digit = 0; digit < batteryCount; digit++)
    {
      var startIndex = digit == 0 ? 0 : voltageIdxs[digit - 1] + 1;
      var endIndex = bank.Count - batteryCount + digit + 1;
      voltageIdxs[digit] = FindBestBatteryIndex(bank, startIndex, endIndex);
    }

    for (int i = 0; i < batteryCount; i++)
    {
      maxVoltage += bank[voltageIdxs[i]] * (long)Math.Pow(10, batteryCount - i - 1);
    }

    return maxVoltage;
  }

  public string Part1()
  {
    var banks = ParseData(true);
    return banks.Sum(bank => FindMaxVoltage(bank, 2)).ToString();
  }

  public string Part2()
  {
    var banks = ParseData(true);
    return banks.Sum(bank => FindMaxVoltage(bank, 12)).ToString();
  }
}