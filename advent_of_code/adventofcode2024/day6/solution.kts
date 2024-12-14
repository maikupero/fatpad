import java.io.File
import util.*

typealias Coordinates = util.Coordinates
typealias TraversalCoordinates = util.TraversalCoordinates
typealias Directions = util.Directions
typealias PathNode = util.PathNode

val filePath = "./day6/data.txt"

val map: MutableList<MutableList<TraversalCoordinates>> = mutableListOf()
lateinit var guardStartCoords: Coordinates

File(filePath)
  .readLines()
  .forEachIndexed { yIndex, line ->
    val rowOfCoords: MutableList<TraversalCoordinates> = line.mapIndexed { xIndex, char ->
      if (char == '^') {
        guardStartCoords = Coordinates(yIndex, xIndex)
      }
      TraversalCoordinates(Coordinates(yIndex, xIndex), false, char)
    }.toMutableList()
    map.add(rowOfCoords)
  }

// merry christmas
// 三台

fun turn(curr: Coordinates, facing: Directions): Directions {
  // calling this when we reach an obstacle
  var turnCount = 0
  var endFacing = facing
  var next = getNextCoord(curr, endFacing)
  while (map[next.y][next.x].hereThing == '#' && turnCount < 4) {
    endFacing = turnRight(endFacing)
    next = getNextCoord(curr, endFacing)
    turnCount += 1
  }
  return endFacing
}

fun goStraight(start: Coordinates, direction: Directions): Coordinates? {
  var end = start.copy()
  var next = getNextCoord(start, direction)
  var outOfBounds: Boolean = !coordIsValid(next, map.size, map[0].size)
  while (
    !outOfBounds &&
    map[next.y][next.x].hereThing != '#'
  ) {
    end = next
    next = getNextCoord(next, direction)
    outOfBounds = !coordIsValid(next, map.size, map[0].size)
  }
  return if (outOfBounds) null else end
}

fun loopsWithImaginedObstacle(
  start: TraversalCoordinates,
  direction: Directions,
  turningPointsMap: MutableMap<Coordinates, Int>
): Boolean {
  var curr: Coordinates? = start.coord.copy()
  var currFacing: Directions = direction
  while (true) {

    curr = goStraight(curr!!, currFacing) // travel till obstacle or out of bounds
    if (curr == null) {
      return false // out of bounds :)
    }

    val previousFacing = currFacing
    currFacing = turn(curr!!, currFacing)
    if (currFacing == previousFacing) {
      return true // trapped! i guess that's a loop
    }

    val currentCount = turningPointsMap.getOrDefault(curr, 0)
    turningPointsMap[curr] = currentCount + 1
    if (turningPointsMap[curr]!! > 2) {
      return true // i cant imagine a non-loop that goes through the same turn 3 times
    }
  }
}

fun traverseSlow(start: TraversalCoordinates, direction: Directions) {
  var curr = start.coord.copy()
  var currFacing = direction
  var next = getNextCoord(curr, currFacing)
  while (coordIsValid(next, map.size, map[0].size)) {
    if (map[next.y][next.x].hereThing == '#') {
      val previousFacing = currFacing
      currFacing = turn(curr, currFacing)
      if (currFacing == previousFacing) {
        return // trapped
      }
      next = getNextCoord(curr, currFacing)
    }
    curr = next
    map[curr.y][curr.x].visited = true
    next = getNextCoord(curr, currFacing)
  }
}

traverseSlow(map[guardStartCoords.y][guardStartCoords.x], Directions.U)

var visitedSpaces: Int = 0
val path = mutableSetOf<Coordinates>()

map.forEach { row ->
  row.forEach { cell ->
    if (cell.visited) {
      visitedSpaces++
      path.add(cell.coord)
    }
  }
}

var loopCreationSpots: Int = 0
path.forEach { coord ->
  val tempHereThing = map[coord.y][coord.x].hereThing
  val turningPointsMap = mutableMapOf<Coordinates, Int>()
  map[coord.y][coord.x].hereThing = '#'
  if (
    loopsWithImaginedObstacle(
      map[guardStartCoords.y][guardStartCoords.x],
      Directions.U,
      turningPointsMap
    )
  ) {
    loopCreationSpots++
  }
  map[coord.y][coord.x].hereThing = tempHereThing
}

println("PART 1: $visitedSpaces")
println("PART 2: ${loopCreationSpots}")
