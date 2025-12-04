Hello DevOps App

Egy "Hello world" szintű Node.js alkalmazás, amelyet a DevOps feladatok (buildelés, Git, Dockerizálás) bemutatására készítettünk.

1. Alkalmazás Elindítása (Fejlesztési mód)

Dependenciák telepítése:

npm install


Indítás:

npm start


Az alkalmazás ezután elérhető lesz a http://localhost:8080 címen.

2. Buildelés

Node.js alkalmazások esetén a "build" lépés általában a dependenciák telepítését jelenti.

Build parancs:

npm run build


Ezt követően az alkalmazás készen áll a futtatásra.

3. Git Használat (Trunk-Based Development)

A projekt a trunk-based development elvet követi, ahol a main a stabil fő ág (trunk).

Változtatási lépések:

Inicializálás: git init (Ezt már elvégeztem a repó létrehozásakor.)

Kezdeti commit: git commit -m "feat: Initial setup for DevOps Hello World app"

Feature branch létrehozása:
git checkout -b feature/add-greeting-time

Változtatás commitja a feature branch-en:
Például, a server.js fájlba hozzáadtuk a timestamp-et (a server.js 10. sora mutatja a változást).
git commit -m "feat: Include current server time in greeting"

Vissza a main ágra:
git checkout main

Feature branch beolvasztása:
git merge feature/add-greeting-time

Új feature commit a main-re (pl. dependenciák frissítése):
git commit -m "chore: Update dependency information in package.json"

4. Dockerizálás

A konténerkép tartalmazza az alkalmazást és automatikusan elindítja azt.

Kép buildelése

docker build -t hello-devops:v1 .


Megjegyzés: A kép neve és tag-je (jelen esetben hello-devops:v1) opcionálisan változtatható. A . jelenti az aktuális könyvtárat, ahol a Dockerfile található.

Konténer futtatása

docker run -p 8080:8080 hello-devops:v1


Magyarázat: A -p 8080:8080 az jelenti, hogy a host gép 8080-as portját összekapcsoljuk a konténer 8080-as portjával. Ez teszi elérhetővé az alkalmazást a http://localhost:8080 címen.

Elérés

Az alkalmazás elérhető a http://localhost:8080 címen, akár lokálisan futtatva, akár a Docker konténerben.
# Hello DevOps App

## 2.2. Buildelés (Helyi)

A függőségek telepítése:
```bash
npm install
<img width="939" height="736" alt="Képernyőkép 2025-12-04 175409" src="https://github.com/user-attachments/assets/ddf345cc-de33-4cea-a55c-c158cf629a8e" />
<img width="1665" height="641" alt="Képernyőkép 2025-12-04 175556" src="https://github.com/user-attachments/assets/1a6b0b33-bde5-4cbd-834b-aab2d40b72dc" />

