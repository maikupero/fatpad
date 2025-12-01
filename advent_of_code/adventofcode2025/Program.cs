if (args.Length == 0)
{
  Print("Usage: dotnet run -- <day>");
  return;
}

var dayString = args[0].PadLeft(2, '0');
var typeName = $"Aoc2025.Days.Day{dayString}.Solution";
var type = Type.GetType(typeName);
if (type is null)
{
  Print($"Day {dayString} not implemented.");
  return;
}

var day = (IDay)Activator.CreateInstance(type)!;

Print("Part 1: " + day.Part1());
Print("Part 2: " + day.Part2());