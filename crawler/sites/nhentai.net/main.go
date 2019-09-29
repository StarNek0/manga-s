package main

import (
	"fmt"
	"github.com/zsdostar/manga-s/crawler/fetcher"
	"github.com/zsdostar/manga-s/crawler/sites/nhentai.net/parser"
	"path"
)

var siteName = "nhentai"
var siteURL = "https://nhentai.net"

// Run 单任务版爬虫.
func Run(mangaIDs ...string) {
	for _, mangaID := range mangaIDs {
		var pageURL = siteURL + "/g/" + mangaID

		resp, _ := fetcher.Fetch(pageURL, true)
		pageURLsList, pictureType := parser.PagesParser(resp)

		for k, v := range pageURLsList {
			fileName := fmt.Sprintf("%d.%s", k+1, pictureType)
			filePath := path.Join(siteName, "258972", fileName)
			err := fetcher.FetchToFile(v, filePath)
			if err != nil {
			}
		}
	}

}
func main() {
	Run("258972")
}
