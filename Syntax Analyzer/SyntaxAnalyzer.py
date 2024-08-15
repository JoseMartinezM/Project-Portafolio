import re  # Importa el modulo de expresiones regulares de Python

# Especificación de los tokens
especificacion_token = [
    ('PROGRAMA', r'\bPrograma\b'),  # Token para la palabra clave "Programa"
    ('PRINCIPAL', r'\bprincipal\b'),   # Token para la palabra clave "principal"
    ('TIPO', r'\bEntero\b|\bReal\b'),  # Tokens para tipos de datos: Entero o Real
    ('COMENTARIO', r'//.*'),        # Token para comentarios de una línea
    ('FLotante', r'\b\d+\.\d+([eE][-+]?\d+)?\b'),  # Token para números flotantes
    ('ENTERO', r'\b\d+\b'),         # Token para números enteros
    ('ASIGNAR', r'='),              # Token para el operador de asignacion
    ('MAS', r'\+'),                 # Token para el operador de suma
    ('MENOS', r'-'),                # Token para el operador de resta
    ('MULT', r'\*'),                # Token para el operador de multiplicacion
    ('DIV', r'/'),                  # Token para el operador de division
    ('POTENCIA', r'\^'),            # Token para el operador de potencia
    ('PIZQ', r'\('),                # Token para el paréntesis izquierdo
    ('PDER', r'\)'),                # Token para el paréntesis derecho
    ('LLAVEIZQ', r'\{'),            # Token para la llave izquierda
    ('LLAVEDER', r'\}'),            # Token para la llave derecha
    ('PUNTOYCOMA', r';'),           # Token para el punto y coma
    ('VARIABLE', r'\b[a-zA-Z][a-zA-Z0-9]*_?\b'),  # Token para identificadores de variables
    ('IGNORAR', r'[ \t]+'),         # Token para ignorar espacios en blanco y tabulaciones
    ('NUEVALINEA', r'\n'),          # Token para nuevas lineas
    ('COINCIDENTE', r'.'),          # Token para cualquier otro carácter
]

# Creación de la expresion regular para reconocer los tokens
expresion_regular = '|'.join(f'(?P<{par[0]}>{par[1]})' for par in especificacion_token)
obtener_token = re.compile(expresion_regular).match

# Función para tokenizar el codigo fuente
def tokenizar(codigo):
    num_linea = 1
    inicio_linea = 0
    tokens = []
    mo = obtener_token(codigo)
    while mo is not None:
        tipo = mo.lastgroup
        valor = mo.group(tipo)
        if tipo == 'NUEVALINEA':
            inicio_linea = mo.end()
            num_linea += 1
        elif tipo in ('IGNORAR', 'COMENTARIO'):
            pass
        elif tipo == 'COINCIDENCIA':
            raise RuntimeError(f'{repr(codigo[mo.start()])} inesperado en la línea {num_linea}')
        else:
            tokens.append((tipo, valor, num_linea, mo.start() - inicio_linea))
        mo = obtener_token(codigo, mo.end())
    if mo is not None:
        raise RuntimeError(f'{repr(codigo[mo.start()])} inesperado en la línea {num_linea}')
    return tokens

# Funcion para leer el archivo y analizar el contenido
def analizar_archivo(ruta_archivo):
    with open(ruta_archivo, 'r') as archivo:
        codigo = archivo.read()
    return tokenizar(codigo)

# Nodo del arbol de derivacion
class Nodo:
    def __init__(self, tipo, valor=None):
        self.tipo = tipo
        self.valor = valor
        self.hijos = []

    def agregar_hijo(self, hijo):
        self.hijos.append(hijo)

    def __repr__(self, nivel=0):
        ret = "\t" * nivel + repr(self.tipo) + ": " + repr(self.valor) + "\n"
        for hijo in self.hijos:
            ret += hijo.__repr__(nivel + 1)
        return ret

# Definición del analizador sintactico
class AnalizadorSintactico:
    def __init__(self, tokens):
        self.tokens = tokens
        self.posicion = 0
        self.token_actual = self.tokens[self.posicion]

    # Avanzar al siguiente token
    def avanzar(self):
        self.posicion += 1
        if self.posicion < len(self.tokens):
            self.token_actual = self.tokens[self.posicion]
        else:
            self.token_actual = ('EOF', '', -1, -1)

    # Comprobar si el token actual es del tipo esperado y avanzar si es así
    def esperar(self, tipo_token):
        if self.token_actual[0] == tipo_token:
            self.avanzar()
        else:
            raise SyntaxError(f"Esperaba {tipo_token} pero encontré {self.token_actual}")

    # Metodo principal para iniciar el análisis sintáctico
    def analizar(self):
        return self.programa()

    # Regla gramatical para el programa
    def programa(self):
        nodo = Nodo('Programa')
        self.esperar('PROGRAMA')
        nodo.agregar_hijo(Nodo('PROGRAMA', 'Programa'))
        self.esperar('LLAVEIZQ')
        nodo.agregar_hijo(Nodo('LLAVEIZQ', '{'))
        nodo.agregar_hijo(self.inicio())
        self.esperar('LLAVEDER')
        nodo.agregar_hijo(Nodo('LLAVEDER', '}'))
        return nodo

    # Regla gramatical para el inicio
    def inicio(self):
        nodo = Nodo('inicio')
        self.esperar('PRINCIPAL')
        nodo.agregar_hijo(Nodo('PRINCIPAL', 'principal'))
        self.esperar('PIZQ')
        nodo.agregar_hijo(Nodo('PIZQ', '('))
        self.esperar('PDER')
        nodo.agregar_hijo(Nodo('PDER', ')'))
        self.esperar('LLAVEIZQ')
        nodo.agregar_hijo(Nodo('LLAVEIZQ', '{'))
        while self.token_actual[0] != 'LLAVEDER':
            nodo.agregar_hijo(self.enunciado())
        self.esperar('LLAVEDER')
        nodo.agregar_hijo(Nodo('LLAVEDER', '}'))
        return nodo

    # Regla gramatical para los enunciados
    def enunciado(self):
        nodo = Nodo('enunciado')
        nodo.agregar_hijo(self.tipo())
        nodo.agregar_hijo(self.variable())
        self.esperar('ASIGNAR')
        nodo.agregar_hijo(Nodo('ASIGNAR', '='))
        nodo.agregar_hijo(self.expr())
        self.esperar('PUNTOYCOMA')
        nodo.agregar_hijo(Nodo('PUNTOYCOMA', ';'))
        return nodo

    # Regla gramatical para los tipos
    def tipo(self):
        nodo = Nodo('tipo')
        if self.token_actual[0] == 'TIPO':
            nodo.agregar_hijo(Nodo('TIPO', self.token_actual[1]))
            self.avanzar()
        else:
            raise SyntaxError(f"Esperaba un tipo de dato pero encontré {self.token_actual}")
        return nodo

    # Regla gramatical para las variables
    def variable(self):
        nodo = Nodo('variable')
        if self.token_actual[0] == 'VARIABLE':
            nodo.agregar_hijo(Nodo('VARIABLE', self.token_actual[1]))
            self.avanzar()
        else:
            raise SyntaxError(f"Esperaba un nombre de variable pero encontré {self.token_actual}")
        return nodo

    # Regla gramatical para la expresion
    def expr(self):
        nodo = Nodo('expr')
        nodo.agregar_hijo(self.termino())
        while self.token_actual[0] in ('MAS', 'MENOS'):
            op = self.token_actual[1]
            self.avanzar()
            nodo_op = Nodo('operador', op)
            nodo_op.agregar_hijo(self.termino())
            nodo.agregar_hijo(nodo_op)
        return nodo

    # Regla gramatical para el termino
    def termino(self):
        nodo = Nodo('termino')
        nodo.agregar_hijo(self.factor())
        while self.token_actual[0] in ('MULT', 'DIV', 'POTENCIA'):
            op = self.token_actual[1]
            self.avanzar()
            nodo_op = Nodo('operador', op)
            nodo_op.agregar_hijo(self.factor())
            nodo.agregar_hijo(nodo_op)
        return nodo

    # Regla gramatical para el factor
    def factor(self):
        nodo = Nodo('factor')
        if self.token_actual[0] == 'VARIABLE':
            nodo.agregar_hijo(Nodo('VARIABLE', self.token_actual[1]))
            self.avanzar()
        elif self.token_actual[0] == 'ENTERO':
            nodo.agregar_hijo(Nodo('ENTERO', self.token_actual[1]))
            self.avanzar()
        elif self.token_actual[0] == 'FLotante':
            nodo.agregar_hijo(Nodo('FLotante', self.token_actual[1]))
            self.avanzar()
        elif self.token_actual[0] == 'PIZQ':
            self.avanzar()
            nodo.agregar_hijo(Nodo('PIZQ', '('))
            nodo.agregar_hijo(self.expr())
            self.esperar('PDER')
            nodo.agregar_hijo(Nodo('PDER', ')'))
        else:
            raise SyntaxError(f"Esperaba un factor pero encontré {self.token_actual}")
        return nodo

# Main
ruta_archivo = 'prueba.txt' 
tokens = analizar_archivo(ruta_archivo)

analizador = AnalizadorSintactico(tokens)
try:
    arbol_sintactico = analizador.analizar()
    print("El análisis sintáctico fue exitoso.")
    print(arbol_sintactico)
except SyntaxError as e:
    print(f"Error de sintaxis: {e}")
