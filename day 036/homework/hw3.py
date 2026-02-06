# 3) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას [3, 7, 1, 9] და დააბრუნებს ყველაზე დიდ რიცხვს

def fun(num):
    biggest=0
    for i in range(len(num)):
        if  num[i]>biggest:
            biggest=num[i]
    print(biggest)



fun([3, 7, 1, 9])
