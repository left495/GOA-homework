

# 5) მომხმარებელს შეაყვანინე რიცხვები, მანამ სანამ არ შეიყვანს 0, ყოველი რიცხვის შემდეგ დაბეჭდე "დადებითია" ან "უარყოფითია".დაბეჭდე ბოლოს რიცხვების ჯამი. გამოიყენე while loop.

sum=0
while True:
    num=int(input('enter any number :'))
    sum+=num
    if num==0:
        print(sum)
        break
    elif num>0:
        print('დადებითია')
    else:
        print('უარყოფითია')

