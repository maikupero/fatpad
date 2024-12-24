import java.io.File
import util.*
typealias Coordinates = util.Coordinates
typealias TraversalCoordinates = util.TraversalCoordinates
typealias Directions = util.Directions

val filePath = "./day8/data.txt"

typealias AntennaMap = MutableMap<Any, MutableList<Coordinates>>
val grid: MutableList<MutableList<TraversalCoordinates>> = mutableListOf()
val antennaMap: AntennaMap = mutableMapOf()

File(filePath)
  .readLines()
  .forEachIndexed { yIndex, line ->
    val rowOfCoords: MutableList<TraversalCoordinates> = line.mapIndexed { xIndex, char ->
      TraversalCoordinates(Coordinates(yIndex, xIndex), false, char)
    }.toMutableList()
    grid.add(rowOfCoords)
  }

fun findAntennas() {
  for (y in grid.indices) {
    for (x in grid[y].indices) {
      if (grid[y][x].hereThing != '.') {
        val antennaType = grid[y][x].hereThing
        val friendsList = antennaMap.getOrDefault(antennaType, mutableListOf())
        friendsList.add(Coordinates(y, x))
        antennaMap[antennaType] = friendsList
      }
    }
  }
}

fun markAntinodes() {
  for (antennaType in antennaMap) {
    for (i in 0 until antennaType.value.size) {
      for (j in i+1 until antennaType.value.size) {
        val first = antennaType.value[i]
        val second = antennaType.value[j]
        val xDiff = second.x - first.x
        val yDiff = second.y - first.y
        val newNode1 = Coordinates(first.y - yDiff, first.x - xDiff)
        val newNode2 = Coordinates(second.y + yDiff, second.x + xDiff)
        if (coordIsValid(newNode1, grid.size, grid[0].size)) {
          grid[newNode1.y][newNode1.x].visited = true
        }
        if (coordIsValid(newNode2, grid.size, grid[0].size)) {
          grid[newNode2.y][newNode2.x].visited = true
        }
      }
    }
  }
}

findAntennas()
markAntinodes()
val antinodeCount: Int = grid.fold(0) { ySum, col ->
  ySum + col.fold(0) { xSum, it ->
    xSum + if (it.visited) 1 else 0
  }
}
println("PART 1: $antinodeCount")

fun markAntinodeLines() {
  for (antennaType in antennaMap) {
    for (i in 0 until antennaType.value.size) {
      for (j in i+1 until antennaType.value.size) {
        val first = antennaType.value[i]
        val second = antennaType.value[j]
        val xDiff = second.x - first.x
        val yDiff = second.y - first.y
        var newNode1 = Coordinates(first.y, first.x)
        var newNode2 = Coordinates(second.y, second.x)
        while (coordIsValid(newNode1, grid.size, grid[0].size)) {
          grid[newNode1.y][newNode1.x].visited = true
          newNode1 = Coordinates(newNode1.y - yDiff, newNode1.x - xDiff)
        }
        while (coordIsValid(newNode2, grid.size, grid[0].size)) {
          grid[newNode2.y][newNode2.x].visited = true
          newNode2 = Coordinates(newNode2.y + yDiff, newNode2.x + xDiff)
        }
      }
    }
  }
}

markAntinodeLines()
val antinodeLinesCount: Int = grid.fold(0) { ySum, col ->
  ySum + col.fold(0) { xSum, it ->
    xSum + if (it.visited) 1 else 0
  }
}
println("PART 2: $antinodeLinesCount")

