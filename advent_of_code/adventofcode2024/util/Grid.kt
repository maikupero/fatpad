package util

data class Coordinates(val y: Int, val x: Int)
data class TraversalCoordinates(
  val coord: Coordinates,
  var visited: Boolean,
  var hereThing: Any
)
data class PathNode(
  val coord: Coordinates,
  val direction: Directions
)
data class PathHistory(
  val pathNodes: MutableList<PathNode> = mutableListOf()
)

enum class Directions { U, UR, R, DR, D, DL, L, UL }

/** Sets facing 90• leftwards of current direction */
fun turnLeft(direction: Directions): Directions {
  return when (direction) {
    Directions.U -> Directions.L
    Directions.L -> Directions.D
    Directions.D -> Directions.R
    Directions.R -> Directions.U
    else -> throw IllegalArgumentException("Invalid direciton: $direction")
  }
}
/** Sets facing 90• rightwards of current direction */
fun turnRight(direction: Directions): Directions {
  return when (direction) {
    Directions.U -> Directions.R
    Directions.R -> Directions.D
    Directions.D -> Directions.L
    Directions.L -> Directions.U
    else -> throw IllegalArgumentException("Invalid direction: $direction")
  }
}

/** Returns the next coordinate in a given direction. */
fun getNextCoord(coord: Coordinates, direction: Directions): Coordinates {
  return when (direction) {
    Directions.U -> Coordinates(coord.y - 1, coord.x)
    Directions.UR -> Coordinates(coord.y - 1, coord.x + 1)
    Directions.R -> Coordinates(coord.y, coord.x + 1)
    Directions.DR -> Coordinates(coord.y + 1, coord.x + 1)
    Directions.D -> Coordinates(coord.y + 1, coord.x)
    Directions.DL -> Coordinates(coord.y + 1, coord.x - 1)
    Directions.L -> Coordinates(coord.y, coord.x - 1)
    Directions.UL -> Coordinates(coord.y - 1, coord.x - 1)
    else -> throw IllegalArgumentException("Invalid direciton: $direction")
  }
}

/** Returns the surrounding coordinates of a given point. */

fun getSurroundingCoords(
  coord: Coordinates,
  includeDiagonals: Boolean = false
): Collection<Coordinates> {
  if (!includeDiagonals) {
    return listOf(
      Coordinates(coord.y - 1, coord.x),
      Coordinates(coord.y, coord.x + 1),
      Coordinates(coord.y + 1, coord.x),
      Coordinates(coord.y, coord.x - 1)
    )
  }
  return listOf(
    Coordinates(coord.y - 1, coord.x),
    Coordinates(coord.y - 1, coord.x + 1),
    Coordinates(coord.y, coord.x + 1),
    Coordinates(coord.y + 1, coord.x + 1),
    Coordinates(coord.y + 1, coord.x),
    Coordinates(coord.y + 1, coord.x - 1),
    Coordinates(coord.y, coord.x - 1),
    Coordinates(coord.y - 1, coord.x - 1)
  )
}

/** Determines if the coordinate is within grid bounds. */
fun coordIsValid(
  coord: Coordinates,
  gridYSize: Int,
  gridXSize: Int
): Boolean {
  return (
    coord.y >= 0 && coord.y < gridYSize &&
    coord.x >= 0 && coord.x < gridXSize
  )
}

/** Determines the direction between two coordinates. */
fun getDirectionFromCoords(
  prev: Coordinates,
  next: Coordinates
): Directions {
  return when {
    next.y < prev.y && next.x == prev.x -> Directions.U
    next.y < prev.y && next.x > prev.x -> Directions.UR
    next.y == prev.y && next.x > prev.x -> Directions.R
    next.y > prev.y && next.x > prev.x -> Directions.DR
    next.y > prev.y && next.x == prev.x -> Directions.D
    next.y > prev.y && next.x < prev.x -> Directions.DL
    next.y == prev.y && next.x < prev.x -> Directions.L
    next.y < prev.y && next.x < prev.x -> Directions.UL
    else -> throw IllegalArgumentException("Invalid coordinates: $prev -> $next")
  }
}