import java.io.File
import kotlin.math.abs

val filePath = "./data.txt"
    
val reportsList = File(filePath)
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
  var canDampen: Boolean = useDampener
  var lastJump: Int? = null

  for (i in 0..report.lastIndex - 1) {
    val currJump: Int = report[i + 1] - report[i]

    // ignore lastJump checks for the first jump
    if (lastJump != null) {
      if ( 
        lastJump <= 0 && currJump >= 0 || // change +/- direction jump
        lastJump >= 0 && currJump <= 0 
      ) {
        if (canDampen == true) {
          canDampen = false 
          continue // get a free pass on currJump checks, dont reset lastJump (effectively remove a number)
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
      if (canDampen == true) {
        canDampen = false
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