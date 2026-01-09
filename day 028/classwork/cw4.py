# 4) მომხმარებელს შემოაყვანინე ასაკი, თუ ასაკინ < 18-ზე -> "შენ ხარ არასრულწლოვანი", თუ ასაკი 18 და 64 შორისაა -> "შენ ხარ სრულწლოვანი", თუ ასაკი > 65-ზე -> "შენ ხარ პენსიონერი"




while True:
    age=int(input('enter your age :'))
    if age<18 and age>0:
        print('you are a child')
        break
    elif age <64:
        print('you are adult')
        break
    elif age>64:
        print('you are a pensioner')
        break
    else:
        print('erorr')


