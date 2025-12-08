namespace Aoc2025.Days.Day08;

using Aoc2025.Util.Geometry.XYZ;
using static Aoc2025.Util.Geometry.XYZ.GridUtils;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day08");

  private static (List<(Point, int)>, Dictionary<int, HashSet<Point>>) ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));
    var junctionBoxes = new List<(Point, int)>();
    var circuits = new Dictionary<int, HashSet<Point>>();
    for (var i = 0; i < lines.Length; i++)
    {
      var nums = lines[i].Split(',');
      var junctionBox = (new Point(int.Parse(nums[0]), int.Parse(nums[1]), int.Parse(nums[2])), i);
      junctionBoxes.Add(junctionBox);
      circuits.Add(i, new HashSet<Point>());
      circuits[i].Add(junctionBox.Item1);
    }
    return (junctionBoxes, circuits);
  }

  // -- Initial Understanding --
  // get list of (junction boxes, circuit#?) tuples - index as identifier
  // get (unique combinations of junctions, distances between
  // sort by distance
  // set circuit# at 0
  // for x combinations, from shortest to longest
  // // if one of the two junctions is in a circuit already, add the other to it
  // // if not, create a new circuit.
  // // increment circuit # 
  // get top 3 circuits from list of (junction, circuit#) tuples
  // return their product

  // i missed that each junction box is in its own circuit from the start
  // so really we should have a hashmap of {'0': List<junctionBoxes>}

  private static List<((int, int), double)> GetSortedUniqueCombinations(List<(Point, int)> junctionBoxes)
  {
    var uniqueCombinations = new List<((int, int), double)>();
    for (var a = 0; a < junctionBoxes.Count - 1; a++)
      for (var b = a + 1; b < junctionBoxes.Count; b++)
      {
        var distance = GetDistanceBetween(junctionBoxes[a].Item1, junctionBoxes[b].Item1);
        uniqueCombinations.Add(((a, b), distance));
      }

    return uniqueCombinations.OrderBy(i => i.Item2).ToList();
  }

  public string Part1()
  {
    const bool exampleSolved = true;
    const int PairCount = exampleSolved ? 1000 : 10;
    const int ProductCount = 3;

    var (junctionBoxes, circuits) = ParseData(exampleSolved);

    var sortedCombinations = GetSortedUniqueCombinations(junctionBoxes);

    for (var i = 0; i < PairCount; i++)
    {
      ((int idx1, int idx2), double distance) = sortedCombinations[i];
      var (box1CircuitIdx, box2CircuitIdx) = (junctionBoxes[idx1].Item2, junctionBoxes[idx2].Item2);
      var (box1Circuit, box2Circuit) = (circuits[box1CircuitIdx], circuits[box2CircuitIdx]);

      if (box1Circuit == box2Circuit)
        continue; // already in the same circuit


      var biggerCircuitSize = Math.Max(box1Circuit.Count, box2Circuit.Count);
      var (biggerCircuit, smallerCircuit) =
        biggerCircuitSize == box1Circuit.Count
          ? (box1CircuitIdx, box2CircuitIdx)
          : (box2CircuitIdx, box1CircuitIdx); // handles edge case where same size, so just merge into first circuit since its earlier in order

      for (var b = 0; b < junctionBoxes.Count; b++)
      {
        if (junctionBoxes[b].Item2 == smallerCircuit)
        {
          junctionBoxes[b] = (junctionBoxes[b].Item1, biggerCircuit); // assign the bigger circuit to all boxes in the smaller circuit
          circuits[biggerCircuit].Add(junctionBoxes[b].Item1); // add box to bigger circuit
          circuits[smallerCircuit].Remove(junctionBoxes[b].Item1); // remove from smaller
        }
      }
      circuits.Remove(smallerCircuit); // cleanup
    }

    return circuits
      .OrderByDescending(i => i.Value.Count)
      .Take(ProductCount)
      .Aggregate(1, (acc, i) => acc * i.Value.Count)
      .ToString(); ;
  }

  public string Part2()
  {
    const bool exampleSolved = true;
    var (junctionBoxes, circuits) = ParseData(exampleSolved);
    var sortedCombinations = GetSortedUniqueCombinations(junctionBoxes);

    var i = 0;
    while (true) // all cause i dont want to rewrite all this 
    {
      if (i >= sortedCombinations.Count)
        i = 0;

      ((int idx1, int idx2), double distance) = sortedCombinations[i];

      var (box1CircuitIdx, box2CircuitIdx) = (junctionBoxes[idx1].Item2, junctionBoxes[idx2].Item2);
      var (box1Circuit, box2Circuit) = (circuits[box1CircuitIdx], circuits[box2CircuitIdx]);

      if (box1Circuit == box2Circuit)
      {
        i++;
        continue; // already in the same circuit
      }

      var biggerCircuitSize = Math.Max(box1Circuit.Count, box2Circuit.Count);
      var (biggerCircuit, smallerCircuit) =
        biggerCircuitSize == box1Circuit.Count
          ? (box1CircuitIdx, box2CircuitIdx)
          : (box2CircuitIdx, box1CircuitIdx);

      for (var b = 0; b < junctionBoxes.Count; b++)
      {
        if (junctionBoxes[b].Item2 == smallerCircuit)
        {
          junctionBoxes[b] = (junctionBoxes[b].Item1, biggerCircuit);
          circuits[biggerCircuit].Add(junctionBoxes[b].Item1);
          circuits[smallerCircuit].Remove(junctionBoxes[b].Item1);
        }
      }

      circuits.Remove(smallerCircuit);
      if (circuits.Count == 1)
        return ((long)junctionBoxes[idx1].Item1.Z * junctionBoxes[idx2].Item1.Z).ToString();

      i++;
    }
  }
}