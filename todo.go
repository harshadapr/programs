// main.go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	todoList := make([]string, 0)

	for {
		fmt.Print("Enter a to-do item (or 'quit' to exit): ")
		input := getUserInput()

		if strings.ToLower(input) == "quit" {
			break
		}

		todoList = append(todoList, input)
		fmt.Println("To-Do List:")
		for i, item := range todoList {
			fmt.Printf("%d. %s\n", i+1, item)
		}
	}
}

func getUserInput() string {
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	return strings.TrimSpace(input)
}
