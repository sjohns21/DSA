class Image {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}

function masonry_layout(images, num_columns = 2, screen_width = 800) {
  // find width per column
  const widthPerColumn = screen_width / num_columns // 400

  const columns = []
  // build nested arrays
  for (let i = 0; i < num_columns; i++) {
    columns[i] = []
  }

  // find scale factor, scale each image
  images.forEach((image, index) => {
    // widthPerColumn = image.width * scaleFactor
    // scaleFactor = widthPerColumn / image.width
    const scaleFactor = widthPerColumn / image.width
    image.width = Math.round(widthPerColumn)
    image.height = Math.round(scaleFactor * image.height)

    // find column index to insert image at
    const columnIndex = index % num_columns // index 0 % 2 = 0, index 1 % 2 = 1, index 2 % 2 = 0
    columns[columnIndex].push(image)
  })
  return columns
}

const columns = masonry_layout([
  new Image(1, 1),
  new Image(1, 2),
  new Image(3, 2),
  new Image(1200, 1000)])
console.log(columns)
