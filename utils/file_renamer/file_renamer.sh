cd ./files
files=$(ls)

found=0
mode=""
modes=("dates")
while [[ $found != 1 ]]; do

  echo -n "Mode? Choose from: "
  for i in "${modes[@]}"; do
    echo "$i"
  done

  read -r ans
  for i in "${modes[@]}"; do
    if [[ $ans == $i ]]; then 
      found=1
      mode=$ans
    fi
  done
done



# rename to date
if [[ $mode == 'dates' ]]; then

  echo "Formatting will look like this:"
  for file in $files; do
    month=$(stat "$file" | awk '{print $21}' | tr -d '"')
    day=$(stat "$file" | awk '{print $22}')
    echo $month-$day-#
    break
  done
  echo "Confirm: [y/n]"
  read confirmFormat
  if [[ $confirmFormat == 'n' ]]; then
    return 0
  fi

  currentDay=0
  declare -i count
  for file in $files; do
    month=$(stat "$file" | awk '{print $21}' | tr -d '"')
    day=$(stat "$file" | awk '{print $22}')

    if [[ $currentDay == $day ]]; then
      count+=1
    elif [[ $currentDay != $day ]]; then
      currentDay=$day
      count=1
    fi

    # Convert the month string to numbers
    case $month in
      Jan) month="01" ;;
      Feb) month="02" ;;
      Mar) month="03" ;;
      Apr) month="04" ;;
      May) month="05" ;;
      Jun) month="06" ;;
      Jul) month="07" ;;
      Aug) month="08" ;;
      Sep) month="09" ;;
      Oct) month="10" ;;
      Nov) month="11" ;;
      Dec) month="12" ;;
      *) echo "Unknown month: $month"
        exit 1
        ;;
    esac
  
    # new file name
    date="${month}-${day}-${count}"

    echo "renaming ${file} --> ${date}"
    # rename file
    mv "$file" "${date}.jpeg"
  done
fi

