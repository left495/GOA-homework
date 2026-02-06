# 3) შექმენით ფუნცქცია სახელად
#  sum_numbers რომელიც პარამეტრად 
# მიიღებს რიცხვების სიას [10, 20,30, 100, 200, 500 ]
#  დაწერე ფუნქცია რომელიც დააბრუნებს მოცემული რიცხვების ჯამს


def sum_numbers(cvladi):
    n=0
    for i in range(len(cvladi)):
        n+=cvladi[i]
    print(n)

list1=[10, 20,30, 100, 200, 500]


sum_numbers(list1)