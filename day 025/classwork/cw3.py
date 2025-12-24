# 3) შექმენი list, numbers = [10, 20, 30, 40, 50], მომხმარებელს ჰკითხე ინდექსი და pop()-ით წაშალე შესაბამისი ელემენტი
# დაბეჭდე:
# წაშლილი ელემენტი
# განახლებული list

numbers = [10, 20, 30, 40, 50]


ask=int(input('enter any number from 0;5:'))

print(numbers[ask])
numbers.pop(ask)



print(numbers)