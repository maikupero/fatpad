namespace Aoc2025.Util;

using System.Collections;
using Aoc2025.Util.Geometry.XY;
using Aoc2025.Util.Geometry.XYZ;

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

      case XYGrid grid:
        return "Grid:\n" +
            string.Join("\n",
                grid.Cells.Select(row =>
                    "  " + string.Join("", row.Select(c => c.Holds))));

      case XYZGrid grid:
        return "Grid:\n" +
            string.Join("\n",
                grid.Cells.Select((layer, z) =>
                    "Layer " + z + ":\n" +
                    string.Join("\n",
                        layer.Select(row =>
                            "  " + string.Join("", row.Select(c => c.Holds))))));

      case var kvp when kvp.GetType().IsGenericType &&
                        kvp.GetType().GetGenericTypeDefinition() == typeof(KeyValuePair<,>):
        {
          dynamic d = kvp;
          return $"{Format(d.Key)}: {Format(d.Value)}";
        }

      case IDictionary dict:
        return "{ " + string.Join(", ",
            dict.Keys.Cast<object>().Select(k => $"{Format(k)}: {Format(dict[k])}")) + " }";

      case IEnumerable<Geometry.XY.Point> points2D:
        return "[" + string.Join(", ", points2D.Select(p => $"({p.Y}, {p.X})")) + "]";

      case IEnumerable<Geometry.XYZ.Point> points3D:
        return "[" + string.Join(", ", points3D.Select(p => $"({p.Z}, {p.Y}, {p.X})")) + "]";

      case IEnumerable<(object, object)> tuples:
        return "[" + string.Join(", ", tuples.Select(t => $"({Format(t.Item1)}, {Format(t.Item2)})")) + "]";

      case IEnumerable enumerable:
        return "[" + string.Join(", ", enumerable.Cast<object>().Select(Format)) + "]";

      case var t when t.GetType().IsValueType &&
                        t.GetType().IsGenericType &&
                        t.GetType().FullName!.StartsWith("System.ValueTuple"):
        return FormatTuple(t);

      default:
        return item.ToString()!;
    }
  }

  private static string FormatTuple(object tuple)
  {
    var fields = tuple.GetType().GetFields();
    var formattedItems = fields.Select(f => Format(f.GetValue(tuple))).ToList();
    return "( " + string.Join(", ", formattedItems) + " )";
  }
}