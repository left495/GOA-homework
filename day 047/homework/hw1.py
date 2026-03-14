# codewars 1
# def get_middle(s):
    # if len(s)==1:
    #     return s
    # elif len(s)%2==0:
    #     dd=len(s)//2
    #     return s[dd-1]+s[dd]
    # else:
    #     dd=len(s)//2
    #     return s[dd]

 # codewars 2

# def is_anagram(test, original):
#     tested=test.lower()
#     originaled=original.lower()
#     for i in tested:
#         if len(tested)!=len(originaled):
#             return False
#         elif i in originaled:
#             continue
#         elif tested==originaled:
#             return True
#         else:
#             return False
#     return True

# codewars 3

# def maskify(cc):
    # if len(cc)<=4:
    #     return cc
    # dd=''
    # for i in range(len(cc)-4):
    #     dd+='#'
    # for j in range(len(cc)-4,len(cc)):
    #     dd+=cc[j]
    # return dd

# codewars 4

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

# codewars 5

# def create_phone_number(n):
    # new=[]
    # for i in n:
    #     new.append(str(i))
        
    # return f"({new[0]}{new[1]}{new[2]}) {new[3]}{new[4]}{new[5]}-{new[6]}{new[7]}{new[8]}{new[9]}"
        
  
# codewars 6

# def get_count(sentence):
    # sum=0
    # for i in sentence:
    #     if i in 'aeiou':
    #         sum+=1
    # return sum