# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, 
# თუ list-ში უკვე არის ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება


fruits = ["apple","banana","apple","orange"]

fr = input("enter any fruit:")
i = 0


while i < 4:
    if fruits[i] == fr:
        fruits.remove(fr)     
        break   
    i=i+1
else:
    fruits.append(fr)       
    




print(fruits)