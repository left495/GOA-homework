# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def fun(nums):
    mric=0
    mnish=0
    for i in range(len(nums)):
        mric+=nums[i]
        mnish+=1

    print(mric/mnish)

fun([1,2,34,51,97,35,1345,21])
    