#include <stdio.h>
#include <stdlib.h>

int main()//punto de entrada
{

    int unNumero;
    float otroNumero;
    char unCaracter;

    printf("Ingrese un numero: ");
    scanf("%d", &unNumero);

    printf("Ingrese un carcter: ");
    //fflush(stdin); para windows
    setbuf(stdin,NULL);//para linux y windows
    scanf("%c", &unCaracter);

    printf("Ingrese un flotante: ");
    scanf("%f", &otroNumero);

    printf("El numero que ingreso :%d\n",unNumero);
    printf("El flotante que ingreso :%.2f\n",otroNumero);
    printf("El carcter que ingreso :%c",unCaracter);



    //printf("%d--%p\n",unNumero,&unNumero);


    /*printf("el numero es %d,\t\a y el otro numero es %.2f\n",unNumero,otroNumero);
    printf("El caracter es: %c",unCaracter);
    printf("ADIOS A MI VIDA SOCIAL!!!!!");*/



    return 0;
}
