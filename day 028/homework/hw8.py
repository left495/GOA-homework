    
# 8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე "დიდი საშუალო" წინააღმდეგ შემთხვევაში "პატარა საშუალო"

l=0
number=0
sum=0
while l<5:
    num=int(input('enter any number :'))
    sum+=num
    number+=1
    l+=1

medium=sum/number

if medium>50:
    print('დიდი საშუალო')
else:
    print('პატარა საშუალო')
