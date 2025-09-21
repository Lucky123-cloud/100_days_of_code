def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        if not row:
            print()
            continue
        for i, val in enumerate(row):
            if i == len(row) -1:
                print("{:d}".format(val), end="")
            else:
                print("{:d}".format(val), end=" ")
        print()
            