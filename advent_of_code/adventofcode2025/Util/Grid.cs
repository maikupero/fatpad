namespace Aoc2025;

public enum Direction
{
  U, UR, R, DR, D, DL, L, UL
}

public record Location(int X, int Y);
public record Coord
{
  public Location Location { get; init; }
  public object? Holds { get; set; }
  public bool Seen { get; set; } = false;

  public Coord(Location location, object? holds, bool seen = false)
  {
    Location = location;
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
        row.Add(new Coord(new Location(x, y), null));
      Cells.Add(row);
    }
  }
  // 1D indexer → lets you do grid[y][x]
  public List<Coord> this[int y] => Cells[y];
  // 2D indexer → lets you do grid[y, x]
  public Coord this[int y, int x] => Cells[y][x];
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

  public static Location GetNextXY(Location curr, Direction dir)
  {
    var (dx, dy) = Offsets[dir];
    return new Location(curr.X + dx, curr.Y + dy);
  }

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

      int ny = coord.Location.Y + dy;
      int nx = coord.Location.X + dx;

      if (ny < 0 || ny >= grid.Height || nx < 0 || nx >= grid.Width)
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

  public static XYGrid ParseCharGrid(string[] lines)
  {
    int height = lines.Length;
    int width = lines[0].Length;

    var grid = new XYGrid(height, width);

    for (int y = 0; y < height; y++)
    {
      for (int x = 0; x < width; x++)
      {
        grid.Cells[y][x] = new Coord(
            new Location(x, y),
            lines[y][x],
            false
        );
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