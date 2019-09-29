package router

import (
	"github.com/julienschmidt/httprouter"
	"github.com/zsdostar/manga-s/api"
)

var routes = Routes{
	Route{"Get", "/", api.Index},
}

// Router for the web server.
func Router() *httprouter.Router {
	router := httprouter.New()
	for _, r := range routes {
		router.Handle(r.Method, r.Path, r.Handle)
	}
	return router
}
