# შექმენით სია [0, 5, 0, 3, 0, 7, 8], ამ სიიდან წავშალოთ ყველა 0 რიცხვი

list=[0, 5, 0, 3, 0, 7, 8]

i=0


while i<7:
    if list[i] == 0:
        print(list.remove(0))
        i+=1
    

print(list)