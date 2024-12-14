import java.io.File

val filePath = "./day7/example.txt"

data class CalibrationSet(
  val testValue: Int,
  val equation: MutableList<Int>
)
var calibrationSets: MutableList<CalibrationSet> = mutableListOf()

File(filePath)
  .readLines()
  .forEach { line ->
    val (testValueString, equationString) = line.split(':')
    val formattedTestValue = testValueString.trim().toInt()
    val formattedEquation = equationString
      .split(" ")
      .drop(1)
      .map { num -> num.toInt() }
      .toMutableList()
    calibrationSets.add(CalibrationSet(formattedTestValue, formattedEquation))
  }

fun addOp(a: Int, b: Int): Int {
  return a + b
}
fun multOp(a: Int, b: Int): Int {
  return a * b
}
fun runOperation(a, b, operationKey: Char) {
  return when (operationKey) {
    '+' -> addOp(a, b)
    '*' -> multOp(a, b)
  }
}

fun reachesTestValue(
  set: CalibrationSet,
  operationString: String
): Boolean {
  var equationResult: Int = 0
  for (i in 0 until set.equation.size - 1) {
    println("Running ${set.equation[i]} ${operations[i]} ${set.equation[i+1]}")
    equationResult += runOperation(
      set.equation[i],
      set.equation[i + 1],
      operationString[i]
    )
  }
  println("${set.testValue} == ${equationResult}")
  return set.testValue == equationResult
}

fun findOperationStrings(
  numberOfOperators: Int
): Collection<String> {
  var allPossibleOperationStrings: Collection<String>: collectionOf()
  // should return 2 ** numberOfOperators unique combinations
  // This is the main thing to figure out
  // how to generate all possible combinations of operators
}

fun countValidCombinations(set: CalibrationSet): Int {
  val operationStrings: Collection<String> = findOperationStrings(set.equation.size - 1)
  var validCombinations: Int = 0
  for (operationString in operationStrings) {
    val reachesTestValue: Boolean = reachesTestValue(set, operationString)
    validCombinations += if (reachesTestValue) 1 else 0
  }
  return validCombinations
}

var sumOfValidCalibrationSets: Int = 0
calibrationSets.forEach { set ->
  println(set)
  val validCombinationCount: Int = countValidCombinations(set)
  sumOfValidCalibrationSets += set.testValue
}

println("PART 1: $sumOfValidCalibrationSets")
println("PART 2: TODO")
