# 4) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ წინადადების სტრინგი.
#  დათვალე, რამდენი სიტყვის სიგრძე არის 4-ზე მეტი. დაპრინტე ასეთი სიტყვების რაოდენობა.
#  დაწერეთ ეს დავალება ორნაირად - split() ფუნქციით და split() ფუნქციის გარეშე.

# def fun():
#     words=[]
#     k=0
#     n=input('enter sentance :')
#     words+=n.split()
#     for i in range(len(words)):
#         if len(words[i])>4:
#             k+=1

#     print(k)

# fun()

def fun():
    list1=[]
    from1=0
    sen=input('enter any sentance :')
    for  i in range(len(sen)):
        if sen[i]==' ':
            sliced=sen[from1:i]
            list1.append(sliced)
            from1=i+1
        elif i==len(sen)-1:
            sliced=sen[from1:i+1]
            list1.append(sliced)
    words=0
    for n in range(len(list1)):
        if len(list1[n])>4:
            words+=1
    print(words)

fun()

