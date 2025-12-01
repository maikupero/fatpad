C# quick reference

1. Variable Declarations & Modifiers

var                 Compiler infers the type automatically. Must be initialized.
const               Compile-time constant. Must use literal values.
readonly            Assigned once (at declaration or constructor). Can’t change afterwards.
static              Belongs to the class, not the instance.
public              Visible everywhere.
private             Visible only inside this class.
protected           Class + subclasses.
internal            Visible inside this assembly.
static readonly     Shared immutable values (good for configs / flags).
field               Class-level variable (e.g., private readonly string[] input;).
local variable      Inside a function (e.g., var x = 5;).
property            Field with getter/setter (e.g., public int Count { get; set; }).


⸻

2. Common C# Types

int                 32-bit integer
long                64-bit integer
short               16-bit integer
byte                0–255 integer
bool                true/false
char                single character
float               32-bit floating point
double              64-bit floating point
decimal             High-precision decimal
string              Sequence of characters
object              Base type of everything
dynamic             Type determined at runtime
enum                Custom set of named constants
struct              Lightweight value-type object

Nullable types: int?, bool?
Tuples: (int x, int y), Tuple<T1,T2>

⸻

3. Arrays & Collections

Array               Fixed-size collection, e.g., int[] arr = {1,2,3};
List<T>             Dynamic array, e.g., var list = new List<int>();
Dictionary<TKey,TValue>  Key → Value map, e.g., var dict = new Dictionary<string,int>();
HashSet<T>          Unique items, fast lookup, e.g., var set = new HashSet<int>();
Queue<T>            First-in-first-out collection
Stack<T>            Last-in-first-out collection


⸻

4. Common Array/List Methods

.Length             Number of elements
[i]                 Access element by index
.Add(x)             Add element to List
.AddRange(xs)       Add multiple elements
.Remove(x)          Remove by value
.RemoveAt(i)        Remove by index
.Clear()            Remove all elements
.Contains(x)        Check existence
.Sort()             Sort in place
.Reverse()          Reverse in place


⸻

5. Dictionary & HashSet Methods

dict[key] = value           Insert or overwrite
dict.TryGetValue(key, out v)  Safe get
dict.ContainsKey(key)       Check key
dict.Keys / dict.Values     Enumerate keys/values
foreach (var (k,v) in dict) Loop over dictionary
set.Add(x)                  Add item to HashSet
set.Contains(x)             Fast membership test
set.Remove(x)               Remove item
set.UnionWith(set2)         Union
set.IntersectWith(set2)     Intersection


⸻

6. String Methods

.Length             Number of characters
[i]                 Access character
.Split(' ')         Split string into array
.Trim()             Remove whitespace
.Replace("a","b")  Replace substring
.Contains("x")     Check if substring exists
int.Parse(str)     Convert string to int (unsafe)
int.TryParse(str, out var n)  Safe convert
string.Join(",", list)  Join collection into string


⸻

7. LINQ (Add using System.Linq;)

Select(...)         Map / transform collection
Where(...)          Filter collection
Any(...)            At least one matches?
All(...)            All match?
First() / FirstOrDefault()  First element
Last()              Last element
Sum()               Sum of numbers
Max() / Min()       Maximum / minimum
Count(x => ...)     Count items matching condition
GroupBy(...)        Group by key
ToList() / ToArray() Convert collection type


⸻

8. File & Path Utilities

File.ReadAllLines(path)      Read file → string[]
File.ReadAllText(path)       Read entire file → string
File.WriteAllText(path,text) Write string to file
Directory.GetCurrentDirectory()  Path of app execution
Path.Combine(a,b,c)          Build cross-platform path