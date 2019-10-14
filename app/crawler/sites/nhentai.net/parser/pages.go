package parser

import (
	"fmt"
	"regexp"
)

// PagesParser 正则提取漫画详情页上的漫画所有页的图片URL.
func PagesParser(resp []byte) ([]string, string) {
	var pageUrlsList []string
	var pictureType string

	// 由于每页图片和漫画的id是不同的 每页图片格式也可能是jpg或png 所以提取判断一下
	idRegex := regexp.MustCompile(`https://t.nhentai.net/galleries/(\w+)/cover.(jpg|png)`)
	idRes := idRegex.FindSubmatch(resp)
	if len(idRes) == 0 {
		return pageUrlsList, pictureType
	}
	mangaID := string(idRes[1])
	pictureType = string(idRes[2])

	//只要提取页数即可 因为是有规律的 按顺序排下去的
	pageRegex := regexp.MustCompile(`<a class="gallerythumb" href="(.+?)"`)
	allPages := pageRegex.FindAllSubmatch(resp, -1)
	for k := range allPages {
		thisURL := fmt.Sprintf("https://i.nhentai.net/galleries/%s/%d.%s", mangaID, k+1, pictureType)
		pageUrlsList = append(pageUrlsList, thisURL)
	}
	return pageUrlsList, pictureType
}
