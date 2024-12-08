import java.io.File

val filePath = "./day5/data.txt"

val rulesMap: MutableMap<Int, MutableList<Int>> = mutableMapOf<Int, MutableList<Int>>()
val rulesToCheckFor: MutableSet<Int> = mutableSetOf()

val safetyManual = File(filePath).readLines()
val (rules, updates) = safetyManual.joinToString("\n").split("\n\n").map { it.lines() }

rules.forEach { rule ->
  val (comesBefore, comesAfter) = rule.split("|")
  rulesMap
    .getOrPut(comesBefore.toInt()) {
      mutableListOf() // empty list if new entry
    }.add(comesAfter.toInt())
}

fun updateRulesToCheckFor(update: List<Int>): Unit {
  update.forEach { num ->
    if (!rulesToCheckFor.contains(num)) {
      rulesToCheckFor.add(num)
    }
  }
}

fun updateIsValid(update: List<Int>): Boolean {
  update.forEachIndexed { i, num ->
    val applicableRules = rulesMap[num]
    if (applicableRules != null) {
      applicableRules.forEach { rule ->
        val proceedingNumIndex: Int = update.indexOf(rule)
        if (
          proceedingNumIndex != -1 &&
          proceedingNumIndex < i
        ) {
          return false
        }
      }
    }
  }
  return true
}

fun addNumInOrder(sortedList: MutableList<Int>, insertNum: Int): Unit {
  var insertIndex: Int = 0
  val applicableRules = rulesMap[insertNum]
  if (applicableRules != null) {
    while (
      insertIndex < sortedList.size &&
      applicableRules.contains(sortedList[insertIndex])
    ) {
      insertIndex += 1
    }
  } // interestingly, creates the list in reverse order, but middle number is still the same '\(")/'
  sortedList.add(insertIndex, insertNum)
  return
}
fun sortAndGetMiddleNumber(update: List<Int>): Int {
  val sortedList: MutableList<Int> = mutableListOf()
  update.forEach { num ->
    addNumInOrder(sortedList, num)
  }
  return sortedList[sortedList.size / 2]
}

var sumOfValidUpdatesMiddleNumbers: Int = 0
var sumOfInvalidUpdatesMiddleNumbers: Int = 0

updates.forEach { update ->
  val formattedUpdate = update.split(",").map { num -> num.toInt()}
  updateRulesToCheckFor(formattedUpdate)
  if (updateIsValid(formattedUpdate)) {
    sumOfValidUpdatesMiddleNumbers += formattedUpdate[formattedUpdate.size / 2]
  } else {
    sumOfInvalidUpdatesMiddleNumbers += sortAndGetMiddleNumber(formattedUpdate)
  }
}

 println("PART 1: $sumOfValidUpdatesMiddleNumbers")
 println("PART 2: $sumOfInvalidUpdatesMiddleNumbers")
