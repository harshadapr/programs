// main.go
package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

type Message struct {
	Text string `json:"message"`
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api/greet", func(w http.ResponseWriter, r *http.Request) {
		message := Message{Text: "Hello, welcome to the REST API!"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(message)
	}).Methods("GET")

	http.Handle("/", router)
	http.ListenAndServe(":8080", nil)
}
