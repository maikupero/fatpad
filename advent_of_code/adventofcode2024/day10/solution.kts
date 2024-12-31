import java.io.File
import util.*
typealias Coordinates = util.Coordinates

data class MapCoordinates(
  val coord: util.Coordinates,
  val height: Int, // not allowed to type this as Any, thanks kotlin, so . will be 10.
  var score: Int,
  var rating: Int
)

// A hiking trail is any path that starts at height 0, ends at height 9, and always increases by a height of exactly 1 at each step.
// Hiking trails never include diagonal steps, only adjacent.
// A trailhead is any position that starts one or more hiking trails - here, these positions will always have height 0.
// A trailhead's score is the number of 9-height positions reachable from that trailhead via a hiking trail.

// 1. find 9s. cause we can do it backwards and that's cool.
// 2. recursively trace all paths from 9s to 0s (trailheads)
// 3. that is, check all 8s for all 7s. from each 7, check for all 6s.
// 4. if ever reaching a 0, return and update the trailhead's score.

val filePath = "./day10/data.txt"
val grid: MutableList<MutableList<MapCoordinates>> = mutableListOf()
val peaks: MutableList<Coordinates> = mutableListOf()

File(filePath)
  .readLines()
  .forEachIndexed { y, row ->
    val col: MutableList<MapCoordinates> = mutableListOf()
    row.forEachIndexed { x, height ->
      val heightInt = if (height == '.') 10 else height.digitToInt() // for interpreting example unpassable terrain
      col.add(MapCoordinates(
        Coordinates(y, x),
        heightInt,
        0,
        0
      ))
      if (height == '9') {
        peaks.add(Coordinates(y, x))
      }
    }
    grid.add(col)
  }

fun descendFrom(
  start: Coordinates,
  foundTrailheads: MutableList<Coordinates>
) {
  val current = grid[start.y][start.x]
  if (current.height == 0) {
    current.rating++
    if (!foundTrailheads.contains(current.coord)) {
      current.score++
      foundTrailheads.add(current.coord)
    }
    return
  }
  val adjacentCoords: Collection<Coordinates> = getSurroundingLegalCoords(
    start,
    grid.size,
    grid[0].size
  )
  adjacentCoords.forEach { adjacentCoord ->
    val adjacent = grid[adjacentCoord.y][adjacentCoord.x]
    if (adjacent.height == current.height - 1) {
      descendFrom(adjacentCoord, foundTrailheads)
    }
  }
}

peaks.forEach { peak ->
  descendFrom(peak, mutableListOf())
}

val trailheadSum = grid.fold(0) { rowSum, row ->
  rowSum + row.fold(0) { scoreSum, position ->
    if (position.height == 0) scoreSum + position.score else scoreSum
  }
}

val trailheadRating = grid.fold(0) { rowRating, row ->
  rowRating + row.fold(0) { ratingSum, position ->
    if (position.height == 0) ratingSum + position.rating else ratingSum
  }
}

println("PART 1: $trailheadSum")
println("PART 2: $trailheadRating")