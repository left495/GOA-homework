
# 6) შექმენით ფუნქცია. მომხმარებელს შემოატანინე წინადადება. 
# იპოვე და დაბეჭდე ყველაზე გრძელი სიტყვა ამ წინადადებაში. 
# გამოიყენეთ while ციკლი. გამოიძახეთ ფუნქცია.


def fun():
    from1=0
    list1=[]
    sen=input('enter any sentance :')
    for  i in range(len(sen)):
        if sen[i]==' ':
            sliced=sen[from1:i]
            list1.append(sliced)
            from1=i+1
        elif i==len(sen)-1:
            sliced=sen[from1:i+1]
            list1.append(sliced)
    biggest=[]
    for l in range(len(list1)):
        if len(list1[l])>len(biggest):
            biggest=list1[l]
        

    print(biggest)

fun()

    
