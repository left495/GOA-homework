# 3)
# მომხმარებელს შემოაყვანინე  რიცხვი.

# თუ რიცხვი დადებითია, შიგნით შეამოწმე:

#     თუ ლუწია, დაბეჭდე "დადებითი ლუწი".

#     თუ არა — "დადებითი კენტი".

# სხვა შემთხვევაში დაბეჭდე --> "რიცხვი უარყოფითია"



num=int(input('enter any number'))

if  num>0:
    if num%2==0:
        print('dadebiti luwi')
    else:
        print('dadebiti kenti')
else:
    print('uaryofiti')