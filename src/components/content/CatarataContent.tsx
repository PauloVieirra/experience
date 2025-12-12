export default function CatarataContent() {
  return (
    <>
      <header>
        <h1>Catarata: Uma Janela Embaçada para a Web</h1>
      </header>
      <p>
        A catarata é a opacificação do cristalino, a lente natural do olho, o que torna a visão progressivamente embaçada, como se estivesse olhando através de um vidro fosco. Cores podem parecer desbotadas e a visão noturna pode ser particularmente prejudicada.
      </p>

      <h2>O Desafio</h2>
      <p>
        No modo "sem acessibilidade", a experiência simula essa visão turva. O texto pode ter baixo contraste, as cores podem ser lavadas e a falta de nitidez geral torna a leitura cansativa e difícil. É como tentar ler um jornal com o óculos sujo.
      </p>

      <h2>A Solução Acessível</h2>
      <p>
        O modo "com acessibilidade" combate esses problemas com medidas diretas:
      </p>
      <ul>
        <li>
          <strong>Contraste Elevado:</strong> Aumentamos drasticamente o contraste entre o texto e o fundo. O texto preto sobre fundo branco é o padrão mais eficaz.
        </li>
        <li>
          <strong>Fontes Maiores e Nítidas:</strong> O tamanho da fonte é aumentado e usamos estilos de fonte que são claros e fáceis de distinguir.
        </li>
        <li>
          <strong>Cores Vivas (Quando Necessário):</strong> Embora o contraste seja fundamental, quando as cores são usadas, elas são vibrantes e bem diferenciadas para evitar a aparência "lavada".
        </li>
        <li>
          <strong>Ampliação:</strong> Ferramentas que permitem ao usuário ampliar facilmente o conteúdo são essenciais.
        </li>
      </ul>
      <p>
        Para usuários com catarata, um design limpo, com alto contraste e texto claro, não é um luxo, mas uma necessidade para a compreensão do conteúdo.
      </p>
    </>
  );
}
