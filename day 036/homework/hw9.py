# 9) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას და დააბრუნებს მხოლოდ ლუწ რიცხვებს


def fun(li):
    new_li=[]
    for i in range(len(li)):
        if li[i]%2==(0):
            new_li.append(li[i])
            
    print(new_li)

fun([1344,4567,5,24,6,4,5])
