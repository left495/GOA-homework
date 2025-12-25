
# 11) შექმენი ცარიელი list მომხმარებელს შემოაყვანინე რიცხვები მანამ სანამ არ დაწერს "stop", ყველა რიცხვი დაამატე ლისთში append()ის გამოყენებით და საბოლოოდ დაბეჭდე ლისთი


numbers=[]



while True:
    number = input('enter any number :')

    if number =='stop':
        break
    else:
        num=int(number)
        numbers.append(num)

print(numbers)