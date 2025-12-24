# 1) შექმენი list: names = ["nika", "luka", "giorgi"] მომხმარებელს შეაყვანინე: ინდექსი და სახელი, insert()-ის გამოყენებით ჩასვი სახელი მითითებულ ადგილას და დაბეჭდე შედეგი




names = ["nika", "luka", "giorgi"]



index=int(input('enter index from 0;2:'))

name=input('enter any name:')

names.insert(index, name)


print(names)