read -p 'URL: ' URL
read -p 'Title: ' title
read -p 'Artist: ' artist
read -p 'Album: ' album
read -p 'Genre: ' genre
echo $URL $title $artist $genre
youtube-dl -x --audio-format m4a --add-metadata --postprocessor-args "-metadata title='$title' -metadata artist='$artist' -metadata album='$album' -metadata genre='$genre'" --audio-quality 4 --abort-on-error --geo-bypass --mark-watched -o "fromyt.%(ext)s" $URL
if [ -f fromyt.m4a ] 
then 
    echo "Opening in Music"
    open -a Music fromyt.m4a
    read -p "Press enter to delete and finish."
    rm fromyt.m4a
else
    echo "Conversion didn't work, deleting the download file."
    [ -f fromyt.webm.part ] && rm fromyt.webm.part || rm fromyt.webm
fi

# Simple script for my personal use, since I keep track of all my music. Custom metadata insertion, automatic file opening and download file deletion.

# In .bashrc:
# # Download song or playlist from youtube via youtube-dl
# alias yt="source $PATH/ytmp3.sh"


# DOCUMENTATION
# https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme

# OTHER SCRIPTS
# https://www.reddit.com/r/youtubedl/wiki/info-scripts#wiki_yt-splitter_.28mp3.29_by_.2Fu.2Fredsolver

# pip install youtube-dl
# pip install ffmpeg
# ffprobe is included in ffmpeg.
# Alternatively, brew for mac.

# youtube-dl [OPTIONS] URL [URL...]
