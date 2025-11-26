
# 8) შექმენი ცვლადი და შეინახე შენი პაროლი(string)

# მომხმარებელს შემოატანინე პაროლი

# სანამ შენი პაროლი არ უდრის მომხმარებლის მიერ შემოტანილ პაროლს
#     მომხმარებელს თავიდან შემოატანინე პაროლი რომ გაარტყას შენ პაროლს
# დაპრინტე "სწორია გაარტყი"

# --> გადააკეთეთ ზემოთ მოცემული ტექსტი კოდად(ინდენტაცია დაცულია)



password='paroli'


print('saved')

pas=input('enter password')

while password!=pas:

    print('incorrect')
    pas=input('enter password')
    if password==pas:
        print('u got it')



        