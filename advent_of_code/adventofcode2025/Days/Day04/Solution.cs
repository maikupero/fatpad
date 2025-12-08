namespace Aoc2025.Days.Day04;

using Aoc2025.Util.Geometry.XY;
using static Aoc2025.Util.Geometry.XY.GridUtils;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day04");

  static XYGrid ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));
    return ParseLines(lines);
  }

  public string Part1()
  {
    var grid = ParseData(true);
    var accessibleRolls = 0;

    void IsAccessible(Coord cell)
    {
      var adjacentCount = CountAdjacent(grid, cell, '@');
      if (Equals(cell.Holds, '@'))
        accessibleRolls += adjacentCount < 4 ? 1 : 0;
    }

    ParseGridWith(grid, IsAccessible);

    return accessibleRolls.ToString();
  }

  public string Part2()
  {
    var grid = ParseData(true);
    var totalRemoved = 0;
    var rollsToRemove = new HashSet<Coord>();

    void RemoveAndCountRoll(Coord cell)
    {
      var adjacentCount = CountAdjacent(grid, cell, '@');
      if (Equals(cell.Holds, '@') && adjacentCount < 4)
      {
        rollsToRemove.Add(cell);
        grid[cell.Point.Y, cell.Point.X].Holds = '.';
      }
    }

    while (true)
    {
      ParseGridWith(grid, RemoveAndCountRoll);
      if (rollsToRemove.Count == 0)
        return totalRemoved.ToString();
      totalRemoved += rollsToRemove.Count;
      rollsToRemove.Clear();
    }
  }
}