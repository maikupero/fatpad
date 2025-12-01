namespace Aoc2025;

public static class Utils
{
  public static void Print(object? item)
  {
    switch (item)
    {
      case null:
        Console.WriteLine("null");
        break;
      case string str:
        Console.WriteLine(str);
        break;
      case IEnumerable<int> nums:
        Console.WriteLine($"[{string.Join(", ", nums)}]");
        break;
      default:
        Console.WriteLine(item.ToString());
        break;
    }
  }
}