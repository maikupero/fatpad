import java.io.File

val filePath = "./day9/data.txt"

val cleanDisk: MutableList<Any> = mutableListOf()
var fileId: Long = 0

File(filePath)
  .readLines()
  .forEach { line ->
    line.forEachIndexed { index, char ->
      if (index % 2 == 0) {
        for (i in 0 until char - '0') {
          cleanDisk.add(fileId)
        }
        fileId++
      } else {
        for (i in 0 until char - '0') {
          cleanDisk.add("EMPTY")
        }
      }
    }
  }

val diskForFragmentation = cleanDisk.toMutableList()
val diskForCompacting = cleanDisk.toMutableList()

// Part 1 - Fragmentation
var fragmentLeft = 0
var fragmentRight = diskForFragmentation.lastIndex
while (fragmentLeft < fragmentRight) {
  while (diskForFragmentation[fragmentLeft] != "EMPTY") {
    fragmentLeft++
  }
  while (diskForFragmentation[fragmentRight] == "EMPTY") {
    fragmentRight--
  }
  if (fragmentLeft < fragmentRight) { // just to make sure
    diskForFragmentation[fragmentLeft] = diskForFragmentation[fragmentRight]
    diskForFragmentation[fragmentRight] = "EMPTY"
  }
}

val fragmentationChecksum = diskForFragmentation
  .slice(0 until fragmentLeft)
  .foldIndexed(0L) { position, checksum, file ->
    checksum + (file as Long * position)
  }


// Part 2 - Compacting
val listOfGaps: MutableList<Pair<Int, Int>> = mutableListOf()
var index = 0
while (index < diskForCompacting.size) {
  while (index < diskForCompacting.size && diskForCompacting[index] != "EMPTY") {
    index++
  }
  val startIdx = index
  while (index < diskForCompacting.size && diskForCompacting[index] == "EMPTY") {
    index++
  }
  val gapSize = index - startIdx
  if (gapSize > 0) {
    listOfGaps.add(Pair(startIdx, gapSize))
  }
}

var r1 = diskForCompacting.lastIndex
var r2 = diskForCompacting.lastIndex

while (listOfGaps[0].first < r1) {
  while (diskForCompacting[r1] == "EMPTY") {
    r1--
  }
  r2 = r1
  while (
    diskForCompacting[r2 - 1] == diskForCompacting[r1] &&
    diskForCompacting[r2 - 1] != "EMPTY"
  ) {
    r2--
  }
  val fileSlice = diskForCompacting.slice(r2..r1)
  var listIndex = 0
  for (gap in listOfGaps) { // because kotlin doesnt like break in forEachIndexed..
    val gapStartIdx = gap.first
    val gapSize = gap.second
    if (
      gapStartIdx + gapSize <= r2 &&
      gapSize >= fileSlice.size
    ) {
      val remainingGap = gapSize - fileSlice.size
      listOfGaps.removeAt(listIndex)
      if (remainingGap > 0) {
        listOfGaps.add(listIndex, Pair(gapStartIdx + fileSlice.size, remainingGap))
      }
      for (r in r2..r1) {
        diskForCompacting[r] = "EMPTY" // replace right with emptys
      }
      fileSlice.forEachIndexed { index, file ->
        diskForCompacting[index + gapStartIdx] = file // replace left with files
      }
      break
    }
    listIndex++
  }
  r1 = r2 - 1
}

val compactingChecksum = diskForCompacting
  .foldIndexed(0L) { position, checksum, file ->
    if (file != "EMPTY") checksum + (file as Long * position) else checksum
  }

println("PART 1: $fragmentationChecksum")
println("PART 2: $compactingChecksum")