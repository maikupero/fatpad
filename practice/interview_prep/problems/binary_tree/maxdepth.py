# https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree

# Seems like a simple traversal, keep track of how far from root node we get,

def heightR(root):
    if not root:
        return 0
    return max(heightR(root.left), heightR(root.right)) + 1

# Or in hackerrank's case, if not root: return -1

# Recursively: return 0 basecase, or the max of next levels + 1.

# Iteratively: make a list of all nodes at level. 
# add to queue all the nodes for the next level.
# break condition is on having nodes (from the next level down) in queue. 

from collections import deque

def heightI(root) -> int:
    depth = 0
    queue = [root] if root else []
    while queue:
        depth += 1
        for i in range(len(queue)):
            cur = queue.pop(0)
            if cur.left:
                queue.append(cur.left)
            if cur.right:
                queue.append(cur.right)
            
    return depth