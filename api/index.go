package api

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

// Index page index.
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	_, err := fmt.Fprintf(w, "<h1>200. API server is running.<hr/>Welcome!</h1>")
	if err != nil {
		log.Println(err)
	}
}
