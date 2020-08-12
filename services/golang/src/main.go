package main

import (
	"encoding/json"
	"flag"
	"net/http"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

type LogRequestBody struct {
	Message string
}

func decodeRequestBody(body *LogRequestBody, request *http.Request) {
	decoder := json.NewDecoder(request.Body)
	decoder.Decode(body)
}

func stdOut(writer http.ResponseWriter, request *http.Request) {
	var body LogRequestBody
	decodeRequestBody(&body, request)
	glog.Info(body.Message)
}

func stdErr(writer http.ResponseWriter, request *http.Request) {
	var body LogRequestBody
	decodeRequestBody(&body, request)
	glog.Error(body.Message)
}

func main() {
	flag.Parse()
	glog.Info("starting server...")
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/info", stdOut).Methods("POST")
	router.HandleFunc("/error", stdErr).Methods("POST")
	glog.Fatal(http.ListenAndServe(":8080", router))
}
