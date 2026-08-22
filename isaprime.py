def isaprime(n):
    for i in range(2, n):
        if n % i == 0:
            print("The smallest factor is ", i)
            return False
    return True


isaprime(3533)