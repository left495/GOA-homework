codewars 2

def tail_swap(strings):
    dd=[]
    for i in strings:
        da=i.split(':')
        for j in da:
            dd.append(j)
    fir=dd[0]+':'+dd[3]
    sec=dd[2]+':'+dd[1]
        
    last=[]
    last.append(fir)
    last.append(sec)
    return last

codewars 3

def is_pangram(st):
    dd='The quick brown fox jumps over the lazy dog'.lower()
    stt=st.lower()
    for i in dd:
        if i in stt:
            continue
        else:
            return False
        
    return True

codewars 4


def to_camel_case(text):

    spl=text.split('-')

    new=[]

    for i in spl:
        if '_' in i:
            dd=i.split('_')
            for j in dd:
                new.append(j)
        else:
            new.append(i)
    last=''
    for k in new:
        if new[0]==k:
            last+=k
        else:
            last+=k.capitalize()
    return last

codewars 5

def multi(l_st):
    dd=l_st[0]
    for i in range(1,len(l_st)):
        dd=dd*l_st[i]
    return dd
    

def add(l_st):
    dd=0
    for i in l_st:
        dd+=i
    return dd
        

def reverse(st):
    return st[::-1]


codewars 6

def DNA_strand(dna):
    new=''
    for i in dna:
        if i=='G':
            new+="C"
        elif i=='C':
            new+="G"
        elif i=='T':
            new+="A"
        elif i=='A':
            new+="T"
    return new