

# 5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no), თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list



list=[1,2,3,4,5]

ask=input('do you want to clear list? :')


if ask=='yes':
    print(list.clear())
else:
    print(list)