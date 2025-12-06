namespace Aoc2025.Days.Day06;

public class Solution : IDay
{
  private static string BasePath => Path.Combine(Directory.GetCurrentDirectory(), "Days", "Day06");

  private static (List<List<long>>, List<string>) ParseData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));

    var problemCols = new List<List<long>>();
    var operands = new List<string>();

    for (int i = 0; i < lines.Length; i++)
    {
      if (i != lines.Length - 1)
      {
        var cleanedLine = Regex.Replace(lines[i], @"\s+", " ").Trim().Split(" ").Select(long.Parse).ToList();
        for (int j = 0; j < cleanedLine.Count; j++)
        {
          if (i == 0)
            problemCols.Add(new List<long>());
          problemCols[j].Add(cleanedLine[j]);
        }
      }
      else
        operands = Regex.Replace(lines[i], @"\s+", " ").Trim().Split(" ").ToList();
    }

    return (problemCols, operands);
  }

  // 123 328  51 64      356    8  175    4
  //  45 64  387 23   ->  24  248  581  431
  //   6 98  215 314  ->   1  369   32  623
  // *   +   *   +  
  private static (List<List<long>>, List<string>) ParseCephalopodData(bool exampleSolved)
  {
    var filename = exampleSolved ? "Input.txt" : "Example.txt";
    var lines = File.ReadAllLines(Path.Combine(BasePath, filename));

    var problemCols = new List<List<long>>();
    var operands = new List<string>();
    var operandsRow = lines[lines.Length - 1];

    for (int i = 0; i < operandsRow.Length; i++) // parse through the bottom row
    {
      if (Equals(operandsRow[i], '+') || Equals(operandsRow[i], '*'))
      {
        operands.Add(operandsRow[i].ToString());
        var problemCol = new List<long>();

        // find the right edge of this problem column
        var searchForProblemXBound = i + 1;
        while (
          searchForProblemXBound < lines[0].Length &&
          Equals(operandsRow[searchForProblemXBound], ' ')
        )
          searchForProblemXBound++;

        // account for 1 space gap between columns
        var problemXBound = searchForProblemXBound - 1;

        if (searchForProblemXBound == operandsRow.Length)
          problemXBound += 1; // stupid one off case for the right edge of input

        for (var x = problemXBound - 1; x >= i; x--)
        { // working from right column to left, top to bottom
          var cephapodNum = "";
          for (var y = 0; y < lines.Length - 1; y++)
            cephapodNum += lines[y][x];
          problemCol.Add(long.Parse(cephapodNum.Trim()));
        }

        problemCols.Add(problemCol);
      }
    }

    return (problemCols, operands);
  }

  private static string RunTheNumbersBoys((List<List<long>>, List<string>) problemData)
  {
    var (problemCols, operands) = problemData;
    var answers = new long[problemCols.Count];
    for (int i = 0; i < problemCols.Count; i++) // col
    {
      long answerTotal = operands[i] == "+" ? 0 : 1;
      foreach (var num in problemCols[i])
        answerTotal = operands[i] == "+" ? answerTotal + num : answerTotal * num;
      answers[i] = answerTotal;
    }
    return answers.Sum().ToString();
  }

  public string Part1()
  {
    var (problemCols, operands) = ParseData(true);
    return RunTheNumbersBoys((problemCols, operands));
  }

  public string Part2()
  {
    var (cephalopodProblemCols, operands) = ParseCephalopodData(true);
    return RunTheNumbersBoys((cephalopodProblemCols, operands));
  }
}