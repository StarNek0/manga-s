package main

import (
	"fmt"
	"github.com/zsdostar/manga-s/crawler/fetcher"
	"github.com/zsdostar/manga-s/crawler/sites/nhentai.net/parser"
	"path"
)

var siteName = "nhentai"
var siteUrl = "https://nhentai.net"

// Run 单任务版爬虫
func Run(mangaIds ...string) {
	for _, mangaId := range mangaIds {
		var pageUrl = siteUrl + "/g/" + mangaId

		resp, _ := fetcher.Fetch(pageUrl, true)
		pageUrlsList, pictureType := parser.PagesParser(resp)

		for k, v := range pageUrlsList {
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
