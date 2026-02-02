package main

import (
	"os"
	"regexp"
	"strings"
)

func main() {
	_ = minifyFile("index.html")
	_ = minifyFile("style.css")
}

func minifyFile(filename string) error {
	content, err := os.ReadFile(filename)
	if err != nil {
		return err
	}

	minified := string(content)

	if strings.HasSuffix(filename, ".html") {
		minified = minifyHTML(minified)
	} else if strings.HasSuffix(filename, ".css") {
		minified = minifyCSS(minified)
	}

	return os.WriteFile(filename, []byte(minified), 0644)
}

func minifyHTML(html string) string {
	reComment := regexp.MustCompile(`<!--[\s\S]*?-->`)
	html = reComment.ReplaceAllString(html, "")

	reWhitespace := regexp.MustCompile(`>\s+<`)
	html = reWhitespace.ReplaceAllString(html, "><")

    reMultiSpace := regexp.MustCompile(`\s{2,}`)
    html = reMultiSpace.ReplaceAllString(html, " ")

	return strings.TrimSpace(html)
}

func minifyCSS(css string) string {
	reComment := regexp.MustCompile(`/[*][\s\S]*?[*]/`)
	css = reComment.ReplaceAllString(css, "")

	rePunctuation := regexp.MustCompile(`\s*([:;{}])\s*`)
	css = rePunctuation.ReplaceAllString(css, "$1")
    
    reLastSemi := regexp.MustCompile(`;}`)
    css = reLastSemi.ReplaceAllString(css, "}")

    reNewlines := regexp.MustCompile(`\n`)
    css = reNewlines.ReplaceAllString(css, "")
    
    reMultiSpace := regexp.MustCompile(`\s{2,}`)
    css = reMultiSpace.ReplaceAllString(css, " ")

	return strings.TrimSpace(css)
}