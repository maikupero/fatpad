import heapq

def x_largest(nums, x):
  if len(nums) < x:
    return "NOPE"

  heap = [num for num in nums[:x]]
  heapq.heapify(heap)

  for i in range(x, len(nums)):
    if nums[i] > heap[0]:
        heapq.heappop(heap)
        heapq.heappush(heap, nums[i])
        heapq.heapify(heap)
    print(heap)


  return heap[0]

print(x_largest([3,1,5,6,2,7], 3))