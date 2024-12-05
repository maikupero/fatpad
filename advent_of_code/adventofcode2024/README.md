kotlin time baby

to deal with utils, build them into the util folder
`package util` package them
`kotlinc util/Grid.kt -d util` compile them 
`kotlinc -script day4/solution.kts -cp ./util/` then run solutions with class path



Install - sdkman
had to give myself permissions to read/write from /opt/ since I have two users on this computer

---
1. Run a Kotlin Script (.kts File)
Execute it directly using the kotlin command:
```
Example: myscript.kts
println("Hello from Kotlin!")
```
`kotlin myscript.kts`

---
2. Compile and Run a Kotlin Program (.kt File)
For a regular Kotlin file (.kt), you need to compile it first using kotlinc and then run it.

Example: Main.kt
```
fun main() {
    println("Hello from Kotlin!")
}
```
Use the kotlinc command to compile the file:
`kotlinc Main.kt -include-runtime -d Main.jar`
`-include-runtime`: Includes the Kotlin runtime in the output JAR.
`-d Main.jar`: Specifies the name of the output JAR file.

Execute the compiled program using the java command:
`java -jar Main.jar`

---
3. Good idea from chatgpt
If you want to run .kt files without explicitly compiling them, you can write a small shell script or alias.
Create a Shortcut and add it to your .bashrc or .zshrc:
`alias kotrun='kotlinc -script'`
Now you can run a .kt file directly like this:
`kotrun Main.kt`