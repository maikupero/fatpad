import java.io.File

val filePath = "./day7/data.txt"

data class CalibrationSet(
  val testValue: Long,
  val equation: MutableList<Long>
)
var calibrationSets: MutableList<CalibrationSet> = mutableListOf()

File(filePath)
  .readLines()
  .forEach { line ->
    val (testValueString, equationString) = line.split(':')
    val formattedTestValue = testValueString.trim().toLong()
    val formattedEquation = equationString
      .split(" ")
      .drop(1)
      .map { num -> num.toLong() }
      .toMutableList()
    calibrationSets.add(CalibrationSet(formattedTestValue, formattedEquation))
  }

fun addOp(a: Long, b: Long): Long {
  return a + b
}
fun multOp(a: Long, b: Long): Long {
  return a * b
}
fun concatOp(a: Long, b: Long): Long {
  return "$a$b".toLong()
}
fun runOperation(a: Long, b: Long, operationKey: Char): Long {
  return when (operationKey) {
    '+' -> addOp(a, b)
    '*' -> multOp(a, b)
    '|' -> concatOp(a, b)
    else -> throw IllegalArgumentException("Huh??? Bro?")
  }
}

fun reachesTestValue(
  set: CalibrationSet,
  operationString: String
): Boolean {
  val operations = operationString.toMutableList()
  var equationResult: Long = 0
  for (i in 0 until operations.size) {
    equationResult = runOperation(
      if (i == 0) set.equation[i] else equationResult,
      set.equation[i + 1],
      operationString[i]
    )
  }
  return equationResult == set.testValue
}

fun findOperationStrings(
  equationSize: Int
): Collection<String> {
  if (equationSize < 2) return emptyList() // Doubt there are any <2 number lists
  val combinations = mutableListOf<String>()
  val operators = listOf('+', '*', "|")
  val count = equationSize - 1

  // Generate all possible combinations of operators for the list
  fun backtrack(current: StringBuilder, depth: Int) {
    if (depth == count) {
      combinations.add(current.toString())
      return
    }
    for (operator in operators) {
      current.append(operator)
      backtrack(current, depth + 1)
      current.deleteCharAt(current.length - 1) // Backtrack
    }
  }

  backtrack(StringBuilder(), 0)
  return combinations
}

fun countValidCombinations(set: CalibrationSet): Long {
  val operationStrings: Collection<String> = findOperationStrings(set.equation.size)
  var validCombinations: Long = 0
  for (operationString in operationStrings) {
    val reachesTestValue: Boolean = reachesTestValue(set, operationString)
    validCombinations += if (reachesTestValue) 1 else 0
  }
  return validCombinations
}

var sumOfValidCalibrationSets: Long = 0
calibrationSets.forEach { set ->
  val validCombinationCount: Long = countValidCombinations(set)
  if (validCombinationCount > 0) {
    sumOfValidCalibrationSets += set.testValue
    }
}

println("PART 1: $sumOfValidCalibrationSets")
println("PART 2: TODO")
