@echo off

rmdir "C:\Users\bruno\Documentos\GitHub\CC_site\docs" /S /Q
xcopy /E /I /Y "build" "C:\Users\bruno\Documentos\GitHub\CC_site\docs"

cd ..

cd CC_site

git add .

git commit -m "update site"

git push

cd ..

cd ciencia_computacao

rmdir "build" /S /Q