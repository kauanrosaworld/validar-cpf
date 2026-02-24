📌 Validador de CPF em JavaScript

Projeto simples desenvolvido em JavaScript puro com o objetivo de validar um CPF de forma matemática.

O sistema:

Remove caracteres especiais (pontos e traço)

Verifica se o CPF possui 11 dígitos

Bloqueia sequências inválidas como 11111111111

Aplica o algoritmo oficial de cálculo dos dígitos verificadores

Retorna se o CPF é válido ou inválido

🎯 Objetivo

Este projeto foi criado para praticar:

Manipulação de strings

Expressões regulares (Regex)

Estruturas de repetição (for)

Condicionais (if/else)

Organização de funções

Lógica de validação matemática

🧠 Como funciona a validação

O CPF possui dois dígitos verificadores calculados a partir dos 9 primeiros números.
O algoritmo realiza multiplicações com pesos decrescentes, soma os resultados e aplica o cálculo de resto da divisão por 11 para validar os dígitos finais.

🚀 Tecnologias utilizadas

JavaScript (ES6)

📚 Aprendizados

Durante o desenvolvimento deste projeto foram reforçados conceitos importantes de lógica de programação e estruturação de código.

Se quiser deixar ainda mais interessante no seu GitHub depois, você pode adicionar:

Um exemplo de entrada e saída

Melhorar para rodar via Node.js

Criar versão com input do usuário

Transformar em mini API

Projeto simples, mas muito valioso para base de lógica. E base forte constrói desenvolvedor forte.