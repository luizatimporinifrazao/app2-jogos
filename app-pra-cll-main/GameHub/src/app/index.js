//1 etapa -- tela inicial

//oq fazemos aq?
//esta é a tela inicial do app (rota "/")

import {View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
//view - container basico
//text - para exibir texto
//ScrollView - permite rolagem vertical
//flatlist - lista otimizadora com rolagem
//pressable - botão feedback de todos
//StyleShett - define estilos

import {useRouter} from "explo-router";
//acesso ao objeto router, tem a função de navegação baseada em arquivos.
import GameCard from "../components/GameCard";
//realizar componentes, isso evita duplicação de codigo e mantem a consistencia visual

import {jogos} from "../data/jogos";
//importante uma array de objeto do arquivo data/jogos.js

import {cores} from "../data/tema";
//importa a paleta de cores do app do arquivo data/tema.js
//=======================================
export default function Inicio(){
    //obtemos o objeto de navegação

///====================================================
//                bloco 1
//=====================================================

    const router = useRouter();
    //percorre o array jogos e croa um novo array destaques completo apenas os objetos
    const destaques = jogos.filter((jogo) => jogo.destaque)
     const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0,5);
     //...jogos -> cria uma copia do array original
     //sort((a, b) => b.nota - a.nota) ordena a cópa da maior nota para a menor
     //.slice(0,5): extrai apenas 5 primeiros elementos do array

///====================================================
//                bloco 2
//=====================================================

return(
    //inicio di JSX retornando pelo componente: define o que será renderizado na tela
    <ScrollView style ={style.container} contentContainerStyle={StyleSheet.conteudo}>
        {/*container com rolagem vertical*/}
        <text style={styles.titulo}>GameHub</text>
        {/*container com rolagem vertical*/}
        <text style={styles.subtitulo}>um universo de jogos em um só lugar</text>


//====================================================
//                bloco 2.1- seção de jogos
//=====================================================
    <text style={StyleSheet.secaoTitulo}>Jogos em destaque</text>
    {/* Exibe o titulo desta seção, usando o estilo "secaotitulo" */}
    <FlatList
        data={destaques}
        //define a fonte de dados da lisa - array "destaques"
        keyExtractor={(item) => item.id}
        // Função que retorna uma chave única
        horizontal
        // faz a lista rolar
        showsVerticalScrollIndicator={false}
        //oculta a barrinha de rolagem horizontal, deixando a interface mais limpa
        renderItem={({item}) => <Gamecard jogo={item}/>}
        //função chamanda para cada elemento do array "data"
    />

//====================================================
//                bloco 2.2- seção de jogos
//=====================================================


    {/*Mesma estrutura da seção anterior, mas com dados diferentes */}

    <text style={styles.secaoTitulo}>Mais Populares</text>
    {/* Título da segunda seção, reaproveitando o mesmo estilo "Seção Título" */}

    <FlatList
        data={populares}
        // Desta vez a fonte de dados é o array "populares" (top 5 por nota)
        keyExtractor={(item) => item.id}
        // Mesma lógica de chave única no id do jogo
        horizontal
        // Lista horizontal, igual à seção anterior
        showsHorizontalScrollingIndicator={false}
        // Esconder o indicador de rolagem
        renderItem={({item}) => <GameCard jogo={item} />}
        //Reutiliza o mesmo componente GameCard, provando que ele funciona com qualquer lista de jogos
    />

//====================================================
//        bloco 2.3- Botão "Ver todos os jogos"
//=====================================================

    {/* Presable oferece mais controle sobre o estilo e feedback visual */}

    <pressable
    style={styles.botao}
    // Aplica o estilo visual no botão!
    onPress={() => router.push("./jogos")}
    //onPress: Função executada quando o usuário toca no botão
    // router.push("/jogos") navega para a rota "/jogos"
    >
        <text style={styles.textobotao}>Ver todos os Jogos </text>

    </pressable>

    </ScrollView>


);

}
//====================================================
//        bloco 3 - Estilos
//=====================================================
// PORQUE USAR StyleSheet?
// - StyleSheet.create oyimixs os estilos (evita recriação desnecessária)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.fundo
    },
    conteudo: {
        padding: 20,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: cores.textoPrincipal,
    },
    subtitulo: {
        fontSize: 15,
        color: cores.textoSecundario,
        marginTop: 4,
        marginBottom: 24,
    },
    secaoTitulo:{
        fontSize: 18,
        fontWeight: "bold",
        color: cores.textoPrincipal,
        marginTop: 8,
        marginBottom: 12,
    },
    botao: {
        backgroundColor: cores.roxo,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 24,
    },
    textbotao:{
        color: cores.textoPricipal,
        fontSize: 16,
        fontWeight: "bold",
    }
})