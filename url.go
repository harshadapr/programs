// main.go
package main

import (
	"fmt"
	"net/http"
	"sync"
)

func main() {
	urls := []string{"https://www.google.com", "https://www.example.com", "https://www.github.com"}

	var wg sync.WaitGroup

	for _, url := range urls {
		wg.Add(1)
		go func(u string) {
			defer wg.Done()
			resp, err := http.Get(u)
			if err != nil {
				fmt.Printf("%s is down\n", u)
				return
			}
			defer resp.Body.Close()
			fmt.Printf("%s is up, status code: %d\n", u, resp.StatusCode)
		}(url)
	}

	wg.Wait()
}
