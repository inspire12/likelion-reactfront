# 파일 목록 경로
$FileListPath = "tree-files.txt"

# 제외할 확장자 목록
$ExcludedExtensions = @("svg", "png", "jpg", "jpeg", "gif", "mp4", "mov", "webp", "ico", "mp3", "wav")

if (!(Test-Path $FileListPath)) {
    Write-Host "[ERROR] $FileListPath 파일이 없습니다."
    exit
}

$Output = ""

# 파일 목록 반복
Get-Content $FileListPath | ForEach-Object {
    $File = $_
    $Extension = [System.IO.Path]::GetExtension($File).TrimStart('.').ToLower()

    if ($ExcludedExtensions -contains $Extension) {
        return
    }

    if (Test-Path $File) {
        $Output += "// $File`r`n"
        $Output += "-----------------------`r`n"
        $Output += Get-Content $File -Raw
        $Output += "`r`n`r`n"
    } else {
        $Output += "// $File (존재하지 않음)`r`n`r`n"
    }
}

# 클립보드에 복사
Set-Clipboard -Value $Output

Write-Host "📋 텍스트 파일 내용이 클립보드에 복사되었습니다!"
