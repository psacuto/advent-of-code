namespace AdventOfCode2023;

public interface IDay
{
    string Name { get; }

    string Solve1(string[] input);
    
    string Solve2(string[] input);
}