# 1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. თითოეული სიტყვა დაბეჭდე capitalize()-ით.


start=0


list=[]

sentence=input('write anything :')

l=0

while True:
    if sentence[l]==' ':
        sliced=sentence[start:l]
        list.append(sliced.capitalize())
        start=l+1

    elif l==len(sentence)-1:
        sliced=sentence[start:l+1]
        list.append(sliced.capitalize())
        break
    l+=1


for i in range(len(list)):
    print(list[i])


