# 2) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა, ანუ წერია lowercase-ში, ამ სიტყვის ყველა ასო გახადეთ დიდი.
# თუ სიტყვა შეიცავს თუნდაც ერთ uppercase ასოს, ეს სიტყვა ამოშალეთ სიიდან. ბოლოს დაპრინტეთ მიღებული სია.
#  (არ შექმნათ ახალი სია, იმუშავეთ იგივე სიტყვების სიაში) გამოიყენეთ while ციკლი.


list1=['badri','Luka','Nodari','cotne']
n=0
was=[]

while n<len(list1):
    if list1[n]==list1[n].lower():
        list1[n]=list1[n].upper()
    else:
        was.append(list1[n])
    n+=1

for i in range(len(was)):
    list1.remove(was[i])


print(list1)