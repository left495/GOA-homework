
# codewars 1

# def count_positives_sum_negatives(arr):
#     if arr==[]:
#         return arr
#     sum=0
#     count=0
#     for i in arr:
#         if i>0:
#             count+=1
#         elif i<0:
#             sum+=i
#     return [count,sum]


# codewars 2

# def count_sheep(n):
    
#     word=''
#     for i in range(1,n+1):
#         word+=str(i)+' sheep...'
    
#     return word


# codewars 3

# def likes(names):
#     raod=len(names)
#     if names==[]:
#         return 'no one likes this'
#     elif raod==1:
#         return names[0]+ ' likes this'
#     elif raod==2:
#         return names[0]+' and '+names[1]+' like this'
#     elif raod==3:
#         return names[0]+', '+names[1]+' and '+names[2]+' like this'
#     else:
#         return names[0]+', '+names[1]+' and '+str(raod-2)+' others like this'



# codewars 4

# def friend(x):
#     output=[]
#     for i in x:
#         if len(i)==4:
#             output.append(i)
            
#     return output

# codewars 5

# def abbrev_name(name):
#     dd,aa=name.split()
    
#     return dd[0].upper()+'.'+ aa[0].upper()



