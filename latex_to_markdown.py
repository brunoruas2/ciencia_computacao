import re
import pyperclip

latex_string = '''\subsection{Memória}

Idealmente, a memória deveria ser super rápida e abundante. O problema é que existe um trade-off entre essas duas qualidades. Quanto mais rápida é a leitura, mais cara é a memória. Esse é o motivo de, na arquitetura dos computadores atuais, existirem diversos tipos de memória.
\\~\\
\begin{center}
\begin{chronology}[1]{0}{4}{10cm}[7cm]
	\event{1}{\small{Registradores}}
	\event{2}{\small{Memoria Cache}}
	\event{3}{\small{Memoria Principal}}
	\event{4}{\small{Memoria Secundária}}
\end{chronology}
\end{center}

Na esquerda estão as memórias mais rápidas e caras. Na direita, estão as mais lentas e baratas.
\\~\\
A memória principal é a memória RAM e ROM dos nossos computadores. Dela, a CPU lê as instruções escritas em alguma linguagem de programação e é nela que o processador salva o resultado das operações.
\\~\\
Para entender como a memória principale funciona, basta pensarmos em um conjunto de pequenas células (posições) de armazenamento de informação. Todas as células da memória possuem o mesmo tamanho (medido em quantidade de bits). Os \textbf{endereços} são os indentificadores da posição física de cada célula no material de armazenamento (disco magnético ou chip).
\\~\\
Se soubermos a quantidade de bits em cada célula e a quantidade de células, saberemos a capacidade de armazenamento do dispositivo por meio do cálculo

$$ \textrm{Capacidade} = 2^{\textrm{Numero de Celulas}} * \textrm{Numero de bits por celula} $$

A memória principal pode ser divida em \textbf{memória RAM - Random Access Memory}, que pode ser lida e apagada a qualquer momento mas não é capaz de armazenar os dados após o desligamento do computador, e a \textbf{memória ROM - Read Only Memory} que não pode ser alterada na execução do programa mas se mantém após o desligamento do computador.
\\~\\
\textbf{Comentário:} A memória RAM ainda é subdividida em outras memórias mas veremos isso em uma atualização desse curso.

A memória secundária é o HD e o SSD dos nossos computadores. O processador só faz uso dela por meio de dispositivos de entrada e saída. A vantagem dela é o seu preço que é infinitamente menor que as memórias mais rápidas.

'''

# patterns
markdown_string = latex_string.replace('\\~\\', '')

markdown_string = markdown_string.replace('"\\', '"')

markdown_string = markdown_string.replace('\scriptsize', '"')

markdown_string = markdown_string.replace('\normalsize', '"')

markdown_string = markdown_string.replace('[tabsize=4,frame=single]', '"')

pattern = re.compile(r'\\section\{(.+?)\}')
markdown_string = pattern.sub(r'## \1', markdown_string)

pattern = re.compile(r'\\subsection\{(.+?)\}')
markdown_string = pattern.sub(r'### \1', markdown_string)

pattern = re.compile(r'\\subsubsection\{(.+?)\}')
markdown_string = pattern.sub(r'#### \1', markdown_string)

pattern = re.compile(r'extbf\{(.+?)\}')
markdown_string = pattern.sub(r'**\1**', markdown_string)

pattern = re.compile(r'extit\{(.+?)\}')
markdown_string = pattern.sub(r'*\1*', markdown_string)


pattern = re.compile(r'erb\|(.*?)\|')
markdown_string = pattern.sub(r'`\1`', markdown_string)

# expressão regular para buscar a string Verbatim
verbatim_regex = re.compile(r'egin\{Verbatim\}(.*?)\\end\{Verbatim\}', re.DOTALL)

# função para transformar o Verbatim em código markdown
def verbatim_to_markdown(match):
    code = match.group(1)
    # remove espaços em branco iniciais e finais em cada linha
    code = '\n'.join([line.strip() for line in code.split('\n')])
    # adiciona a sintaxe do código
    code = '``` c#\n// c#' + code + '\n```'
    return code

# aplica a função na string latex
markdown_string = verbatim_regex.sub(verbatim_to_markdown, markdown_string)

markdown_string = markdown_string.replace('// c#\n"', '// c#\n')

# Extrair as informações das imagens
markdown_string = markdown_string.replace("\n\x08egin{figure}[H]\n\t\\centering\n\t\\","")

markdown_string = markdown_string.replace("\x0b","")

# expressão regular para encontrar a string com informações da imagem
regex = r'includegraphics\[(.*?)\]\{(.*?)\}'

# função para substituir a string encontrada pelo formato markdown desejado
def replace_image(match):
    caption = match.group(2) # texto da legenda
    image_path = match.group(2) # caminho da imagem
    return f'\n![{caption}](../../../assets/imgs/{image_path})\n'

# substituindo a string com as informações da imagem pelo formato markdown desejado
markdown_string = re.sub(regex, replace_image, markdown_string)

# Encontra a parte que precisa ser removida
pattern = r'\\caption\{.+?\}\n\\end\{figure\}\n'

# Remove a parte encontrada
markdown_string = re.sub(pattern, '', markdown_string)

markdown_string = markdown_string.replace("\x08","")

markdown_string = markdown_string.replace("c#\"","c#")

markdown_string = markdown_string.replace("egin{itemize}","\n")
markdown_string = markdown_string.replace("\\end{itemize}","\n")

markdown_string = markdown_string.replace("\\item","-")

markdown_string = markdown_string.replace("egin{center}","\n")
markdown_string = markdown_string.replace("\\end{center}","\n")

# expressão regular para encontrar a string com informações da imagem
regex = r'\\href\{(.+?)\}\{(.+?)\}'

# função para substituir a string encontrada pelo formato markdown desejado
def replace_link(match):
    caption = match.group(2) # texto da legenda
    link = match.group(1) # caminho da imagem
    return f'[{caption}]({link})'

# substituindo a string com as informações da imagem pelo formato markdown desejado
markdown_string = re.sub(regex, replace_link, markdown_string)

pattern = re.compile(r'\x0cootnote\{(.+?)\}')
markdown_string = pattern.sub(r'[^1][^1]:\1', markdown_string)

print('Texto Copiado!')

pyperclip.copy(markdown_string)
