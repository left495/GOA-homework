# მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.

# i=int(input('შეიყვანეთ რიცხვი '))
# a=int(input('შეიყვანეთ კიდევ რიცხვი'))
# b=int(input('შეიყვანეთ ბოლოჯერ რიცხვი'))
# c=a+b+i
# print('gamotvale sashualo')
# print(c/3)

sum_number=0

lean_number=0

number=int(input('enter any number'))

while number!='gamotvale sasualo':
    sum_number=sum_number+1
    lean_number=lean_number+int(number)
    number=int(input('enter any number'))

print(sum_number/lean_number)