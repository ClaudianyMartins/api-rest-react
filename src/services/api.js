import axios from "axios"; // importando o pacote axios

// criando uma isntancia, ou seja, criando um objeto do tipo axios
// baseURL é a url básica da api que queremos utilizar
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" 
});

//estou deixando o component api visível em toda a aplicação
export default api;