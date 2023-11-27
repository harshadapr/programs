package main

import "fmt"

// fibonacci function generates a Fibonacci sequence up to a specified limit
func fibonacci(limit int) []int {
	var fibSeq []int
	a, b := 0, 1

	for a <= limit {
		fibSeq = append(fibSeq, a)
		a, b = b, a+b
	}

	return fibSeq
}

func main() {
	limit := 50
	result := fibonacci(limit)

	fmt.Printf("Fibonacci sequence up to %d: %v\n", limit, result)
}
