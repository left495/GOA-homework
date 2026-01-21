# 1) შექმენით სახელებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის d, მაშინ ახალ სიაში ჩაამატეთ სახელი "NIKA",
#  თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო K-თი, მაშინ სიაში ჩაამატეთ სახელი "GOGA", 
# სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". დაპრინტეთ მიღებული სია.

list1=['COTNE','gOga','nika','dato','KOTE']

newlist=[]
for i in range(len(list1)):
    name1=list1[i]
    if list1[i]==list1[i].lower() and name1[0]=='d' :
        newlist.append('NIKA')
    elif list1[i]==list1[i].upper() or name1[0]=='K':
        newlist.append('GOGA')
    else:
        newlist.append('lideri')

print(newlist)