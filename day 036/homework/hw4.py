# 4) შექმენი ფუნქცია რომელიც მიიღებს სიტყვების სიას და დააბრუნებს მხოლოდ იმ სიტყვებს რომლებიც იწყება დიდი ასოთი

def fun(something):
    li=[]
    for i in range(len(something)):
        w=something[i]
        if w==w.capitalize():
            li.append(w)
    print(li)

fun(['Cotne','goga','Nika','dato'])

