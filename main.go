package main

import (
	"github.com/zsdostar/manga-s/api/router"
	"log"
	"net/http"
)

func main() {

	err := http.ListenAndServe(":80", router.Router())
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
