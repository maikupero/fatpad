namespace Aoc2025.Util.Geometry.XYZ;

public enum Direction
{
  U, UR, R, DR, D, DL, L, UL,
  F, UF, RF, DF, BF, DB, LB, UB
}

public record Point(int Z, int Y, int X);

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

public class XYZGrid
{
  public List<List<List<Coord>>> Cells { get; }
  public int Depth => Cells.Count;
  public int Height => Cells[0].Count;
  public int Width => Cells[0][0].Count;

  public XYZGrid(int depth, int height, int width)
  {
    Cells = new List<List<List<Coord>>>(depth);
    for (int z = 0; z < depth; z++)
    {
      var layer = new List<List<Coord>>(height);
      for (int y = 0; y < height; y++)
      {
        var row = new List<Coord>(width);
        for (int x = 0; x < width; x++)
          row.Add(new Coord(new Point(z, y, x), null));
        layer.Add(row);
      }
      Cells.Add(layer);
    }
  }
  public List<List<Coord>> this[int z] => Cells[z];
  public List<Coord> this[int z, int y] => Cells[z][y];
  public Coord this[int z, int y, int x]
  {
    get => Cells[z][y][x];
    set => Cells[z][y][x] = value;
  }
  public Coord this[Point point]
  {
    get => this[point.Z, point.Y, point.X];
    set => this[point.Z, point.Y, point.X] = value;
  }
}

public class GridUtils
{
  // example offsets; you can expand to all 26 neighbors if needed
  public static readonly Dictionary<Direction, (int dx, int dy, int dz)> Offsets = new()
    {
        { Direction.U,  (0, -1, 0) },
        { Direction.D,  (0, 1, 0) },
        { Direction.L,  (-1, 0, 0) },
        { Direction.R,  (1, 0, 0) },
        { Direction.F,  (0, 0, 1) },
        { Direction.BF, (0, 0, -1) }
        // add diagonals and combinations as needed
    };

  public static Point GetNextXYZ(Point curr, Direction dir)
  {
    var (dx, dy, dz) = Offsets[dir];
    return new Point(curr.Z + dz, curr.Y + dy, curr.X + dx);
  }

  public static bool IsOutOfBounds(int z, int y, int x, XYZGrid grid)
      => z < 0 || z >= grid.Depth || y < 0 || y >= grid.Height || x < 0 || x >= grid.Width;

  public static bool CoordIsOutOfBounds(Coord coord, XYZGrid grid)
      => coord.Point.Z < 0 || coord.Point.Z >= grid.Depth
         || coord.Point.Y < 0 || coord.Point.Y >= grid.Height
         || coord.Point.X < 0 || coord.Point.X >= grid.Width;

  public static double GetDistanceBetween(Point a, Point b)
    => Math.Sqrt(
        Math.Pow(a.Z - b.Z, 2) +
        Math.Pow(a.Y - b.Y, 2) +
        Math.Pow(a.X - b.X, 2)
    );

  public static int CountAdjacent(
      XYZGrid grid,
      Coord coord,
      object? target,
      bool countOutOfBounds = false,
      int? targetCount = null
  )
  {
    int count = 0;
    foreach (var kv in Offsets)
    {
      var (dx, dy, dz) = kv.Value;
      int nz = coord.Point.Z + dz;
      int ny = coord.Point.Y + dy;
      int nx = coord.Point.X + dx;

      if (IsOutOfBounds(nz, ny, nx, grid))
      {
        if (countOutOfBounds) count++;
        continue;
      }

      var neighbour = grid[nz, ny, nx];

      if (Equals(neighbour.Holds, target))
      {
        count++;
        if (targetCount != null && count == targetCount) return count;
      }
    }
    return count;
  }

  public static XYZGrid ParseLines(string[][][] layers, char? delimiter = null)
  {
    int depth = layers.Length;
    int height = layers[0].Length;
    int width;

    if (delimiter != null)
    {
      width = layers[0][0][0].Split(delimiter.Value).Length;
    }
    else
    {
      width = layers[0][0][0].Length;
    }

    var grid = new XYZGrid(depth, height, width);

    for (int z = 0; z < depth; z++)
    {
      for (int y = 0; y < height; y++)
      {
        for (int x = 0; x < width; x++)
        {
          object value;
          if (delimiter != null)
            value = layers[z][y][x].Split(delimiter.Value)[x];
          else
            value = layers[z][y][x];

          grid[z, y, x] = new Coord(new Point(z, y, x), value);
        }
      }
    }

    return grid;
  }

  public static void ParseGridWith(XYZGrid grid, Action<Coord> action)
  {
    for (int z = 0; z < grid.Depth; z++)
      for (int y = 0; y < grid.Height; y++)
        for (int x = 0; x < grid.Width; x++)
          action(grid[z, y, x]);
  }
}