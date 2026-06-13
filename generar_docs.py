import os

def crear_mapa():
    mapa_final = "### CONTEXTO TOTAL DEL PROYECTO\n\n"
    mapa_final += "## 1. Estructura de Archivos\n```text\n"
    
    # Generar estructura
    for root, dirs, files in os.walk('.'):
        if 'venv' in dirs: dirs.remove('venv')
        if '.git' in dirs: dirs.remove('.git')
        level = root.replace('.', '').count(os.sep)
        mapa_final += ' ' * 4 * level + os.path.basename(root) + "/\n"
        for f in files:
            mapa_final += ' ' * 4 * (level + 1) + f + "\n"
    mapa_final += "```\n\n"

    # 2. Contenido de archivos
    # Buscamos archivos de texto comunes
    for root, dirs, files in os.walk('.'):
        if 'venv' in dirs: dirs.remove('venv')
        if '.git' in dirs: dirs.remove('.git')
        
        for f in files:
            if f.endswith(('.py', '.html', '.css', '.txt', '.md')):
                path = os.path.join(root, f)
                mapa_final += f"## Contenido: {path}\n```\n"
                try:
                    # 'replace' evita el error de Unicode aunque haya caracteres extraños
                    with open(path, 'r', encoding='utf-8', errors='replace') as file:
                        mapa_final += file.read()
                except Exception as e:
                    mapa_final += f"No se pudo leer: {e}"
                mapa_final += "\n```\n\n"

    with open("CONTEXTO_TOTAL.md", "w", encoding='utf-8') as f:
        f.write(mapa_final)
    print("¡Éxito! Archivo 'CONTEXTO_TOTAL.md' generado.")

if __name__ == "__main__":
    crear_mapa()