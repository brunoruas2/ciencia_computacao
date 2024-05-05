package main

import "fmt"

func main() {
	var a = "initial"
	fmt.Println(a)

	var b, c = 2, 3
	fmt.Println(b, c)

	var b2, c2 int = 2, 3
	fmt.Println(b2, c2)

	var d = true
	fmt.Println(d)

	var e int
	fmt.Println(e)

	// jeito mais simples de declarar variaveis mas so disponivel dentro de funcoes
	// equivalente a var f string = "apple"
	f := "apple"
	fmt.Println(f)
}
