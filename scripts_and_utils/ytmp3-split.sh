# https://github.com/yt-dlp/yt-dlp#installation
# brew install yt-dlp/taps/yt-dlp

# Update - or brew upgrade yt-dlp/taps/yt-dlp
# yt-dlp -U
read -p 'URL: ' URL
read -p 'Album: ' album
read -p 'Genre: ' genre
echo $URL $album $genre
mkdir fromyt
youtube-dl -x --audio-format m4a --audio-quality 4 --add-metadata --postprocessor-args "-metadata album='$album' -metadata genre='$genre'"  --abort-on-error --geo-bypass --mark-watched -o "./fromyt/%(id)s.%(ext)s" $URL
if [ fromyt ] 
then 
    for SONG in fromyt
    do
        echo "Opening $SONG in Music"
        open -a Music $SONG
    done
fi
read -p "Press enter to delete and finish."
rm -rf fromyt

# Simple script for my personal use, since I keep track of all my music. Custom metadata insertion, automatic file opening and download file deletion.

# In .bashrc:
# # Download song or playlist from youtube via youtube-dl
# alias yt="source $PATH/ytmp3.sh"


# DOCUMENTATION
# https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme

# pip install youtube-dl
# pip install ffmpeg
# pip install ffprobe
# Alternatively, brew for mac.

# youtube-dl [OPTIONS] URL [URL...]
