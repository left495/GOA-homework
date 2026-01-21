# 4) შექმენით სტრინგის ცვლადი და ცარიელი სია.
#  სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და ამ სიაში ჩაამატეთ, 
# ხოლო სტრინგში მყოფი პატარა ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში.
#  დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.


name='adamianI'
i=0
list1=[]

while i<len(name):
    if name[i]==name[i].upper():
        list1.append(name[i].lower())
    else:
        list1.append(name[i].upper())
    i+=1

print(list1)