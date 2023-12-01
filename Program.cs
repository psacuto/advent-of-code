using AdventOfCode2023;

Dictionary<string, Type> days = new()
{
{ "day1", typeof(Day1)}
};

Console.WriteLine("Advent of code 2023");

if (Console.IsInputRedirected)
{

    string day = args[0];
    string part = args[1];

    Console.WriteLine($"Solving {day}");

    // Read the content from the standard input stream
    string content = Console.In.ReadToEnd();

    var type = days[day];
    var solver = Activator.CreateInstance(type) as IDay;

    Console.WriteLine(solver!.Name + " " + part);

    if (part == "part1")
        Console.WriteLine("Answer " + solver!.Solve1(content.Split(Environment.NewLine)));
    else if (part == "part2")
        Console.WriteLine("Answer " + solver!.Solve2(content.Split(Environment.NewLine)));
    else
        throw new ArgumentException("part");
}
else
{
    Console.WriteLine("Usage: `cat FILE.txt > dotnet run day1 part1`");
}
