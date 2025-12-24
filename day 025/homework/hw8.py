
# 8) შექმენი list: animals = ["dog", "cat", "horse", "cow"] მომხმარებელს შეაყვანინე ცხოველის სახელი, თუ არსებობს  დაბეჭდე მისი index-იმ, თუ არა  "Animal not found"


animals = ["dog", "cat", "horse", "cow"]


ani=input('enter any animal:')
i=0
while i<4:
    if ani==animals[i]:
        print(i)
       
        break
    i+=1
else:
    print('animal not found')


