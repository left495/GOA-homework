# შექმენი ცარიელი სია, for ციკლით 1 დაან 10-მდე დაამატე სიაში რიცხვები, remove-ის გამოყენებით წაშალე ყველა კენტი რიცხვი  და ბოლოს დაბეჭდე საბოლოო სია]~


list=[]

for i in range(10):
    list.append(i)



for num in list:
    if num%2 != (0):
        list.remove(num)

print(list)