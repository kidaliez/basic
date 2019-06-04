#include<stdio.h>

int total = 0;

int sum (int, int);

int main()
{
    total = sum(1, 3);
    
    printf("total = %d ", total);

    return 0;
}

int sum(int a, int b) {
    return a + b;
}