using System.Text.RegularExpressions;

namespace AdventOfCode2023;

public class Day1 : IDay
{

    private readonly string[] digitNames = new[] { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };

    private readonly string pattern;

    public Day1()
    {
        pattern = $"({string.Join("|", digitNames.Select((s, i) => s + "|" + i))})";
    }

    public string Name => "Trebuchet?!";


    public string Solve1(string[] input)
    {
        var result = 0;
        foreach (var line in input)
        {
            if (line.Length == 0) continue;
            char firstDigit = line.First(char.IsDigit);
            char lastDigit = line.Last(char.IsDigit);
            result += int.Parse($"{firstDigit}{lastDigit}");
        }
        return result.ToString();
    }

    private int FindNumber(string line)
    {
        var firstDigit = StringToDigit(Regex.Match(line, pattern).Value);
        var lastDigit = StringToDigit(Regex.Match(line, pattern, RegexOptions.RightToLeft).Value);
        return int.Parse(firstDigit + lastDigit);
    }

    private string StringToDigit(string value)
    {
        return value.Length == 1 ? value : Array.IndexOf(digitNames, value).ToString();
    }

    public string Solve2(string[] input)
    {
        var result = 0;
        foreach (var line in input)
        {
            if (line.Length == 0) continue;
            var number = FindNumber(line);
            result += number;
        }
        return result.ToString();
    }
}