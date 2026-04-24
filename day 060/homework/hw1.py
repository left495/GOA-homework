# codewars 1

# def is_valid_walk(walk):
#     if len(walk)!=10:
#         return False
#     elif walk=='':
#         return False
#     n=0
#     w=0
#     s=0
#     e=0
#     for i in walk:
#         if i=='n':
#             n+=1
#         elif i=='w':
#             w+=1
#         elif i=='e':
#             e+=1
#         else:
#             s+=1
#     if w==e and n==s:
#         return True
    

# codewars 2

# def compute_sum(n):
#     d=0
#     for i in range(n+1):
#         d+=i
#     return d

# codewars 3

# def delete_nth(order,max_e):
    # last=[]
    # while True:
    #     if len(order)==0:
    #         return last
    #     for i in order:
    #         counted=order.count(i)
    #         if counted<=max_e:
    #             for i in range(counted):
    #                 last.append(i)
    #                 order.remove(i)
    #         else:
    #             for i in range(max_e):
    #                 last.append(i)
    #                 order.remove(i)
    #     return last


# codewars 4

# def digital_root(n):
#     dd=0
#     for i in str(n):
#         dd+=int(i)
#     if len(str(dd))!=1:
#         return digital_root(dd)
#     else:
#         return dd

# codewars 5