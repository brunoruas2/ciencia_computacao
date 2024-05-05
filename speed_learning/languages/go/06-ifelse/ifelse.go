package main

import "fmt"

func main() {
	if 7%2 == 0 {
		fmt.Println("7 é par")
	} else {
		fmt.Println("7 é impar")
	}

	if 8%4 == 0 {
		fmt.Println("8 é divisível por 4")
	}

	if 8%2 == 0 || 7%2 == 0 {
		fmt.Println("8 ou 7 é par")
	}

	if num := 5; num < 0 {
		fmt.Println(num, " é negativo")
	} else if num < 10 {
		fmt.Println(num, " tem 1 dígito")
	} else {
		fmt.Println(num, " tem mais de 1 dígito")
	}
}
