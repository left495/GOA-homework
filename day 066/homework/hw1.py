# codewars 2

# def palindrome_chain_length(n):
#     di=str(n)
#     i=0
#     while True:
#         da=di[::-1]

#         if di==da:
#             return i
#         else:
#             di=str(int(di)+int(da))
#         i+=1
    
# codewars 3

# def nth_smallest(arr, pos):
#     dd=sorted(arr)
#     for i in range(len(dd)):
#         if i+1==pos:
#             return dd[i]

# codewars 4

# def solution(start, finish):  
#     d=0
#     i=start
#     while i<finish:
#         if i+3>finish:
#             i+=1
#         else:
#               i+=3
#         d+=1
        
#     return d
        
# codewars 5

# def incrementer(nums):
#     res=[]
#     for i in range(len(nums)):
#         dd=i+1+nums[i]

#         res.append(int(str(dd)[-1]))
        
#     return res

# codewars 7

# def largest(n, xs):
#     if n==0:
#         return []
#     dd=sorted(xs)
    
#     return dd[-n:]
            