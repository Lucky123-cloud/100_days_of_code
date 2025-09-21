def add_tuple(tuple_a=(), tuple_b=()):
    """Add additional (0, 0) so as to guarantee the constrains of 2"""
    tuple_a += (0, 0)
    tuple_b += (0, 0)

    return (tuple_a[0] + tuple_b[0], tuple_a[1] + tuple_b[1])