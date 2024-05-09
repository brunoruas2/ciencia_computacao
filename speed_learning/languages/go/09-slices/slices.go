package main

import (
	"fmt"
	"slices"
)

func main() {
	// por algum motivo, o pessoal de go gosta mais de slice do que array \_(`,`)_/
	// diferente de arrays, slices não precisam ser criados com tamanhos só com tipo
	// por default tem lenth 0
	// nil é tipo null do go
	var s []string
	fmt.Println("uninit:", s, s == nil, len(s) == 0)

	// da pra criar slice com tamanho usando token make
	s = make([]string, 3)
	fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))

	// atribuindo valores no slice por index
	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("set:", s)
	fmt.Println("get:", s[2])

	fmt.Println("len:", len(s))

	// o token append cria uma nova slice com 1 casa a mais
	// por isso ele ta atribuindo novamente
	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s)

	// também da pra copiar slices usando o token copy
	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c)

	// o nome desse operador é "slice" operator e ele indica o range inteiro do index dos elementos
	// no exemplo ele vai printar os itens de 2 a 4 do slice s
	l := s[2:5]
	fmt.Println("sl1:", l)

	// aqui ele printa todos até o 4
	l = s[:5]
	fmt.Println("sl2:", l)

	// todos a partir do 2
	l = s[2:]
	fmt.Println("sl3:", l)

	// também da pra criar o slice e ja inserir os dados nela em uma linha só
	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t)

	t2 := []string{"g", "h", "i"}
	if slices.Equal(t, t2) {
		fmt.Println("t == t2")
	}

	// mesma coisa dos arrays multidimensionais só que mais complexo porque usa make
	twoD := make([][]int, 3)
	for i := 0; i < 3; i++ {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d: ", twoD)
}
