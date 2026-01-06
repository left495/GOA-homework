# 1) შექმენი ცარიელი სია.მომხმარებელმა შეიყვანოს რიცხვები მანამ,
#  სანამ არ დაწერს "stop".დაამატე მხოლოდ დადებითი რიცხვები სიაში, უარყოფითი რიცხვები არ დაამატო, ბოლოს დაბეჭდე სია



list=[]



while True:
    num=input('enter any number :')

    if num=='stop':
        print(list)
        break
    num=int(num)

    if num>0:
        list.append(num)

        


    
