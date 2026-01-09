


# 6) მომხმარებელს შეაყვანინე ასაკი მანამ, სანამ არ შეიყვანს -1. დაბეჭდე რამდენი ადამიანი იყო არასრულწლოვანი, სრულწლოვანი, პენსიონერი. გამოიყენე while loop + if/elif/else


child=0

adult=0

pensioner=0

while True:
    age=int(input('enter your age :'))

    if age<=0:
        print(child,'არასრულწლოვანი')
        print(adult,'სრულწლოვანი')
        print(pensioner,'პენსიონერი')
        break
    elif age<18:
        child+=1
    elif age<65:
        adult+=1
    else:
        pensioner+=1


