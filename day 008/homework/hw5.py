#5) მომხმარებელს შემოატანინე:
#--> მომხმარებლის სახელი (username)
#--> პაროლი (password)
#შეამოწმე:
#თუ მომხმარებელი არის "admin" და პაროლი არის 'superSecretPassword' → "მოგესალმები, ადმინ!"
#თუ მომხმარებელი "guest" და პაროლი არის "1234" → "მოგესალმები, სტუმარო!"
#სხვა შემთხვევაში → "მომხმარებელი არ მოიძებნა!"


user=input("enter username")
pas=input("enter password")

if user=="admin" and pas=="superSecretpassword":
    print("მოგესალმებით, ადმინ")
elif user=="guest" and pas=="1234":
    print("მოგესალმებით, სტუმარო")
else:
    print("მომხმარებელი ვერ მოიძებნა")

