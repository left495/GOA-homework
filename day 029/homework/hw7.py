
# 7)შექმენი ცვლადი სადაც შეინახავ სამ ციფრა ინტეჯერს,შენი დავალებაამ რომ გაიგო ამ რიცხვში მყოოფი ციფრების ჯამი,
#  მაგ გვაქვს "751" შენი დავალებაა გაიგო ამ რიცხვში მყოფო ციფრების ჯამი ანუ ---> 7 + 5 + 1 = 13 


var=964


strvar=str(964)

jami=0
list=[]


for i in range(len(strvar)):
    list.append(int(strvar[i]))



for i in range(len(list)):
    jami+=list[i]


print(jami)