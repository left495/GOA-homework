# codewars 1

# def break_chocolate(n, m):
#     if n==0 or m==0:   
#         return 0
#     else:
#         return n*m-1
    
# codewars 2

# def is_anagram(test, original):
#     test=test.lower()
#     original=original.lower()
#     test=sorted(test)
#     original=sorted(original)
    
#     if test==original:
#         return True
#     else:
#         return False
        
# codewars 3

# def last_survivor(letters, coords): 
#     j=[]
#     for k in letters:
#         j.append(k)
#     for i in coords:
#         j.pop(i)
#     return j[0]

# codewars 4

# def over_the_road(address, n):
#     dd=2*n+1
#     da=dd-address
    
#     return da

# codewars 5

# def caffeine_buzz(n):
#     dd=''
#     if n%3==0 and n%4==0:
#         dd='Coffee'
#     elif n%3==0:
#         dd='Java'
#     else:
#         return "mocha_missing!"
    
#     if n%2==0:
#         dd+='Script'
#     else:
#         return dd
#     return dd