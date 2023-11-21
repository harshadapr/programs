// main.go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// Create a new Gin router
	router := gin.Default()

	// Define a route for the homepage
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, welcome to the homepage!",
		})
	})

	// Define a route for an API endpoint
	router.GET("/api/data", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "This is some sample data from the API.",
		})
	})

	// Run the web server on port 8080
	router.Run(":8080")
}
