@echo off

xcopy /E /I /Y "build" "C:\Users\bruno\Documentos\GitHub\FIN_site\docs"

cd ..

cd FIN_site

git add .

git commit -m "update site"

git push

cd ..

cd financas

rmdir "build" /S /Q