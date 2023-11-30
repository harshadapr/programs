package main

import "fmt"

func main() {
	// Creating and initializing strings
	// using var keyword
	var str1 string
	str1 = "Great"

	var str2 string
	str2 = "Britain"

	// Concatenating strings
	// Using + operator
	fmt.Println(str1 + str2)

	// Creating and initializing strings
	// Using shorthand declaration
	str3 := "New"
	str4 := "York"

	// Concatenating strings
	// Using + operator
	result := str3 + " " + str4

	fmt.Println(result)
}
