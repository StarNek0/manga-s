package router

import "github.com/julienschmidt/httprouter"

// Route is a structure for route
type Route struct {
	Method string
	Path   string
	Handle httprouter.Handle
}

// Routes is a slice of type Route
type Routes []Route
