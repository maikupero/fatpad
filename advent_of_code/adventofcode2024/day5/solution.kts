import java.io.File

typealias Coordinates = util.Coordinates
typealias Directions = util.Directions

val filePath = "./day5/data.txt"

val wordSearch = File(filePath)
  .readLines()
  .map { it.trim().toList() }

println("PART 1: $whoKnows")
println("PART 2: $definitelyWhoKnows")
