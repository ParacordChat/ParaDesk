#!/bin/bash
wails build -platform darwin/universal
wails build -platform linux/amd64,linux/arm64
wails build -nsis -platform windows/amd64,windows/arm64

cd build/bin/

mv Paracord-darwin-x64/Paracord.app ./Paracord-mac-intel.app
mv Paracord-darwin-arm64/Paracord.app ./Paracord-mac-m1.app
rm -rf Paracord-darwin-*

touch sums.nfo
echo "Sums:" >> sums.nfo

for folder in ./*; do
    # hash folder
    hash=$(echo "$folder" | md5sum | cut -d' ' -f1)

    #compress and add comment with hash
    zip -r "./$(basename "$folder").zip" "$folder"

    # add hash to sums.nfo
    echo " - $folder - $hash" >> sums.nfo

    rm -rf "$folder"
done

cd ../../