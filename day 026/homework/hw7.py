

# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.


nums=[]

count=int(input('how many munbers do u want ?'))

for i in range(count):
    nums.append(int(input('enter number:')))


i=0

while i<len(nums) -1:
    if nums[i] + nums[i+1]<50:
        nums.pop(i+1)
    else:
        i+=1

print(nums)