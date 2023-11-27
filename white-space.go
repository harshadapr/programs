

// Golang program to remove
// multiple white-spaces from string
package main

import (
	"fmt"
	"strings"
)

func standardizeSpaces(s string) string {
	return strings.Join(strings.Fields(s), " ")
}

func main() {
	str1 := " Hello,   World  ! "
	fmt.Println(standardizeSpaces(str1))

	str2 := "Hello,\tWorld ! "
	fmt.Println(standardizeSpaces(str2))

	str3 := " \t\n\t Hello,\tWorld\n!\n\t"
	fmt.Println(standardizeSpaces(str3))
}

