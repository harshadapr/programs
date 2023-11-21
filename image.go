// main.go
package main

import (
	"fmt"
	"gocv.io/x/gocv"
)

func main() {
	// Read an image from file
	img := gocv.IMRead("path/to/your/image.jpg", gocv.IMReadColor)
	if img.Empty() {
		fmt.Println("Error reading image")
		return
	}

	// Convert the image to grayscale
	gray := gocv.NewMat()
	gocv.CvtColor(img, &gray, gocv.ColorBGRToGray)

	// Save the grayscale image
	gocv.IMWrite("path/to/your/gray_image.jpg", gray)
	fmt.Println("Grayscale image saved")

	// Display the original and grayscale images (requires a windowing system)
	window := gocv.NewWindow("Image Processing")
	defer window.Close()

	window.IMShow("Original", img)
	window.IMShow("Grayscale", gray)

	window.WaitKey(0)
}
