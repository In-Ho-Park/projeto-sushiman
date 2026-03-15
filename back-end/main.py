from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3


app = FastAPI()

# Segurança: Permite que o front (5173) acesse o back (8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/cardapio")
def listar_cardapio():
    conn = sqlite3.connect('sushi.db')
    cursor = conn.cursor()
    # Buscamos os nomes, descricoes e precos

    cursor.execute("SELECT nome, descricao, preco FROM cardapio")
    linhas = cursor.fetchall()
    
    conn.close()
    # transformamos em uma lista de objetos para o react entender faciilmente
    return [
        {"nome": l[0], "descricao": l[1], "preco": l[2]} for l in linhas
    ]
@app.get("/")

def home():
    return {"status": "Sushiman API online! 🍣"}
