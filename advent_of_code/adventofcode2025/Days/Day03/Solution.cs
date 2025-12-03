namespace Aoc2025.Days.Day03;

public class Solution : IDay
{
  private readonly string[] input;
  private readonly string[] example;

  public Solution()
  {
    var basePath = Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day03");

    input = File.ReadAllLines(Path.Combine(basePath, "Input.txt"));
    example = File.ReadAllLines(Path.Combine(basePath, "Example.txt"));
  }

  public List<List<int>> ParseData(bool exampleIsSolved)
  {
    var originalText = exampleIsSolved ? input : example;
    var banks = new List<List<int>>();
    foreach (var bank in originalText)
    {
      List<int> batteries = [.. bank.Select(c => c - '0')];
      banks.Add(batteries);
    }
    return banks;
  }

  // each line is 1 bank of batteries (digits). 
  // each line, turn on 2.
  // bank's joltage = the number formed by the digits on the batteries you've turned on
  // i.e. 12345 bank, turn on 2 and 4, joltage of 24. (left->right)
  // find the largest possible joltage each bank can produce

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
      var startIndex = digit == 0 ? 0 : voltageIdxs[digit - 1] + 1; // 1 after previous best voltage index
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
    const bool exampleIsSolved = true;
    var batteryBanks = ParseData(exampleIsSolved);
    long totalJoltage = 0;
    foreach (var bank in batteryBanks)
      totalJoltage += FindMaxVoltage(bank, 2);
    return totalJoltage.ToString();
  }
  public string Part2()
  {
    const bool exampleIsSolved = true;
    var batteryBanks = ParseData(exampleIsSolved);
    long totalJoltage = 0;
    foreach (var bank in batteryBanks)
      totalJoltage += FindMaxVoltage(bank, 12);
    return totalJoltage.ToString();
  }
}