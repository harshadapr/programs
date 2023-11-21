// main.go
package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			file, handler, err := r.FormFile("file")
			if err != nil {
				fmt.Println(err)
				return
			}
			defer file.Close()

			fmt.Fprintf(w, "File Uploaded: %+v\n", handler.Header)

			// Save the file
			f, err := os.Create("./" + handler.Filename)
			if err != nil {
				fmt.Println(err)
				return
			}
			defer f.Close()

			_, err = io.Copy(f, file)
			if err != nil {
				fmt.Println(err)
			}
		} else {
			tmpl, err := template.New("index").Parse(`
				<html>
					<body>
						<form method="post" action="/" enctype="multipart/form-data">
							<input type="file" name="file" />
							<input type="submit" value="Upload" />
						</form>
					</body>
				</html>
			`)
			if err != nil {
				fmt.Println(err)
				return
			}
			tmpl.Execute(w, nil)
		}
	})

	http.ListenAndServe(":8080", nil)
}
