#include <stdio.h>

int pass = 9987;

int main() {
    for (int i = 0000; i <= 9999; i++)
    {
        if (i == pass) {
            printf("Found pass : %d ", i);
            break;
        }

        printf("%d \n", i);
    }
    

    return 0;
}