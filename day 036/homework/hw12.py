# 12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

def sumDigits(num):
    sum=0
    num=str(num)
    for i in range(len(num)):
        sum+=int(num[i])
    print(sum)
    
sumDigits(256)