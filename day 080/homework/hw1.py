# codewars 1


# def interlockable(a, b):
#     bya=''
#     while a!=0:
#         d=a%2
#         a=a//2
#         bya+=str(d)
    
#     byb=''
    
#     while b!=0:
#         d=b%2
#         b=b//2
#         byb+=str(d)
    
#     if len(bya)>len(byb):
#         dd=len(bya)-len(byb)
#         byb+=dd*'0'
#         bya=bya[::-1]
#         byb=byb[::-1]
#     elif len(bya)>len(byb):
#         dd=len(byb)-len(bya)
#         bya+=dd*'0'
#         bya=bya[::-1]
#         byb=byb[::-1]
    
#     for i in range(len(bya)):
#             if bya[i]==byb[i] and bya[i]=='1':
#                 return False   
#     return True