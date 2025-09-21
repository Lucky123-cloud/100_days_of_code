t = (10, 20, 30, 40)
print(t[0])
print(t[-1])
print(t[1:3])
print(t[2:4])


a = (1, 2)
b = (3, 4)
print(a + b)
print(a * 3)
print(2 in a)
print(5 not in a)

t1 = (1, 2, 2, 3)
print(t1.count(2))
print(t1.index(3))

fruits = ("apple", "banana", "cherry")
for fruit in fruits:
    print(fruit)

# packing
person = ("Lucky", 20, "Kenya")

print(person)

# unpacking
name, age, country = person
print(name)
print(age)
print(country)


name, _, country = person
print(name)
print(country)


def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([5, 2, 9, 5, 10, 0])
print(lo, hi)