#!/bin/bash

# USAGE
# Allow: chmod +x copy_files_by_path.sh if you need permissions
# Prepare: a .txt file containing the paths of easy file to copy, one per line.
# Note: File paths should all be the same format within your .txt
# Run: ./copy_files_by_path.sh file_paths.txt /path/to/target_folder

# Should handle relative and absolute paths for args
# Should handle relative and absolute paths for file names to be copied
# Should also handle if your .txt doesnt end in a newline (caused an issue before)

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_file.txt> <target_folder>"
    exit 1
fi

INPUT_FILE="$1"
TARGET_FOLDER="$2"
INPUT_FILE=$(realpath "$INPUT_FILE")
TARGET_FOLDER=$(realpath "$TARGET_FOLDER")

if [ ! -f "$INPUT_FILE" ]; then
    echo "Input file not found: $INPUT_FILE"
    exit 1
fi

# Validate for path-like strings so we dont do super weird stuff
if ! grep -qE '^(/[^/ ]*|[^/ ][^ ]*)+$' "$INPUT_FILE"; then
    echo "Error: Input file contains invalid paths. Ensure it only includes valid path strings."
    exit 1
fi

# Create the target folder if it doesn't exist
mkdir -p "$TARGET_FOLDER"

COUNT=0
while IFS= read -r FILE_PATH || [ -n "$FILE_PATH" ]; do
    ABS_PATH=$(realpath "$FILE_PATH" 2>/dev/null)
    echo "$ABS_PATH"
    if [ -f "$ABS_PATH" ]; then
        cp "$ABS_PATH" "$TARGET_FOLDER"
        echo "Copied: $ABS_PATH"
        ((COUNT++))
    else
        echo "File not found: $FILE_PATH"
    fi
done < "$INPUT_FILE"

echo "Total files copied: $COUNT"
