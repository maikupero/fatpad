namespace Aoc2025.Util.Geometry.XY;

public enum Direction
{
  U, UR, R, DR, D, DL, L, UL
}

public record Point(int Y, int X);
public record Coord
{
  public Point Point { get; init; }
  public object? Holds { get; set; }
  public bool Seen { get; set; } = false;

  public Coord(Point point, object? holds, bool seen = false)
  {
    Point = point;
    Holds = holds;
    Seen = seen;
  }
}
public class XYGrid
{
  public List<List<Coord>> Cells { get; }
  public int Height => Cells.Count;
  public int Width => Cells[0].Count;
  public XYGrid(int height, int width)
  {
    Cells = new List<List<Coord>>(height);
    for (int y = 0; y < height; y++)
    {
      var row = new List<Coord>(width);
      for (int x = 0; x < width; x++)
        row.Add(new Coord(new Point(y, x), null));
      Cells.Add(row);
    }
  }
  // lets you do grid[y][x]
  public List<Coord> this[int y] => Cells[y];
  // lets you do grid[y, x]
  public Coord this[int y, int x]
  {
    get => Cells[y][x];
    set => Cells[y][x] = value;
  }

  // lets you do grid[point]

  public Coord this[Point point]
  {
    get => this[point.Y, point.X];
    set => this[point.Y, point.X] = value;
  }
}

public class GridUtils
{
  public static readonly Dictionary<Direction, (int dx, int dy)> Offsets = new()
  {
    { Direction.U,  (0, -1) },
    { Direction.UR, (1, -1) },
    { Direction.R,  (1, 0) },
    { Direction.DR, (1, 1) },
    { Direction.D,  (0, 1) },
    { Direction.DL, (-1, 1) },
    { Direction.L,  (-1, 0) },
    { Direction.UL, (-1, -1) },
  };

  public static Point GetNextXY(Point curr, Direction dir)
  {
    var (dx, dy) = Offsets[dir];
    return new Point(curr.Y + dy, curr.X + dx);
  }

  public static bool IsOutOfBounds(int y, int x, XYGrid grid)
  {
    return y < 0 || y >= grid.Height || x < 0 || x >= grid.Width;
  }
  public static bool CoordIsOutOfBounds(Coord coord, XYGrid grid)
  {
    return coord.Point.Y < 0 || coord.Point.Y >= grid.Height || coord.Point.X < 0 || coord.Point.X >= grid.Width;
  }

  public static double GetDistanceBetween(Point a, Point b)
    => Math.Sqrt(Math.Pow(a.Y - b.Y, 2) + Math.Pow(a.X - b.X, 2));

  public static int CountAdjacent(
    XYGrid grid,
    Coord coord,
    object? target,
    bool diagonals = true,
    bool countOutOfBounds = false,
    int? targetCount = null
    )
  {
    int count = 0;

    foreach (var kv in Offsets)
    {
      var (dx, dy) = kv.Value;

      if (!diagonals && dx != 0 && dy != 0) continue;

      int ny = coord.Point.Y + dy;
      int nx = coord.Point.X + dx;

      if (IsOutOfBounds(ny, nx, grid))
      {
        if (countOutOfBounds) count++;
        continue;
      }

      var neighbour = grid[ny, nx];

      if (Equals(neighbour.Holds, target))
      {
        count++;
        if (targetCount != null && count == targetCount) return count;
      }
    }

    return count;
  }

  public static XYGrid ParseLines(string[] lines, char? delimiter = null)
  {
    int height = lines.Length;
    int width;

    string[][] splitLines;

    if (delimiter != null)
    {
      splitLines = lines.Select(line => line.Split(delimiter.Value)).ToArray();
      width = splitLines[0].Length;
    }
    else
    {
      splitLines = lines.Select(line => line.Select(c => c.ToString()).ToArray()).ToArray();
      width = lines[0].Length;
    }

    var grid = new XYGrid(height, width);

    for (int y = 0; y < height; y++)
    {
      for (int x = 0; x < width; x++)
      {
        var value = splitLines[y][x].Length == 1 ? (object)splitLines[y][x][0] : splitLines[y][x];
        grid[y, x] = new Coord(new Point(y, x), value);
      }
    }

    return grid;
  }
  public static void ParseGridWith(XYGrid grid, Action<Coord> action)
  {
    for (int y = 0; y < grid.Height; y++)
    {
      for (int x = 0; x < grid.Width; x++)
      {
        action(grid[y, x]);
      }
    }
  }
}