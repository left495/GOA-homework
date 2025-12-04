
# 4)
# მომხმარებელმა შეიყვანოს ტემპერატურა.
# თუ ტემპერატურა მეტია 0-ზე, შიგნით შეამოწმე:

#   თუ მეტია 30-ზე, დაბეჭდე "ცხელა"

#   თუ არა — "ნორმალურია"

# სხვა შემთხვევაში დაუბეჭდე - "ყინვაა"


tem=int(input('enter any temperature'))


if tem>0:
    if tem>30:
        print('cxela')
    else:
        print('normaluria')
else:
    print('yinvaa')