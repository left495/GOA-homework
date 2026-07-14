def interlockable(a, b):
    for i in range(a):
        if i*2>=a:
            dd=i*2
            break
    result=''
    while True:
        if a==0:
            return result
        
        else:
            if dd<=a:
                result+='1'
                a=a-dd
                dd=dd//2 
            else:           
                result+='0'
            
print(interlockable(9,0))


print(10)