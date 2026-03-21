

# codewars 1
# def high_and_low(num):
#     dd=num.split()
#     di=[]   
#     for i in dd:
#         da=int(i)
#         di.append(da)
        
#     u=str(max(di))
#     a=str(min(di))

#     return u +' '+ a

# codewars 2
# def disemvowel(string_):
#     dd=''
#     for i in string_:
#         if i not in 'aeiouAEIOU':
#             dd+=i
#     return dd

# codewars 3
# def get_count(sentence):
#     sum=0
#     for i in sentence:
#         if i in 'aeiou':
#             sum+=1
#     return sum

# codewars4
# def square_digits(num):
#     n=''
#     li=[]
#     jj=str(num)
#     for i in jj:
#         nums=int(i)
#         li.append(nums**2)
#     for j in li:
#         dd=str(j)
#         n+=dd
#     return int(n)

# codewars5 
# def descending_order(num):
#     if len(str(num))==1:
#         return num
#     dalageba=[]
#     string_num=str(num)
#     for i in string_num:
#         dalageba.append(int(i))
#     dalagebuli=sorted(dalageba,reverse=True)
#     saboloo_string=''
#     for j in dalagebuli:
#         saboloo_string+=str(j)
#     saboloo=int(saboloo_string)

#     return saboloo

# codewars 6
# def get_middle(s):
#     if len(s)==1:
#         return s
#     elif len(s)%2==0:
#         dd=len(s)//2
#         return s[dd-1]+s[dd]
#     else:
#         dd=len(s)//2
#         return s[dd]