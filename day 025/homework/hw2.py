# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, 
# თუ list-ში უკვე არის ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება


fruits = ["apple", "banana", "apple", "orange"]

fr=input('enter any fruit:')

i=0
while fr!=fruits[i]:
    if fr==fruits[i]:
        print(fruits.append(fr))
    i=i+1
    
    

if fr!=fruits[i]:
    print(fruits.pop(0))

        