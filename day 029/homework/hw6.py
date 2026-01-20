
# 6)მომხმარებელს შემოატანინე რაიმე სტრინგი,შენი დავალებაა დაითვალო თუ რამდენი ცალი ხმოვანი და რამდენი ცალი თანხმოვანი გვხვდება მის მიერ შემოყვანილ სტრინგში

x=0
tx=0

str=input('enter any string :')

for i in range(len(str)):
    if str[i]=='a' or str[i]=='e' or str[i]=='i' or str[i]=='o' or str[i]=='u':
        x+=1
    else:
        tx+=1
print(x,'xmovani da',tx,'tanxmovani')




