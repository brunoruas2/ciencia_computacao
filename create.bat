@echo off

xcopy /E /I /Y "site" "C:\Users\bruno\Documentos\GitHub\CC_site\docs"

cd ..

cd CC_site

git add .

git commit -m "update site"

git push

cd ..

cd ciencia_computacao

rmdir "site" /S /Q