import java.io.File
import util.*

typealias Coordinates = util.Coordinates
typealias TraversalCoordinates = util.TraversalCoordinates
typealias Directions = util.Directions

val filePath = "./day8/example.txt"

val map: MutableList<MutableList<TraversalCoordinates>> = mutableListOf()

File(filePath)
  .readLines()
  .forEachIndexed { yIndex, line ->
    val rowOfCoords: MutableList<TraversalCoordinates> = line.mapIndexed { xIndex, char ->
      TraversalCoordinates(Coordinates(yIndex, xIndex), false, char)
    }.toMutableList()
    map.add(rowOfCoords)
  }

fun markFriendsAntinodes(friends: MutableList<Coordinates>) {
  for (i in 0 until friends.size) {
    for (j in i until friends.size) {
      if (i != j) { // dont need to compare friend against himself, just others
        println("Comparing indices $i, $j")
      }
    }
  }
}

fun findFriends(originalFriend: Coordinates): MutableList<Coordinates> {
  val typeOfFriend = map[originalFriend.y][originalFriend.x].hereThing
  val friendsList: MutableList<Coordinates> = mutableListOf()
  for (y in map.indices) {
    for (x in map[y].indices) {
      if (map[y][x].hereThing == typeOfFriend) {
        friendsList.add(Coordinates(y, x))
        map[y][x].visited = true
      }
    }
  }
  return friendsList
}

fun markAntinodes() {
  for (y in map.indices) {
    for (x in map[y].indices) {
      if (
        map[y][x].hereThing != '.' &&
        !map[y][x].visited
      ) {
        val friends: MutableList<Coordinates> = findFriends(Coordinates(y, x))
        markFriendsAntinodes(friends)
      }
    }
  }
}
println("BEFORE")
map.forEach { col ->
  println(col.map { it.hereThing })
}
markAntinodes()
println("AFTER")
map.forEach { col ->
  println(col.map { it.hereThing })
}

val antinodeCount: Int = map.fold(0) { ySum, col ->
  ySum + col.fold(0) { xSum, it ->
    xSum + if (it.hereThing == '#') 1 else 0
  }
}

 println("PART 1: $antinodeCount")
// println("PART 2: $sumOfInvalidUpdatesMiddleNumbers")
