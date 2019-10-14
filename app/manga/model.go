package manga

import "github.com/jinzhu/gorm"

// Manga 漫画实体.
type Manga struct {
	gorm.Model
	Name        string    `json:"name"`
	Author      string    `json:"author"`
	Popularity  string    `json:"popularity"`
	Score       string    `json:"score"`
	Tags        []Tag     `json:"tags"`
	Chapters    []Chapter `json:"chapters"`
	ChaptersNum int       `json:"chapters_num"`
	PagesNum    int       `json:"pages_num"`
	ImageUrl    string    `json:"image_url"`
	Desc        string    `json:"desc"`
}

// Tag 漫画对应的标签.
type Tag struct {
	ID   int
	Name string
}

// Chapter 章节.
type Chapter struct {
	gorm.Model
	Pages    []Page `json:"pages"`
	PagesNum int    `json:"pages_num"`
}

// Page 章节内的页
type Page struct {
	gorm.Model
	ImageUrl string `json:"image_url"`
}
