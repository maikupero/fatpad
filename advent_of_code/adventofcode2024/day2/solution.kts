import java.io.File
import kotlin.math.abs

val filePath = "./data.txt"

val reportsList =
  File(filePath)
  .readLines()
  .map { line ->
    line
      .trim()
      .split("\\s+".toRegex())
      .map { it.toInt() }
  }

fun isReportSafe(
  report: List<Int>,
  useDampener: Boolean = false,
): Boolean {
  var lastJump: Int? = null
  for (i in 0..report.lastIndex - 1) {
    val currJump: Int = report[i + 1] - report[i]

    // ignore lastJump checks for the first jump
    if (lastJump != null) {
      if ( 
        lastJump <= 0 && currJump >= 0 || // change +/- direction jump
        lastJump >= 0 && currJump <= 0 
      ) {
        if (useDampener == true) {
          // rerun the whole check slicing out this index of problem candidates
          return isReportSafe(report.filterIndexed { index, value -> index != i+1 }) ||
            isReportSafe(report.filterIndexed { index, value -> index != i}) ||
            isReportSafe(report.filterIndexed { index, value -> index != i-1})
        } else {
          return false
        }           
      }
    }

    // jump checks
    if (
      abs(currJump) < 1 ||  // no jump
      abs(currJump) > 3     // big jump
    ) {
      if (useDampener == true) {
          // rerun the whole check slicing out this index of problem candidates
          return isReportSafe(report.filterIndexed { index, value -> index != i+1 }) ||
            isReportSafe(report.filterIndexed { index, value -> index != i}) 
      } else {
        return false
      }
    }

    lastJump = currJump
  }
  return true
}



val sumOfSafeReports = reportsList.fold(0) { sum, report -> 
  if (isReportSafe(report)) sum + 1 else sum
}  
val sumOfSafeReportsWithDampener = reportsList.fold(0) { sum, report -> 
  if (isReportSafe(report, true)) sum + 1 else sum
}
println("PART 1: $sumOfSafeReports")
println("PART 2: $sumOfSafeReportsWithDampener")