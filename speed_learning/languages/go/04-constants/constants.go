package main

import (
	"fmt"
	"math"
)

const s string = "constant_string_typed"
const s2 = "constant_string_untyped"

func main() {
	fmt.Println(s)
	fmt.Println(s2)

	const n = 500000000000000

	const d = 3e20 / n

	fmt.Println(d)

	fmt.Println(int64(d))

	fmt.Println(math.Sin(n))
}
