# Fix Node.js + npm PATH setup for PowerShell (permanent + current session)

Write-Host "Fixing Node.js and npm PATH setup..."

# Node.js default path
$nodePath = "C:\Program Files\nodejs"

# npm global bin path
$npmGlobalBin = "$env:APPDATA\npm"

# Add to current session PATH
$env:Path += ";$nodePath;$npmGlobalBin"

# Update User Environment Variables (permanent)
$oldPath = [System.Environment]::GetEnvironmentVariable("Path", "User")

if (-not $oldPath.Contains($nodePath)) {
    [System.Environment]::SetEnvironmentVariable("Path", "$oldPath;$nodePath", "User")
    Write-Host "Added Node.js path permanently"
}

if (-not $oldPath.Contains($npmGlobalBin)) {
    [System.Environment]::SetEnvironmentVariable("Path", "$oldPath;$npmGlobalBin", "User")
    Write-Host "Added npm global bin path permanently"
}

Write-Host "Done! Please restart VS Code / PowerShell to apply permanent changes."
Write-Host "Test with: node -v, npm -v, tsc -v"
