#!/bin/bash
FILE="projectcv.html"
echo "Checking $FILE for HTML tags"
echo ""

echo "div tags: $(grep -o '<div' $FILE | wc -l)"
echo "img tags: $(grep -o '<img' $FILE | wc -l)"
echo "a links tags: $(grep -o '<a' $FILE | wc -l)"
echo "h tags: $(grep -oE '<h[0-9]+' $FILE | wc -l)"

echo ""
echo "done"


