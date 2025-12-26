

# # 
# 5) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში და გამოითვალე ამ რიცხვების საშუალო არითმეტიკული.

sum=0
i=0

while True:
    num=input('enter any number :')
    if num=="stop":
        print(sum/i)
        
    i+=1
    n=int(num)
    sum+=n