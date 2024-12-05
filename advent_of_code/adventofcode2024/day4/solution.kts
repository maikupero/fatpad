import java.io.File
import kotlin.math.abs

val filePath = "./data.txt"

data class Coordinates(val y: Int, val x: Int)
enum class Directions { U, UR, R, DR, D, DL, L, UL }

data class Heading (
  val coord: Coordinates,
  val direction: Directions?, 
  val currLetter: Char
)

val wordSearch = File(filePath)
  .readLines()
  .map { it.trim().toList() }

var xmasCount: Int = 0
var crossMasCount: Int = 0

var crossMasCorners: Set<Char> = setOf('M','S')

fun getNextXmasLetter(currLetter: Char): Char? {
  return when (currLetter) {
    'X' -> 'M'
    'M' -> 'A'
    'A' -> 'S'
    else -> null
  }
}

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
  }
}

fun getSurroundingCoords(coord: Coordinates, includeDiagonals: Boolean = false): Collection<Coordinates> {
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

fun getDirectionFromCoords(prev: Coordinates, next: Coordinates): Directions {
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

fun coordIsValid(coord: Coordinates): Boolean {
  return (
    coord.x >= 0 && coord.x < wordSearch[0].size &&
    coord.y >= 0 && coord.y < wordSearch.size
  )
}

fun findNextHeading(heading: Heading): Heading? {
  val nextLetter: Char? = getNextXmasLetter(heading.currLetter)
  if (nextLetter !== null) {
    val nextCoords: Collection<Coordinates> = if (heading.direction != null)
      listOf(getNextCoord(heading.coord, heading.direction))
      else getSurroundingCoords(heading.coord, true)
    for (coord in nextCoords) {
      if (
        coordIsValid(coord) == true &&
        wordSearch[coord.y][coord.x] == nextLetter
      ) {
        val direction: Directions = heading.direction 
          ?: getDirectionFromCoords(heading.coord, coord)
        searchForXmas(Heading(
          coord,
          direction,
          nextLetter,
        ))
      }
    }
  }
  return null
}

fun searchForXmas(heading: Heading) {
  if (heading.currLetter == 'S') {
    xmasCount += 1
    return
  }
  findNextHeading(heading)
}

fun searchForCrossMas(coord: Coordinates) {

  val middleCoord: Coordinates = getNextCoord(coord, Directions.DR)

  if (wordSearch[middleCoord.y][middleCoord.x] == 'A') {

    val (urCoord, drCoord, dlCoord) = listOf(
      getNextCoord(middleCoord, Directions.UR),
      getNextCoord(middleCoord, Directions.DR),
      getNextCoord(middleCoord, Directions.DL)
    )
    val (startLetter, urLetter, drLetter, dlLetter) = listOf(
      wordSearch[coord.y][coord.x],
      wordSearch[urCoord.y][urCoord.x],
      wordSearch[drCoord.y][drCoord.x],
      wordSearch[dlCoord.y][dlCoord.x]
    )

    if (
      startLetter in crossMasCorners && drLetter in crossMasCorners &&
      startLetter != drLetter &&
      urLetter in crossMasCorners && dlLetter in crossMasCorners &&
      urLetter != dlLetter
    ) {
      crossMasCount += 1
    }
  }
}

for (y in 0 until wordSearch.size) {
  for (x in 0 until wordSearch[0].size) {
    if (wordSearch[y][x] == 'X') {
      val startHeading: Heading = Heading(
        Coordinates(y, x), 
        null, 
        'X'
      )
      searchForXmas(startHeading)
    }
    if (
      x < wordSearch[0].size - 2 &&
      y < wordSearch.size - 2 && // specific X shape
      wordSearch[y][x] in crossMasCorners // we will never stumble into the A first 
    ) { 
      searchForCrossMas(Coordinates(y, x))
    }
  }
}

println("PART 1: $xmasCount")
println("PART 2: $crossMasCount")