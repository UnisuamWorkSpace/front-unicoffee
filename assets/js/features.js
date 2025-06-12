// Essa função é responsável por alterar o título da página de acordo com a seção acessada, ela não retorna nada;
export function changeTitle() {
    // Recupera o elemento <title> do documento;
    const title = document.getElementsByTagName("title");
    // Define o valor padrão do título;
    const defaultTitle = "UniCoffee";
    // Recupera o hash da URL;
    // O hash é a parte da URL que vem após o símbolo '#';
    const hash = window.location.hash;
    // Verifica se o hash existe;
    if (hash) {
        // Caso exista, remove o símbolo '#' do início do hash;
        const value = hash.substring(1);
        // Verifica se o valor do hash é um dos valores esperados abaixo;
        // Caso seja o texto do titulo é alterado de acordo com os ifs a seguir;
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
    }
    // Se o hash não existir ou não corresponder a nenhum dos valores esperados, define o título padrão;
    else {
        title[0].textContent = defaultTitle;
        return;
    }
}
//
// Essa função recebe um lugar e um arquivo e retorna o caminho relativo de acordo com o lugar que queremos acessar;
export function whichRelativePath(folder, file) {
    // Recupera o caminho da página atual e salva como um array;
    const currentLink = window.location.pathname.split("/");
    // Recupera o nome da pagina atual;
    const namePage = currentLink.pop();
    // Se a pagina atual estiver localizada na riz, o array currentLink terá tamanho 2, pois ele contém o nome da pasta e o nome da pagina atual;
    // Caso a pagina atual esteja dentro de outra pasta na raiz o array currentLink terá tamanho 3, pois ele contém o nome da pasta pai, a pasta atual e o nome da pagina atual;
    // Assim, podemos controlar e acessar as páginas de acordo com o tamanho do array;
    const depth = currentLink.length;
    // Com a variável depth conseguimos acessar as páginas de acordo com o tamanho do array e conseguimos definir bem o caminho base(raiz);
    // Aqui se depth é 0 então estamos na raiz, se não ele mostrará a profundidade que estamos a partir da raiz;
    const basePath = "../".repeat(depth);
    // Depois de definir o caminho base, vamos definir o caminho relativo de acordo com o lugar que queremos acessar;
    // Cada caso abaixo retorna o caminho relativo que se deseja acessar;
    switch (folder) {
        case "":
            return `${basePath}${file}`;
        case "data":
            return `${basePath}assets/data/${file}`;
        case "img":
            return `${basePath}assets/img/${file}`;
        case "carousel":
            return `${basePath}assets/img/carousel/${file}`;
        case "css":
            return `${basePath}assets/css/${file}`;
        case "js":
            return `${basePath}assets/js/${file}`;
        case "pages":
            return `${basePath}pages/${file}`;
    }
}