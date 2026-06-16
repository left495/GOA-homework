def mxdiflg(a1, a2):
    if len(a1)==0 or len(a2)==0:
        return -1
    a1max=0
    a1min=50
    for i in a1:
        if a1max<len(i):
            a1max=len(i)
        elif a1min>len(i):
            a1min=len(i)
    a2max=0
    a2min=50
    
    for j in a2:
        if a2max<len(j):
            a2max=len(j)
        elif a2min>len(j):
            a2min=len(j)
            return len(j)
    fir=a1max-a2min
    sec=abs(a1min-a2max)
    

    
    
s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"]
s2 = ["bbbaaayddqbbrrrv"]


print(mxdiflg(s1,s2))