@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    set /p "TITLE=Titulo da nota: "
) else (
    set "TITLE=%~1"
)

if "!TITLE!"=="" (
    echo Erro: titulo nao pode ser vazio.
    exit /b 1
)

for /f "tokens=1-6 delims=/:. " %%a in ("%date:~6,4%%date:~3,2%%date:~0,2%%time: =0%") do (
    set "DATESTAMP=%date:~6,4%%date:~3,2%%date:~0,2%"
)

set "HH=%time:~0,2%"
if "%HH:~0,1%"==" " set "HH=0%HH:~1,1%"
set "MM=%time:~3,2%"
set "DATESTAMP=%date:~6,4%%date:~3,2%%date:~0,2%"
set "ID=%DATESTAMP%%HH%%MM%"

set "FILEPATH=zettel\%ID%.mdx"
set "TODAY=%date:~6,4%-%date:~3,2%-%date:~0,2%"

(
echo ---
echo title: "!TITLE!"
echo sidebar_label: "%ID% - !TITLE!"
echo tags: []
echo date: %TODAY%
echo ---
echo.
echo # !TITLE!
echo.
echo.
echo.
echo ## Links
echo.
) > "%FILEPATH%"

echo Nota criada: %FILEPATH%
code "%FILEPATH%"
