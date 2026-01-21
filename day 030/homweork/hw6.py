# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.



list1=['Python','CSS','html','javascript']
was=[]

for  i in range(len(list1)):
    if len(list1[i])>5 or i%2!=0:
        was.append(list1[i])
        
for n in range(len(was)):
    list1.remove(was[n])


print(list1)