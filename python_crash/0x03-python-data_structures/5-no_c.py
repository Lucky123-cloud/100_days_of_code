def no_c(my_string):
    new_str = ""
    for char in my_string:
        if char != 'C' and char != 'c':
            new_str += char
    return new_str