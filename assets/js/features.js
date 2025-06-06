// Essa função é responsável por alterar o título da página de acordo com a seção acessada
// Ela recebe uma chave (key) que direciona o conteúdo da página acessada e ela altera o título para conversar com aquilo que o cliente está vendo.
// Exemplo de uso:  changeTitle('cafes');
export function changeTitle() {
    // Recupera o elemento <title> do documento
    const title = document.getElementsByTagName("title");
    // Define o valor padrão do título
    const defaultTitle = "UniCoffee";
    // Recupera o hash da URL
    // O hash é a parte da URL que vem após o símbolo '#'
    const hash = window.location.hash;
    // Verifica se o hash existe
    if (hash) {
        // Caso exista, remove o símbolo '#' do início do hash
        const value = hash.substring(1);
        // Verifica se o valor do hash é um dos valores esperados abaixo
        if (['moidos', 'graos', 'capsulas'].includes(value)) {
            title[0].textContent = `Cafés | ${defaultTitle}`;
            return;
        }
        else if (['philco', 'dolceGusto', 'tresCoracoes'].includes(value)) {
            title[0].textContent = `Cafeteiras | ${defaultTitle}`;
            return;
        }
        else if (['termicas','filtros','moedores'].includes(value)) {
            title[0].textContent = `Acessórios | ${defaultTitle}`;
            return;
        }
        console.log(value);
        console.log(title[0].textContent);
        console.log(['moidos', 'graos', 'capsulas'].includes(value));
    }
    // Se o hash não existir ou não corresponder a nenhum dos valores esperados, define o título padrão
    else {
        title[0].textContent = defaultTitle;
        return;
    }
}