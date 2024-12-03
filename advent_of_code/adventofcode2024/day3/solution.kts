import java.io.File
import kotlin.math.abs

val filePath = "./data.txt"
val dataString = File(filePath).readText()

var sumOfMulOperations: Int = 0
var sumOfDoMulOperations: Int = 0
var mulEnabled: Boolean = true

val mulOperationRegex = Regex("""mul\(\d{1,3},\d{1,3}\)""")
val operationValuesRegex = Regex("""(\w+)\((\d{1,3}),(\d{1,3})\)""")
val doRegex = Regex("""^do\(\).*$""")
val dontRegex = Regex("""^don[']t\(\).*$""")

data class Operation (
  val opType: String,
  val a: Int,
  val b: Int
)

fun performOperation(operation: Operation): Int {
  return when (operation.opType) {
    "mul" -> operation.a * operation.b
    else -> 0
  }
}

fun parseForValidMulOperation(substring: String): Operation? {
  val operationString: String? = mulOperationRegex.find(substring)?.value
  if (operationString == null) return null
  val matchResult = operationValuesRegex.find(operationString)
  return matchResult?.destructured?.let { (opType, a, b) -> 
    Operation(opType, a.toInt(), b.toInt())
  }
}

dataString.forEachIndexed { index, char -> 

  if (char == 'm') {
    val mulEndIndex = if (index + 13 > dataString.length) dataString.length else index + 13
    val maxPossibleMulString: String = dataString.substring(index, mulEndIndex) // max length of a valid operation is mul(***,***) 12 chars
    val validMulOperation: Operation? = parseForValidMulOperation(maxPossibleMulString)
    if (validMulOperation != null) {
      sumOfMulOperations += performOperation(validMulOperation)
      if (mulEnabled == true) {
        sumOfDoMulOperations += performOperation(validMulOperation)
      }
    }
  }

  if (char == 'd') {
    val dontEndIndex = if (index + 8 > dataString.length) dataString.length else index + 8 // i.e. don't() 7 chars
    val maxPossibleDontSubstring: String = dataString.substring(index, dontEndIndex)
    val dontMatch: Boolean = dontRegex.matches(maxPossibleDontSubstring)
    if (dontMatch == true) {
      mulEnabled = false
    } else {
      val maxPossibleDoSubstring: String = maxPossibleDontSubstring.substring(0, 5) // i.e. do() 4 chars
      val doMatch: Boolean = doRegex.matches(maxPossibleDoSubstring)
      if (doMatch == true) {
        mulEnabled = true
      }
    }
  }
  
}

println("PART 1: $sumOfMulOperations")
println("PART 2: $sumOfDoMulOperations")