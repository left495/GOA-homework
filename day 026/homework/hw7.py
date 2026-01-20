

# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.


number=[]

while True:
    num=input('enter a number or stop :')
    if num=='stop':
        break
    number.append(int(num))
    if len(number) >= 2:
        if number[-1] +number[-2]<50:
            number.pop()

print(number)