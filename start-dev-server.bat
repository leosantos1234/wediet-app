@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo [INFO] Dependencias nao encontradas. Rodando npm install...
  npm install
  if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias.
    pause
    exit /b 1
  )
)

echo [INFO] Iniciando servidor de desenvolvimento...
npm run dev

if errorlevel 1 (
  echo [ERRO] Falha ao iniciar o servidor.
  pause
  exit /b 1
)

endlocal
