# codewars 1

# def solution(number):
#     sum=0
#     if number<=0:
#         return 0
#     for i in range(number):
#         if i%3==0 or i%5==0:
#             sum+=i
#     return sum

# codewars 2

# def check_exam(arr1,arr2):
#     score=0
#     for i in range(len(arr1)):
#         if arr1[i]==arr2[i]:
#             score+=4
#         elif arr2[i]=='':
#             continue
#         else:
#             score-=1
#     if score<0:
#         return 0
#     return score
  

# codewars 3

# def high_and_low(num):
#     dd=num.split()
#     di=[]   
#     for i in dd:
#         da=int(i)
#         di.append(da)
        
#     u=str(max(di))
#     a=str(min(di))

#     return u +' '+ a

# codewars 4

# def find_short(s):
    # dd=s.split()
    # da=len(dd[0])
    
    # for i in dd:
    #     if len(i)<da:
    #         da=len(i)
        
    # return da

# codewars 5

# def remove(s):

#     da=s[-1]

#     listed=[]
#     for i in s:
#         if i in ';:.,?!':
#             continue
#         else:
#             listed.append(i)
#     last=''
#     for i in listed:
#         last+=i
#     if da in '.,;:!?':
#         return last+da
#     else:
#         return last
        

# codewars 7

# def points(games):
#     fin=0
#     for i in games:
#         if int(i[0])>int(i[2]):
#             fin+=3
#         elif int(i[0])==int(i[2]):
#             fin+=1
#         else:
#             continue
#     return fin