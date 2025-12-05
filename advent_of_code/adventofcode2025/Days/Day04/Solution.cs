using System.Runtime.CompilerServices;

namespace Aoc2025.Days.Day04;

public class Solution : IDay
{
  private readonly string[] input;
  private readonly string[] example;

  public Solution()
  {
    var basePath = Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day04");

    input = File.ReadAllLines(Path.Combine(basePath, "Input.txt"));
    example = File.ReadAllLines(Path.Combine(basePath, "Example.txt"));
  }

  public XYGrid ParseData(bool exampleIsSolved)
  {
    var originalText = exampleIsSolved ? input : example;
    return ParseCharGrid(originalText);
  }

  public string Part1()
  {
    const bool exampleIsSolved = true;
    var grid = ParseData(exampleIsSolved);
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
    const bool exampleIsSolved = true;
    var grid = ParseData(exampleIsSolved);
    var totalRemoved = 0;
    var rollsToRemove = new HashSet<Coord>();

    void RemoveAndCountRoll(Coord cell)
    {
      var adjacentCount = CountAdjacent(grid, cell, '@');
      if (Equals(cell.Holds, '@') && adjacentCount < 4)
      {
        rollsToRemove.Add(cell);
        grid[cell.Location.Y, cell.Location.X].Holds = '.';
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