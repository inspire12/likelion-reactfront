#!/bin/bash

FILE_LIST="tree-files.txt"
EXCLUDED_EXTENSIONS=("svg" "png" "jpg" "jpeg" "gif" "mp4" "mov" "webp" "ico" "mp3" "wav")

if [ ! -f "$FILE_LIST" ]; then
  echo "[ERROR] $FILE_LIST 파일이 없습니다. 먼저 파일 목록을 만들어주세요."
  exit 1
fi

OUTPUT=""

while IFS= read -r file; do
  ext="${file##*.}"
  skip=false

  # 확장자가 제외 목록에 있으면 skip
  for exclude in "${EXCLUDED_EXTENSIONS[@]}"; do
    if [[ "$ext" == "$exclude" ]]; then
      skip=true
      break
    fi
  done

  if [ "$skip" = true ]; then
    continue
  fi

  if [ -f "$file" ]; then
    OUTPUT+=$'// '"$file"$'\n'
    OUTPUT+=$'-----------------------\n'
    OUTPUT+="$(cat "$file")"
    OUTPUT+=$'\n\n'
  else
    OUTPUT+=$'// '"$file (존재하지 않음)"$'\n\n'
  fi
done < "$FILE_LIST"

# 클립보드 복사 (macOS)
echo "$OUTPUT" | pbcopy

echo "📋 텍스트 파일 내용이 클립보드에 복사되었습니다!"
