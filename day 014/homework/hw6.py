# მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.





sum=0

count=0

num=(input('enter any number:'))

while num!="gamotvale sasualo":
    count=count + 1
    sum=sum+int(num)
    num=(input('enter any number:'))

print(sum/count)
