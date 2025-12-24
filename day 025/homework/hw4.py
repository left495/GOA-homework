
# 4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს  დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"




colors = ["red", "blue", "green", "yellow"]


col=input('enter any color:')

i=0
while i<4:
    if col==colors[i]:
        print(colors.index(col)) 
        break
        i+=1
    else:
        print('not found')
        break
        
