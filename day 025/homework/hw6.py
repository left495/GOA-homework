

# 6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში


list=[]

m1=int(input('enter anything1:'))

list.insert(1,m1)


m2=int(input('enter anything2:'))

list.insert(1,m2)


m3=int(input('enter anything3:'))

list.insert(1,m3)


m4=int(input('enter anything4:'))

list.insert(1,m4)


m5=int(input('enter anything5:'))

list.insert(1,m5)
i=0
sum_num=0
while i<5:
    sum_num=sum_num+list[i]
    i+=1

print(sum_num)

