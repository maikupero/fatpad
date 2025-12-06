namespace Aoc2025.Util;

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
        return "[\n  " +
          string.Join(",\n  ",
            listOfLists.Select(inner =>
              "[" + string.Join(", ", inner) + "]"))
          + "\n]";

      case IEnumerable<IEnumerable<string>> listOfStringLists:
        return "[\n  " +
            string.Join(",\n  ",
                listOfStringLists.Select(inner => "[" + string.Join(", ", inner) + "]"))
            + "\n]";

      case XYGrid grid:
        return "Grid:\n" +
          string.Join("\n",
            grid.Cells.Select(row =>
              "  " + string.Join("", row.Select(c => c.Holds))));

      case IEnumerable<(object, object)> tuples:
        return $"[{string.Join(", ", tuples.Select(t => $"({t.Item1}, {t.Item2})"))}]";

      case var t when t.GetType().IsValueType &&
                      t.GetType().IsGenericType &&
                      t.GetType().FullName!.StartsWith("System.ValueTuple"):
        return FormatTuple(t);

      case System.Collections.IEnumerable enumerable:
        return $"[{string.Join(", ", enumerable.Cast<object>())}]";

      default:
        return item.ToString()!;
    }
  }

  private static string FormatTuple(object tuple)
  {
    var fields = tuple.GetType().GetFields();

    var formattedItems = fields
        .Select(f => Format(f.GetValue(tuple)))
        .ToList();

    return "( tuple:\n  " + string.Join("\n  ", formattedItems) + "\n)";
  }
}