$ErrorActionPreference = "Stop"
$ToolsDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not (Test-Path $env:ChocolateyInstall\license -PathType Container)) {
    $null = New-Item $env:ChocolateyInstall\license -ItemType Directory -Force
}
Copy-Item -Path $ToolsDir\chocolatey.license.xml -Destination $env:ChocolateyInstall\license\chocolatey.license.xml -Force
