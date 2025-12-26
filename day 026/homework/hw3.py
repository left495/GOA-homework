


# 3) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, 
# ყოველი რიცხვი დაამატე სიაში,როცა სიაში მყოფი რიცხვების ჯამი გახდება 100-ზე მეტი, შეწყვიტე რიცხვების შეყვანა, ბოლოს დაბეჭდე სია და მათი ჯამი


n=[]

jami=0

while jami<101:
    usernum=int(input('enter any number :'))
    n.insert(0,usernum)
    jami+=usernum
    if jami>100:
        break

print(jami)
print(n)