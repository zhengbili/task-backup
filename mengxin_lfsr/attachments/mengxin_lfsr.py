import random
from secret import flag

class lfsr():
    def __init__(self, init, mask, length):
        self.init = init
        self.mask = mask
        self.lengthmask = 2**(length+1)-1

    def next(self):
        nextdata = (self.init << 1) & self.lengthmask 
        i = self.init & self.mask & self.lengthmask 
        output = 0
        while i != 0:
            output ^= (i & 1)
            i = i >> 1
        nextdata ^= output
        self.init = nextdata
        return output


if __name__=="__main__":
    N=16
    init=random.randint(0,2**N-1)
    print(init)
    mask=int(flag[7:-1],2)
    assert mask.bit_length()==N
    l = lfsr(init,mask,N)
    for i in range(N):
        print(l.next(),end='')
    print()
#52811
#0110010100010010