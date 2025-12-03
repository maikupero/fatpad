namespace Aoc2025;

public static class Utils
{
  public static void Print(object? item)
  {
    Console.WriteLine(Format(item));
  }

  public static void Print(string label, object? item)
  {
    Console.WriteLine($"{label}: {Format(item)}");
  }

  private static string Format(object? item)
  {
    if (item == null) return "null";

    switch (item)
    {
      case string str:
        return str;

      case IEnumerable<int> nums:
        return $"[{string.Join(", ", nums)}]";

      case IEnumerable<string> strings:
        return $"[{string.Join(", ", strings)}]";

      case IEnumerable<IEnumerable<int>> listOfLists:
        // Pretty print banks
        return "[\n  " +
               string.Join(",\n  ",
                   listOfLists.Select(inner =>
                       "[" + string.Join(", ", inner) + "]"))
               + "\n]";

      case IEnumerable<(object, object)> tuples:
        return $"[{string.Join(", ", tuples.Select(t => $"({t.Item1}, {t.Item2})"))}]";

      case System.Collections.IEnumerable enumerable:
        return $"[{string.Join(", ", enumerable.Cast<object>())}]";

      default:
        return item.ToString()!;
    }
  }
}