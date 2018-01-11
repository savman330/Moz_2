#!/bin/bash
# another test...this time pass a filename as an argument and then use touch to create a new file in a path
# ok lets make the path dynamic with second variable

 #$file_name=$1
#$path=$2

# ok so I want to create files from a root and have the fileanme appended on a js comment

echo '// ' $1 '.js' >> ./$2/$1.js