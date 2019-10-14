package router

import (
	"github.com/julienschmidt/httprouter"
	"github.com/zsdostar/manga-s/app"
)

var routes = Routes{
	Route{"GET", "/", app.Index},
}

// Router for the web server.
func Router() *httprouter.Router {
	router := httprouter.New()
	for _, r := range routes {
		router.Handle(r.Method, r.Path, r.Handle)
	}
	return router
}
