package main

import (
	"fmt"
	"time"
)

func main() {
	i := 2
	fmt.Println("Escreva", i, " como ")
	switch i {
	case 1:
		fmt.Println("um")
	case 2:
		fmt.Println("dois")
	case 3:
		fmt.Println("três")
	}

	// multipla validacao no mesmo case com virgula
	day := time.Now().Weekday()
	// equivalente a -> var day time.Weekday = time.Now().Weekday()
	switch day {
	case time.Saturday, time.Sunday:
		fmt.Println("É final de semana, meus bacanos!")
	default:
		fmt.Println("Guenta ai que é dia de semana ainda")
	}

	// switch sem expressão é equivalente a um if/else
	switch {
	case time.Now().Hour() < 12:
		fmt.Println("Estamos antes do meio dia")
	default:
		fmt.Println("Já passou do meio dia")
	}

	// switch type é usado pra comparar tipos ao invés de valores
	testaVariavel := func(i interface{}) {
		switch typeVarTestada := i.(type) {
		case bool:
			fmt.Println("Variavel Testada é booleana")
		case int:
			fmt.Println("Variavel Testada é inteiro")
		default:
			fmt.Printf("Não sei o que a variável %T\n", typeVarTestada)
		}
	}
	testaVariavel(true)
	testaVariavel(10)
	testaVariavel("hey")
}
