# 2) შექმენი ცარიელი სია. მომხმარებელს შეაყვანინე რიცხვები სანამ "stop"-ს არ დაბეჭდავს, ყოველი ახალი რიცხვი: თუ ნაკლებია 50-ზე → ჩასვი სიის დასაწყისში (insert), თუ მეტია ან ტოლია 50-ის → დაამატე ბოლოში (append), ბოლოს დაბეჭდე სია


n=[]



while True:
    num=input('enter any numbers:')

    if num=='stop':
        print(n)
        break

    number=int(num)

    if number<50:
        n.insert(0,number)
    else:
        n.append(number)
