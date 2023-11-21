// main.go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, welcome to the simple HTTP server!")
	})

	http.ListenAndServe(":8080", nil)
}
