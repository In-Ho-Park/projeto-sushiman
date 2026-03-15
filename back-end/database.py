import sqlite3

def inicializar_banco():
    conn = sqlite3.connect('sushi.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS cardapio (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT,
            preco REAL NOT NULL
        )
    ''')
    
    # Limpa a tabela antes de inserir para não duplicar nos testes
    cursor.execute("DELETE FROM cardapio")
    
    cursor.execute("INSERT INTO cardapio (nome, descricao, preco) VALUES ('Combo Evento Premium', '500 peças variadas', 3000.00)")
    cursor.execute("INSERT INTO cardapio (nome, descricao, preco) VALUES ('Combo Evento Clássico', '500 variadas', 2500.00)")
    cursor.execute("INSERT INTO cardapio (nome, descricao, preco) VALUES ('Combo Evento Contemporâneo', '500 peças variadas', 3500.90)")
    
    conn.commit()
    conn.close()
    print("Banco de dados pronto e sushis cadastrados!")

if __name__ == "__main__":
    inicializar_banco()