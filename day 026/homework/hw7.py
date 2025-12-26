

# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.
n=[]

while True:
    num=input('enter any numbers :')

    if num=='stop':
        print(n)

    number=int(num)

i=0

while i<len[n]:
    if n[i]+n[i+1]:
        n.remove(n[i+1])
    i+=1


print(n)

