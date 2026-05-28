# codewars 1

# def spacey(array):
#     i=''
#     n=[]
#     for d in array:
#         i+=d
#         n.append(i)
        
#     return n

# codewars 2

# def cube_odd(arr):
    # dd=[]
    # last=0
    # for i in arr:
    #     if type(i)!=int:
    #         return None
    #     elif i%2!=0:
    #         dd.append(i)
    # for j in dd:
    #     last+=j**3
        
    # return last

# codewars 3

# def solve(s):
#     upp=0
#     low=0
#     num=0
#     spec=0
#     for i in s:
#         if i in 'QAZXSWEDCVFRTGBNHYUJMKIOLP':
#             upp+=1
#         elif i in 'qazxswedcvfrtgbnhyujmkiolp':
#             low+=1
#         elif i in '1234567890':
#             num+=1
#         else:
#             spec+=1
    
#     last=[upp,low,num,spec]
#     return last

# codewars 4

# class List:
#     def remove_(self, integer_list, values_list):
#         new=[]
#         for i in integer_list:
#             if i not in values_list:
#                 new.append(i)
#         return new

# codewars 5

# def solution(value):
#     dd = str(value)
#     result = "Value is "

#     for i in range(5 - len(dd)):
#         result += "0"

#     result += dd

#     return result

# codewars 6




# codewars 7

# def last_survivor(letters, coords): 
#     j=[]
#     for k in letters:
#         j.append(k)
#     for i in coords:
#         j.pop(i)
#     return j[0]