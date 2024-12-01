import java.io.File
import kotlin.math.abs

val filePath = "./data.txt"

val list1: MutableList<Int> = mutableListOf()
val list2: MutableList<Int> = mutableListOf()
// Part 2 stuff
val similarityScoreMap: MutableMap<Int, Int> = mutableMapOf()

    
File(filePath)
  .readLines()
  .forEach { line -> 
    val formattedLine = line.trim().split("\\s+".toRegex())
    val locationIds = formattedLine.map { it.toInt() }
    list1.add(locationIds[0])
    list2.add(locationIds[1])
    // Part 2 stuff
    similarityScoreMap[locationIds[1]] = similarityScoreMap.getOrDefault(locationIds[1], 0) + 1
  }
list1.sort()
list2.sort()

val distanceDifferences = list1.zip(list2)
  .map{(a, b) -> abs(a - b)}
  .sum()

println("PART 1: $distanceDifferences")

// Part 2 stuff
val similarityScore = list1.fold(0) { sum, leftNumber -> 
    val matchInRightList = similarityScoreMap[leftNumber]
    sum + (
      if (matchInRightList != null) 
        leftNumber * matchInRightList 
        else 0
    )
  }
println("PART 2: $similarityScore")

