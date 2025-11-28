
# 4)
# მომხმარებელმა შეიყვანოს ტემპერატურა.
# თუ ტემპერატურა მეტია 0-ზე, შიგნით შეამოწმე:

#   თუ მეტია 30-ზე, დაბეჭდე "ცხელა"

#   თუ არა — "ნორმალურია"

# სხვა შემთხვევაში დაუბეჭდე - "ყინვაა"


tem=int(input('enter any temperature'))


if tem>30:
    print('cxela')
elif tem==30:
    print('normaluria')
else:
    print('yinvaa')