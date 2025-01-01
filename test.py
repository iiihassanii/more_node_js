lts = [3, 7, 3, 5, 11, 9, 7, 1]
arr = []
arr2 = []
dec = {}
for i in lts:
    if i % 2 != 0:
        arr.append(i)
        counter = lts.count(i)
        if counter > 1:
            dec.update({i: counter})


arr2 += lts.sort(reverse=True)
s = ''.join(str(x) for x in arr2)
print(arr)
print(dec)
print(s)
