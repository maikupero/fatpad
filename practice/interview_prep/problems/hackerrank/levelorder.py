# https://www.hackerrank.com/challenges/tree-level-order-traversal

def levelOrder(root):
    stack = [root]
    while stack:
        queue = []
        for node in stack:
            print(node.info, end=' ')
            if node.left:
                queue.append(node.left)
            if node.right: 
                queue.append(node.right)
        stack = queue.copy()
