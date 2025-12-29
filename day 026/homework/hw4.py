


# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები,
# თუ რიცხვი უკვე არსებობს სიაში შეწყვიტე შეყვანა, სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია



n=[]



while True:
    num=input('enter any number :')

    if num=='stop':
        print(n)
        break
    
    number=int(num)
    
    if number not in n:
        n.insert(0,number)

    



