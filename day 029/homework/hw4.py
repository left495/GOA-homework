
# 4)შექმენი სია და შეიყვანე სტრიგნები პატარა ასოებით,შენი დავალებაა შეამოწმო,თუ სტრინგი შეიცავს 5 ასოზე მეტს მაშინ ასეთი 
# სიტყვები ჩაამატე ახალ სიაში ოღონდ პირველი ასო ქონდეთ დიდი ,ხოლო თუ სიტყვა შეიცავს 5 ასოზე ნაკლებს მაშინ დაამატე ეს ელემენტებიც სიაში ოღონდ ყველა ასო ქონდეთ დიდი

list=[]



while  True:
    str=input('enter any string or stop:')
    if str=='stop':
        print(list)
        break
    elif len(str)>5:
        list.append(str.capitalize())
    else:
        list.append(str.upper())
