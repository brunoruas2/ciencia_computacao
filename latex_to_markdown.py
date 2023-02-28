import re
import pyperclip

latex_string = '''

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

markdown_string = markdown_string.replace('\t**', '**')

print('Texto Copiado!')

pyperclip.copy(markdown_string)
