# 1) შექმენი ფუნქცია რომელიც მიიღებს რაღაც ტექსტს და დააბრუნებს ტექსტში სიმბოლოების რაოდენობას

def fun(something):

    sum=0
    for i in range(len(something)):
        sum+=1
    print(sum)
n=input('enter anything :')

fun(n)