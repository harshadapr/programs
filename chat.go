// main.go
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
		return
	}
	defer conn.Close()

	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			return
		}
		fmt.Printf("Received message: %s\n", p)

		err = conn.WriteMessage(messageType, p)
		if err != nil {
			return
		}
	}
}

func main() {
	http.HandleFunc("/ws", handleConnections)
	http.ListenAndServe(":8080", nil)
}
