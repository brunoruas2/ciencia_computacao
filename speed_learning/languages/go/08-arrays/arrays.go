package main

import (
	"fmt"
)

func main() {
	// IMPORTANTE: GO É DO TIPO INDEX INICIAL = 0
	// em go um array é uma sequencia numerada de elementos de um tamanho específico
	// normalmente se usam mais slices mas arrays podem ser úteis em casos especiais

	// por default um array vem com suas posições preenchidas (no caso inteiro é 0)
	var a [5]int // criando um array com 5 posicoes de inteiros
	fmt.Println("emp: ", a)

	a[4] = 100 // setando valor no index 4
	fmt.Println("set: ", a)
	fmt.Println("get: ", a[4])

	fmt.Println("lenth: ", len(a))

	// setando valores na construcao do array
	b := [5]int{1, 2, 3, 4, 5}
	fmt.Println("dcl:", b)

	// tambem da pra deixar o compilador contar o tamanho do array passando ... no tamanho dele
	b = [...]int{1, 2, 3, 4, 5}
	fmt.Println("dcl:", b)

	// da pra usar : pra definir o valor do index do elemento que voce quer inserir o valor. No caso, to colocando 400 no index 3
	// como a gente ta criando um array de 9 posicoes definido que 100 é a 0, 400 vai na 3 e 500 vai na 8. Todo o resto é zero
	var c = [...]int{100, 3: 400, 8: 500}
	fmt.Println("idx:", c)

	// arrays são unidimensionais mas da pra construir arrays de arrays para estrutura da dados de mais dimensoes
	var arrayDuasDimensoes [2][3]int
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			arrayDuasDimensoes[i][j] = i + j
		}
	}
	fmt.Println("2d: ", arrayDuasDimensoes)

	// também da pra criar os arrays de multi dimensoes do mesmo jeito que criamos o de 1 dimensao
	var arrayTresDimensoes = [1][2][3]int{
		{
			{1, 2, 3},
			{4, 5, 6},
		},
	}
	fmt.Println("3d: ", arrayTresDimensoes)

}
