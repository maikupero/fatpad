When you type something as a `Collection` in Kotlin, you are indeed using it as an **umbrella type** for all kinds of collections that fall under the `Collection` interface. This includes types like `List` and `Set`, but **not `Map`** because `Map` is not a `Collection`. It is a separate interface in Kotlin.

### Key Points about `Collection` in Kotlin
- **`Collection`** is a common interface for `List` and `Set`.
    - It does not include `Map`, as `Map` is not technically a collection of elements but rather a collection of key-value pairs.
- When you declare something as a `Collection`, you lose the specificity of whether it’s a `List`, `Set`, or a subtype of `Collection`. For example, operations unique to `List` (like indexing) or `Set` (like uniqueness guarantees) are not directly accessible.

### Why Explicit Types Are Often Better
You're right that Kotlin generally emphasizes explicit typing, and for good reason:
1. **Clarity**: Explicit typing makes it easier to understand how a collection behaves. For example:
    - A `List` implies ordered elements and indexing capabilities.
    - A `Set` implies uniqueness of elements.
2. **Access to Specific Methods**: Explicitly typing as a `List` or `Set` gives you access to their unique methods, such as `get(index)` for `List` or `containsAll` for `Set`.

### When to Use `Collection`
Typing something as a `Collection` makes sense when:
1. You are writing a function or API that works on multiple collection types (e.g., both `List` and `Set`).
2. You do not need methods specific to `List` or `Set`.

For example:
```kotlin
fun sumAllElements(collection: Collection<Int>): Int {
    return collection.sum()
}

// Works with both:
sumAllElements(listOf(1, 2, 3)) // List
sumAllElements(setOf(1, 2, 3))  // Set
```

### Explicit Typing for Practical Use
In most real-world cases, it's better to use specific types like `List` or `Set` instead of `Collection` because:
1. It ensures only the desired type is passed.
2. It makes code easier to understand.
3. It avoids accidental type mismatches.

### `Map` Is a Separate Case
`Map` is not part of the `Collection` interface because it operates on key-value pairs rather than a single sequence of elements. This separation is intentional to avoid ambiguities in its operations.

For example:
```kotlin
val map: Map<String, Int> = mapOf("a" to 1, "b" to 2)
// map.sum() // Error: Map does not inherit from Collection
```

## Conclusion
So
While `Collection` is useful in abstract or generic contexts, it’s usually better to explicitly use `List`, `Set`, or `Map` for clarity and access to specific methods. Kotlin's design indeed encourages explicit typing when the intent is specific, and that principle should guide most of your decisions.
---

## Types Under `Collection`

The `Collection` interface in Kotlin includes the following main types:

### 1. **`List`**
- **Ordered collection** of elements.
- Allows **duplicates**.
- Examples:
    - `ArrayList`
    - `LinkedList`

### 2. **`Set`**
- **Unordered collection** of **unique** elements.
- Examples:
    - `HashSet`
    - `LinkedHashSet`
    - `TreeSet`

### 3. **`Queue`**
- Represents a collection designed for **holding elements prior to processing**.
- Examples:
    - `ArrayDeque`
    - `PriorityQueue`
- Note: Though `Queue` isn't a subtype of `Collection` directly, many queue implementations in Kotlin are `Collection`s.

---

## Other Related Interfaces

In addition to `List`, `Set`, and `Map`, Kotlin provides other interfaces worth knowing:

### **1. `Iterable`**
- Represents something that can be **iterated over**.
- Superinterface of `Collection`.
- Used by all collections (`List`, `Set`, `Queue`).
- Provides the `iterator()` method and supports `for-each` loops.
- **Example**:
  ```kotlin
  val iterable: Iterable<Int> = listOf(1, 2, 3)
  for (item in iterable) {
      println(item)
  }
  ```

### **2. `Sequence`**
- Represents a **lazy collection** of elements.
- Operations like `map`, `filter`, etc., are processed **lazily**.
- Ideal for working with **large** or **infinite collections**.
- **Example**:
  ```kotlin
  val sequence: Sequence<Int> = sequenceOf(1, 2, 3).map { it * 2 }
  println(sequence.toList()) // Output: [2, 4, 6]
  ```

### **3. `Map`**
- Represents a collection of **key-value pairs**.
- Not part of `Collection` but is often grouped with collections.
- **Example**:
  ```kotlin
  val map: Map<String, Int> = mapOf("a" to 1, "b" to 2)
  ```

### **4. `MutableCollection`**
- A mutable version of `Collection`.
- Provides modification methods like `add`, `remove`.
- **Mutable Subtypes**:
    - `MutableList`
    - `MutableSet`
    - `MutableMap`

### **5. `Deque` (Double-Ended Queue)**
- A collection where elements can be **added or removed from both ends**.
- **Example**:
  ```kotlin
  val deque = ArrayDeque<Int>()
  deque.addFirst(1)
  deque.addLast(2)
  println(deque) // Output: [1, 2]
  ```

### **6. `SortedSet`**
- A subtype of `Set` where elements are **sorted** in natural or custom order.
- **Example**:
  ```kotlin
  val sortedSet = sortedSetOf(3, 1, 2)
  println(sortedSet) // Output: [1, 2, 3]
  ```

### **7. `SortedMap`**
- A subtype of `Map` where **keys are sorted** in natural or custom order.
- **Example**:
  ```kotlin
  val sortedMap = sortedMapOf(3 to "C", 1 to "A", 2 to "B")
  println(sortedMap) // Output: {1=A, 2=B, 3=C}
  ```

---

## Summary of Relationships

```plaintext
+----------------+            +-----------+
|    Iterable    |            |    Map    | (Independent of Collection)
+----------------+            +-----------+
        |
+----------------+
|    Collection  |
+----------------+
   |         |
+------+  +------+
| List |  | Set  |
+------+  +------+
   |
+------+ (e.g., MutableList, ArrayList)
```

---

## Why These Matter

1. **`Iterable`** and **`Sequence`**: For iteration patterns (eager vs. lazy).
2. **`Collection`**: Basis for most generic collection operations.
3. **`Map`**: Key-value associations.
4. By understanding these abstractions, you can:
    - Choose the **right collection type** for your use case.
    - Optimize **performance** when dealing with large datasets or specific ordering requirements.