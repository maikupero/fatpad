import java.io.File
import kotlin.math.abs
import util.*

typealias Coordinates = util.Coordinates
typealias Directions = util.Directions

val filePath = "./day4/data.txt"

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

fun findNextHeading(heading: Heading): Heading? {
  val nextLetter: Char? = getNextXmasLetter(heading.currLetter)
  if (nextLetter !== null) {
    val nextCoords: Collection<Coordinates> = if (heading.direction != null)
      listOf(getNextCoord(heading.coord, heading.direction))
      else getSurroundingCoords(heading.coord, true)
    for (coord in nextCoords) {
      if (
        coordIsValid(coord, wordSearch.size, wordSearch[0].size) == true &&
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

  val middleCoord: util.Coordinates = getNextCoord(coord, Directions.DR)

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
