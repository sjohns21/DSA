function print_tree(height, hollow) {
  // const padding = height - 2
  for (let i = 0; i < height - 1; i++) {
    let str = ""
    for (let j = 0; j < height - 2 - i; j++) {
      str += "-"
    }
    for (let k = 0; k < (i * 2) + 1; k++) {
      if (hollow && i < height - 2) {
        if (k === 0 || k === (i * 2)) {
          str += "X"
        } else {
          str += "-"
        }
      } else {
        str += "X"
      }
    }
    for (let j = 0; j < height - 2 - i; j++) {
      str += "-"
    }
    console.log(str)
  }
  let str = ""
  for (let j = 0; j < height - 2; j++) {
    str += "-"
  }
  str += "X"
  for (let j = 0; j < height - 2; j++) {
    str += "-"
  }
  console.log(str)
}

function printTree(height, hollow) {
  for (let i = 0; i < height - 1; i++) {
    generateLevel(height - 2 - i, i*2+1, hollow, height)
  }
  generateLevel(height-2, 1)
}

function generateLevel(padding, tree, hollow, height) {
  let str = ""
  for (let i = 0; i < padding; i++) {
    str += "-"
  }
  for (let i = 0; i < tree; i++) {
    if (hollow && padding > 0) {
      if (i === 0 || i === tree - 1) {
        str += "X"
      } else {
        str += "-"
      }
    } else {
      str += "X"
    }
  }
  for (let i = 0; i < padding; i++) {
    str += "-"
  }
  console.log(str)
}

// print_tree(10, false)
// printTree(10, false)
// print_tree(6, false)
// printTree(6, false)
print_tree(10, true)
printTree(10, true)

/*
# Write a function print_tree that takes in an integer height and a boolean hollow and prints a Christmas tree, example output is below.
# You can assume height will be even, and is >= 4
#
#
# print_tree(10, false)
# --------X-------- i=0 padding=8 tree=1 padding=8 padding=height-2-i tree=2*i+1
# -------XXX------- i=1 padding=7 tree=3 padding=7
# ------XXXXX------ i=2 padding=6 tree=5 padding=6
# -----XXXXXXX-----
# ----XXXXXXXXX----
# ---XXXXXXXXXXX---
# --XXXXXXXXXXXXX--
# -XXXXXXXXXXXXXXX-
# XXXXXXXXXXXXXXXXX
# --------X--------
#
# print_tree(6, false)
# ----X---- i=0 padding=4 tree=1
# ---XXX---
# --XXXXX--
# -XXXXXXX-
# XXXXXXXXX
# ----X----
#
#
# print_tree(10, true)
# --------X--------
# -------X-X-------
# ------X---X------
# -----X-----X-----
# ----X-------X----
# ---X---------X---
# --X-----------X--
# -X-------------X-
# XXXXXXXXXXXXXXXXX
# --------X--------
*/
