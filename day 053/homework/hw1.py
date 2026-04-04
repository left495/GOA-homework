# codewars 1

# return masked string
# def maskify(cc):
#     if len(cc)<=4:
#         return cc
#     dd=''
#     for i in range(len(cc)-4):
#         dd+='#'
#     for j in range(len(cc)-4,len(cc)):
#         dd+=cc[j]
#     return dd

# codewars 2

# def no_boring_zeros(n):
#     if len(str(n))==1:
#         return n
#     elif '0'!= str(n)[-1]:
#         return n
#     stringed=str(n)
    
    
#     for i in range(1,len(stringed)):
#         if stringed[-i]=="0":
#             continue
#         else:
#             return int(stringed[0:-i+1])
        

# codewars 3

# def warn_the_sheep(queue):
#     n = queue.index('wolf')
#     listed=[]
#     if queue[n] == queue[-1]:
#         return 'Pls go away and stop eating my sheep'
#     elif n==0:
#         return f"Oi! Sheep number {len(queue)-1}! You are about to be eaten by a wolf!"
#     for i in range(1,len(queue)):
#         listed.append(queue[-i])
#     n = listed.index('wolf')
#     return f"Oi! Sheep number {n}! You are about to be eaten by a wolf!"


# codewars 4

# def number(lines):
#     if lines==[]:
#         return lines
#     dd=1
#     new=[]
#     for i in lines:
        
#         new.append(f"{dd}: {i}")
#         dd+=1
#     return new

# codewars 5

def distinct(seq):
    if len(seq)==1:
        return seq
    new=[]
    already_taken=''
    for i in seq:
            if str(i)  in already_taken:
                continue
            else:
                new.append(i)
                already_taken+=str(i)
    return new