def find_short(s):
    lst1 = s.split(' ')
    shortest = []
    for i in lst1:
        if i:
            length = len(i)
            shortest.append(length)
    shortest.sort()
    return shortest[0]


print(find_short("Sunshine State Spectacular"))
print(find_short("turns out random test cases are easier than writing out basic ones"))
print(find_short("lets talk about javascript the best language"))