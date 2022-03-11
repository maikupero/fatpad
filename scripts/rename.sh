########################################################
# for file in *easy_
# do
#   # ${string/substring/substitution}
#   mv "$file" "${file/easy_/_}"
# done
# -vn Optional see output

# for file in *; do mv "$file" "${file/easy_/_}"; done
# for file in *.py; do mv "$file" "${file/easy1.py/1.py}"; done
# Very cool rename script here.
# https://github.com/RonaldBarnes/bash-rename/blob/master/ren

########################################################
#!/bin/bash
# Take the search text
read -p "Enter the search text:" search
# Take the replace text
read -p "Enter the replace text:" replace

# Rename all files that match with the pattern
$(mv "s" "s/.$search/.$replace/" *)
echo "The files have been renamed."


########################################################
for f in *; do mv "$f" "$(echo "$f" | sed s/IMG/VACATION/)"; done

counter = 1;
for f in *._; 
do mv "$f%" "$counter%" $((counter++));
done