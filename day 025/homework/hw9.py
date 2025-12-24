
# 9) შექმენი list: nums = [1, 2, 3, 4] მომხმარებელს შეაყვანინე: ინდექსი და რიცხვი, თუ ინდექსი list-ის საზღვრებშია გამოიყენე insert() ჩასამატებლად, თუ ინდექსი ლისტზე დიდია მაშინ გამოიყენე append()


nums = [1, 2, 3, 4]

ind=int(input('enter any index :'))


num=int(input('enter any number:'))


if ind>=0 and ind<=3:
    nums.insert(ind,num)
else:
    nums.append(num)


print(nums)