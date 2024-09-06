cp -r ./config/* ./autowrx
cd ./autowrx
npm install --force
npm run build
cp -r ./dist ../dist
cd ..