number=int(input("დაწერე დადებითი და ლუწი რიცხვი"))

if number>0 and number % 2 == 0:
    print("რიცხვი ლუწია და დადებითი")
elif number>0 and number % 2 != 0:
    print("რიცხვი დადებითია მაგრამ არა ლუწი")
elif number<0 and number % 2 ==0:
    print("რიცხვი ლუწია მაგრამ არა დადებითი")
else:
     print("რიცხვი უარყოფითია და კენტი")

   
