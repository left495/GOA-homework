# 2) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და დაითვლის ამ ტექსტში ხმოვნების რაოდენობას


def fun(something):
    sum=0
    for i in range(len(something)):
        if something[i] in 'aeiou':
            sum+=1
    return sum

print(fun('bvwvhsdbzhaiqdjcabdkjnadmcx'))


