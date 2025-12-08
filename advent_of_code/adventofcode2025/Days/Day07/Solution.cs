namespace Aoc2025.Days.Day07;

using Aoc2025.Util.Geometry.XY;
using static Aoc2025.Util.Geometry.XY.GridUtils;


public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day07");

  private static XYGrid ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));
    return ParseLines(lines);
  }

  public static void TraceTachyonBeam(Coord curr, XYGrid grid, ref int count)
  {
    if (curr.Seen)
      return;
    curr.Seen = true;

    if (Equals(curr.Holds, '.') || Equals(curr.Holds, 'S'))
    {
      if (Equals(curr.Holds, '.'))
        grid[curr.Point.Y, curr.Point.X].Holds = '|'; // tree :3
      var (nextY, nextX) = GetNextXY(curr.Point, Direction.D);
      if (!IsOutOfBounds(nextY, nextX, grid))
        TraceTachyonBeam(grid[nextY, nextX], grid, ref count);
      return;
    }

    if (Equals(curr.Holds, '^'))
    {
      count += 1;
      var (ly, lx) = GetNextXY(curr.Point, Direction.L);
      if (!IsOutOfBounds(ly, lx, grid) && !grid[ly, lx].Seen)
        TraceTachyonBeam(grid[ly, lx], grid, ref count);

      var (ry, rx) = GetNextXY(curr.Point, Direction.R);
      if (!IsOutOfBounds(ry, rx, grid) && !grid[ry, rx].Seen)
        TraceTachyonBeam(grid[ry, rx], grid, ref count);
    }

    return;
  }

  public static long TraceQuantumTachyonBeamPaths(List<Beam> beams, XYGrid grid)
  {
    // for every beam in list
    // if beam y is bottom row, break
    // new list for next row
    // attempt to move beam down

    // if next is open, create beam instance same beam y+1, no new paths

    // if next is splitter, create beam instance on either side.
    // on left,
    // // if seen, adding beam's #paths to beam already there's #paths
    // // else, add new beam instance x-1 y+1 with #paths
    // on right,
    // add new beam instance x-1 y+1
    for (var y = 0; y < grid.Height - 1; y++)
    {
      var nextBeams = new List<Beam>();

      foreach (var beam in beams)
      {
        var below = GetNextXY(beam.Point, Direction.D);

        if (Equals(grid[below].Holds, '.'))
        {
          nextBeams.Add(new Beam(below, beam.Paths));
          grid[below].Seen = true;
        }

        if (Equals(grid[below].Holds, '^'))
        {
          var left = GetNextXY(below, Direction.L);
          var existingBeam = nextBeams.FirstOrDefault(b => b.Point == left);
          if (existingBeam != null)
            existingBeam.Paths += beam.Paths;
          else
          {
            nextBeams.Add(new Beam(left, beam.Paths));
            grid[left].Seen = true;
          }

          var right = GetNextXY(below, Direction.R);
          nextBeams.Add(new Beam(right, beam.Paths));
          grid[right].Seen = true;
        }
      }

      beams = nextBeams;
    }
    return beams.Sum(beam => beam.Paths);
  }

  public string Part1()
  {
    var manifold = ParseData(true);
    var start = manifold[0].Find(i => Equals(i.Holds, 'S'))!;
    var count = 0;
    TraceTachyonBeam(start, manifold, ref count);
    Print(manifold); // tree :3
    return count.ToString();
  }

  public class Beam
  {
    public Point Point { get; set; }
    public long Paths { get; set; }

    public Beam(Point point, long paths)
    {
      Point = point;
      Paths = paths;
    }
  }
  public string Part2()
  {
    var quantumTachyonManifold = ParseData(true);
    var start = quantumTachyonManifold[0].Find(i => Equals(i.Holds, 'S'))!;
    var beamsList = new List<Beam>
    {
      new Beam(start.Point, 1)
    }; // 1 unique path at start
    return TraceQuantumTachyonBeamPaths(beamsList, quantumTachyonManifold).ToString();
  }
}