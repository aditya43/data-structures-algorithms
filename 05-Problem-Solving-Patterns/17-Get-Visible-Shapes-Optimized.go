/**
 * Visible Mountains
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 * @check 05-Problem-Solving-Patterns/visible_mountains.png
 *
 * @param triangles Array of triangle coordinates in 2D Space (x, y)
 */
package main

import (
	"fmt"
	"sort"
)

func get2dCords(triangle []int) (int, int) {
	left := triangle[0] - triangle[1]
	right := triangle[0] + triangle[1]

	return left, right
}

func getVisibleMountains(triangles [][]int) int {
	visibleCount := len(triangles)

	// Sort triangles by size from small to large
	sort.Slice(triangles, func(i, j int) bool {
		curTriangleLeft, curTriangleRight := get2dCords(triangles[i])
		otherTriangleLeft, otherTriangleRight := get2dCords(triangles[j])

		curTriangleLength := curTriangleRight - curTriangleLeft
		otherTriangleLength := otherTriangleRight - otherTriangleLeft

		return curTriangleLength < otherTriangleLength
	})

	for i := range triangles {
		curTriangleLeft, curTriangleRight := get2dCords(triangles[i])
		for j := len(triangles) - 1; j > i; j-- {
			otherTriangleLeft, otherTriangleRight := get2dCords(triangles[j])
			if otherTriangleLeft <= curTriangleLeft && otherTriangleRight >= curTriangleRight {
				visibleCount -= 1
				break
			}
		}
	}

	return visibleCount
}

func main() {
	mountains := [][]int{
		{3, 1},
		{5, 2},
		{7, 2},
		{7, 4},
		{2, 5},
		{4, 4},
		{11, 6},
		{5, 4},
	}
	visibleCount := getVisibleMountains(mountains)

	fmt.Println(visibleCount)
}
