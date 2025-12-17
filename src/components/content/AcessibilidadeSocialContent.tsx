import { useState } from 'react';

interface AcessibilidadeSocialContentProps {
  accessibleMode?: boolean;
}

export default function AcessibilidadeSocialContent({ accessibleMode = false }: AcessibilidadeSocialContentProps) {
  const [showSolutionText, setShowSolutionText] = useState(false);

  const toggleSolutionText = () => {
    setShowSolutionText(!showSolutionText);
  };

  return (
    <div className="space-y-24">
      <header className="border-b-2 border-indigo-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Acessibilidade Social: Linguagem Clara para Todos
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {accessibleMode
            ? "Entenda como a linguagem simples e clara diminui barreiras e promove a inclusão em ambientes digitais."
            : "Descubra como a linguagem complexa pode afastar o usuário e criar barreiras sociais e cognitivas."}
        </p>
      </header>

      {/* Seção 1: Decisão Jurídica */}
      <section className="space-y-16">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
          <span className="text-indigo-600">⚖️</span> O Dilema Jurídico
        </h2>
        {accessibleMode ? (
          <>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              Dois vizinhos, a Dona Maria e o Seu João, estavam brigando na justiça por causa de um pé de abacate. A árvore nasceu bem na divisa dos terrenos deles. As raízes se espalharam pelos dois quintais, mas a maior parte da sombra ficava para o lado da Dona Maria. Já os abacates, caíam mais no quintal do Seu João.
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              O juiz decidiu que o pé de abacate pertence aos dois vizinhos, já que ele cresceu nas terras dos dois. Ele mandou que os dois conversem e entrem em um acordo sobre como usar a árvore e dividir os frutos. Se não conseguirem, o juiz vai decidir por eles.
            </p>
            <img src="https://via.placeholder.com/600x400?text=Decisão+Jurídica+Simplificada" alt="Representação de pessoas conversando sobre uma árvore" className="mt-8 mb-8 rounded-lg shadow-md" />
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              "EMENTA: APELAÇÃO CÍVEL. AÇÃO DE OBRIGAÇÃO DE FAZER C/C INDENIZATÓRIA. ARBUSTO FRUTÍFERO. CONFINANTES. DIVISA DE IMÓVEIS. PRINCÍPIO DA ACESSÃO NATURAL. ART. 1.284 DO CÓDIGO CIVIL. FRUTOS PENDENTES E CAÍDOS. PROPRIEDADE. COMPOSIÇÃO AMIGÁVEL. SUCUMBÊNCIA RECÍPROCA. HONORÁRIOS ADVOCATÍCIOS. ÔNUS. PROVIMENTO PARCIAL."
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              "Trata-se de recurso de apelação interposto em face da r. sentença proferida pelo Juízo a quo que, nos autos da Ação de Adjudicação Compulsória cumulada com Indenização por Perdas e Danos, julgou parcialmente procedentes os pedidos iniciais, para declarar a composse do arbusto frutífero avocado (Persea americana Miller), implantado na linha divisória dos imóveis lindeiros, bem como condenar os litigantes à partilha dos frutos, na proporção das raízes e pro rata temporis, sob pena de arbitramento judicial em fase de cumprimento de sentença. O insurgente, em suas razões recursais, argui a nulidade da decisão por cerceamento de defesa, ante o indeferimento da produção de prova pericial grafotécnica e testemunhal."
            </p>
            <img src="https://via.placeholder.com/600x400?text=Decisão+Jurídica+Complexa" alt="Representação de um documento jurídico com muitos termos difíceis" className="mt-8 mb-8 rounded-lg shadow-md" />
          </>
        )}
      </section>

      {/* Seção 2: Parecer Médico */}
      <section className="space-y-16">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
          <span className="text-red-600">🩺</span> O Parecer Médico
        </h2>
          {accessibleMode ? (
          <>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              A paciente apresentou uma pequena lesão na pele que se parece com uma verruga. O médico examinou e pediu alguns exames para ter certeza do que é e decidir qual o melhor tratamento. Não se preocupe, a maioria das verrugas é inofensiva e pode ser facilmente tratada.
            </p>
            <img src="https://via.placeholder.com/600x400?text=Parecer+Médico+Simplificado" alt="Imagem de um médico conversando com um paciente de forma amigável" className="mt-8 mb-8 rounded-lg shadow-md" />
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              "RELATÓRIO ANATOMOPATOLÓGICO: MACROSCOPIA: Fragmento cutâneo, medindo 0,5 x 0,3 x 0,2 cm, de superfície irregular e coloração pardo-enegrecida. MICROSCOPIA: Exame histopatológico revela proliferação epitelial acantótica e papilomatosa, com hiperceratose e paraceratose. Observam-se coilócitos, figuras de mitose atípicas e disceratose focal. O estroma subjacente apresenta infiltrado inflamatório linfocitário perivascular e extravasamento pigmentar."
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              "CONCLUSÃO: A morfologia é compatível com Neoplasia intraepitelial escamosa de alto grau (NIC III), com áreas de carcinoma espinocelular in situ. Recomenda-se correlação clínico-patológica e avaliação oncológica urgente para planejamento terapêutico e estadiamento."
            </p>
            <img src="https://via.placeholder.com/600x400?text=Parecer+Médico+Técnico" alt="Imagem de um relatório médico complexo com termos técnicos" className="mt-8 mb-8 rounded-lg shadow-md" />
          </>
        )}
      </section>

      {/* Seção da Solução: Nova Lei de Comunicação Simples */}
      <section className="space-y-16">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
          <span className="text-green-600">✓</span> A Solução: Linguagem Simples
        </h2>
        <p className="text-base text-slate-700 leading-relaxed mb-4">
          Clique no botão abaixo para entender como a "Política Nacional de Linguagem Simples" pode transformar a comunicação digital:
        </p>
        <button
          onClick={toggleSolutionText}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {showSolutionText ? "Esconder Texto da Solução" : "Ver Texto da Solução"}
        </button>

        {showSolutionText && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-8 space-y-4">
            <h3 className="font-bold text-blue-900 text-2xl mb-4 mt-10">Abertura da dinâmica sobre Acessibilidade Social em Produtos Digitais</h3>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              Vivemos em um mundo cada vez mais digital. Sites e aplicativos não são apenas ferramentas — são portas de acesso à informação, serviços, direitos e oportunidades. Hoje, quando projetamos ou construímos um produto digital, não estamos apenas resolvendo uma necessidade técnica: estamos moldando quem pode estar dentro ou fora do acesso àquilo que criamos.
            </p>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              E é nesse contexto que entra a nova Lei nº 15.263, que institui a Política Nacional de Linguagem Simples no Brasil. Essa lei determina que a comunicação feita pelos órgãos e entidades públicas deve ser clara, direta, acessível e centrada nas pessoas — com foco no entendimento de toda a população, incluindo povos tradicionais, pessoas com deficiência e outros grupos socialmente marginalizados.
              <br />
              <strong className="block mt-2">Serviços e Informações do Brasil</strong>
            </p>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              A lei reafirma algo que já sabemos na prática: informação difícil ou confusa exclui pessoas — assim como interfaces inacessíveis excluem pessoas. A Lei da Linguagem Simples reforça que a comunicação não pode ser apenas tecnicamente correta; ela precisa ser compreensível por quem está no outro lado da tela, seja um cidadão buscando um serviço público, seja alguém tentando entender um formulário, um aviso ou a interface de um site ou app.
              <br />
              <strong className="block mt-2">Serviços e Informações do Brasil</strong>
            </p>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              Para nós que trabalhamos com produtos digitais — design, desenvolvimento, conteúdo, produto e QA — isso representa um chamado de atenção para incorporar princípios de clareza, simplicidade e inclusão em cada decisão:
            </p>
            <ul className="text-blue-800 space-y-3 pl-5 list-disc mt-4">
              <li className="leading-relaxed mb-2">Textos claros e objetivos em interfaces, sem jargões desnecessários ou estruturas complexas;</li>
              <li className="leading-relaxed mb-2">Comunicação que facilite a compreensão de pessoas com diferentes níveis de alfabetização ou habilidades cognitivas;</li>
              <li className="leading-relaxed mb-2">Fluxos que funcionem para quem usa leitor de tela, navega com teclado ou depende de traduções automáticas;</li>
              <li className="leading-relaxed mb-2">Conteúdos que diminuam a necessidade de intermediários para explicar ou orientar o usuário.</li>
            </ul>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              Quando pensamos em acessibilidade social no contexto digital, estamos falando de diminuir distâncias sociais — educacionais, econômicas, físicas e cognitivas — para que ninguém fique de fora por causa de barreiras que nós poderíamos ter evitado. A nova lei traduz um princípio que já é técnica e socialmente urgente:
            </p>
            <p className="text-blue-800 text-2xl font-bold leading-relaxed mb-4">
              acessibilidade é sobre garantir que informação e tecnologia sejam verdadeiramente acessíveis a todas as pessoas.
            </p>
            <p className="text-blue-800 text-base leading-relaxed mb-4">
              E essa dinâmica existe para nos trazer a essa reflexão: quem estamos deixando de fora quando criamos nossos produtos digitais.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
