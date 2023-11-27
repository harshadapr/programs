package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// Prompt the user for their name
	fmt.Print("Enter your name: ")

	// Read user input from the console
	reader := bufio.NewReader(os.Stdin)
	name, err := reader.ReadString('\n')

	// Handle potential errors
	if err != nil {
		fmt.Println("Error reading input:", err)
		return
	}

	// Trim leading and trailing whitespaces from the name
	name = strings.TrimSpace(name)

	// Check if the name is empty
	if name == "" {
		fmt.Println("You didn't enter a name. Exiting.")
		return
	}

	// Greet the user
	fmt.Printf("Hello, %s! Welcome to the Go programming world.\n", name)
}
