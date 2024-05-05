package main

import "fmt"

func main() {
	// loop mais simple
	i := 1
	for i <= 3 {
		fmt.Println(i)
		i += 1
	}

	// classico initial + condition + loop
	for j := 0; j < 3; j++ {
		fmt.Println(j)
	}

	// do this N times iteration is range over an interger
	for i := range 3 {
		fmt.Println("Range ->", i)
	}

	// for without condition will loop until break or return clausule
	for {
		fmt.Println("loop")
		break
	}

	// continue token goes to the next iteration
	for n := range 6 {
		if n%2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}
