const secoesCurso = [
    {
        id: 'progresso',
        titulo: 'Acompanhe seu progresso',
        modulo: 'base',
        paginas: [
            {
                header: 'ACOMPANHE SEU PROGRESSO',
                html: `
                    <h3 class="progresso-titulo-principal">Seu andamento</h3>
                    <p><b>Acompanhe seu progresso através dos módulos concluídos:</b></p>
                    <br>
                    <div class="progresso-barra-wrapper">
                        <div id="barraProgressoInterna" class="ebrima-num progresso-barra-fill-dinamica" style="width:0%;">0%</div>
                    </div>
                    <div id="listaProgressoCards"></div>
                `
            }
        ]
    },
    {
        id: 'apresentacao',
        titulo: 'Apresentação do Recurso Educacional',
        modulo: 'base',
        paginas: [
            {
                header: 'Apresentação do Recurso Educacional',
                html: `
                    <p>Olá! Seja bem-vindo(a) ao recurso educacional “Pelos Caminhos das Águas: Atenção Integral em Saúde para População em Risco ou em Situação de Escalpelamento”.</p>
                    <p>A criação deste curso surge diante da necessidade de enfrentar e qualificar a abordagem de acidentes que resultam em avulsões traumáticas do couro cabeludo, ocorridos em diferentes contextos socioprodutivos, como embarcações, máquinas de processamento e atividades industriais ou domésticas. </p>
                    <p>Sua elaboração é resultado de um processo de construção coletiva que envolveu a criação de espaços de diálogo e articulação interinstitucional, incluindo grupos de trabalho dedicados ao tema, além da atuação histórica de movimentos sociais, organizações da sociedade civil, profissionais de saúde e, especialmente, mulheres ribeirinhas diretamente impactadas por essa realidade. Trata-se de um problema historicamente subdimensionado no país, embora amplamente relatado por comunidades ribeirinhas e por organizações da sociedade civil, destacadamente no âmbito do Fórum Permanente da Sociedade Civil Marajoara. </p>
                    <p>A demanda por formação especializada expressa por essas comunidades revela a urgência de ampliar a visibilidade do tema e fortalecer capacidades institucionais e sociais para a vigilância, prevenção, resposta imediata e acompanhamento integral das vítimas, constituindo também uma resposta às reivindicações construídas coletivamente pelos territórios mais afetados.</>
                    <p>A ação educacional proposta a UNA-SUS, por meio do Ministério da Saúde, nasceu das inquietações fruto de discussões do Grupo de trabalho do Marajó/PA, formalizada pelas áreas técnicas da Coordenação-Geral de Vigilância e Prevenção de Violências e Acidentes e Promoção da Cultura de Paz, Departamento de Análise Epidemiológica e Vigilância de Doenças Não Transmissíveis e Secretaria de Vigilância em Saúde e Ambiente do Ministério da Saúde (CGVIVA/DAENT/SVSA/MS). </>
                    <p>A proposta assume relevância acadêmica, sanitária e social ao contribuir para o aprimoramento das competências das trabalhadoras e trabalhadores do SUS, gestores públicos e demais atores da sociedade civil envolvidos na promoção da saúde e na redução de agravos associados a esse tipo de acidente. Diante do caráter ainda invisibilizado do tema e das lacunas existentes na prevenção, nos primeiros socorros, no cuidado integral e na organização das redes de atenção, a oferta de um curso na modalidade Educação a Distância (EaD) mostra-se estratégica, pois facilita atualização constante e acesso flexível ao conteúdo. </>

                    <div class="objetivo-box-logo">
                        <div class="logo-apresentacao-container">
                            <img src="./fotos/logo2.png" alt="Logo do Curso" onerror="this.src='./fotos/image.png';">
                        </div>
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo geral</h4>
                            <p class="objetivo-texto-limpo">Qualificar profissionais de saúde, gestores públicos, educadores, lideranças comunitárias e sociedade civil sobre prevenção, atenção integral, vigilância e promoção de direitos das pessoas em risco ou em situação de escalpelamento, considerando as especificidades socioculturais e territoriais, com destaque para povos indígenas e população do campo, floresta e água.</p>
                        </div>
                    </div>

                    <br>
                    <h3>Estrutura do Recurso Educacional</h3>
                    <p>O percurso formativo está estruturado nos seguintes módulos:</p>

                    <div class="panel-group estrutura-accordion-grupo" id="accordionEstruturaCurso" role="tablist" aria-multiselectable="true">
                        
                        <!-- MÓDULO 1 -->
                        <div class="panel panel-default estrutura-panel-item">
                            <div class="panel-heading estrutura-panel-heading-mod1" role="tab">
                                <h4 class="panel-title estrutura-panel-title-reset-acordion">
                                    <a role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod1Sanfona" aria-expanded="false" class="estrutura-link-sanfona">
                                        <i class="fa fa-plus estrutura-icone-mais"></i>
                                        <span>Módulo 1 | Escalpelamento: causas, contextos socioculturais e territoriais, gênero, determinação social da saúde e vigilância epidemiológica</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod1Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body estrutura-panel-corpo">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Analisar os contextos socioterritoriais, culturais e de gênero relacionados ao escalpelamento, identificando fatores de vulnerabilidade, impactos à saúde e estratégias de vigilância e prevenção nos territórios das águas.</p>
                                    <hr class="estrutura-hr-divisor">
                                    <p><b>Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Identificar os principais fatores territoriais, sociais e ambientais associados ao risco de escalpelamento em populações ribeirinhas, indígenas e comunidades tradicionais.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Populações do campo, floresta e águas (CFA) e povos e comunidades tradicionais (PCTs)</li>
                                        <li>Territórios, maretórios e modos de vida</li>
                                        <li>Trabalho, mobilidade fluvial e vulnerabilidades sociais</li>
                                        <li>Escalpelamento: conceito, causas e contextos de ocorrência</li>
                                        <li>Acidentes em embarcações, atividades produtivas e ambiente doméstico</li>
                                        <li>Impactos físicos, sociais, culturais e econômicos do escalpelamento</li>
                                        <li>Determinantes e determinação social da saúde</li>
                                        <li>Relação entre território, trabalho e saúde</li>
                                    </ul>
                                    <br>
                                    <p><b>Unidade 2 – Interseccionalidade, Vulnerabilidade Social, Epidemiologia e Vigilância em Saúde</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Analisar o perfil epidemiológico das vítimas de escalpelamento, reconhecendo as desigualdades de gênero, raça e território e a importância da vigilância em saúde e da qualificação da notificação.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Perfil epidemiológico das vítimas de escalpelamento</li>
                                        <li>Mulheres, meninas e desigualdades de gênero</li>
                                        <li>Divisão sexual do trabalho e vulnerabilidades nos territórios das águas</li>
                                        <li>Impactos do escalpelamento sobre corpo, autoestima e vida social das mulheres</li>
                                        <li>Racismo, pobreza e desigualdades territoriais</li>
                                        <li>Vigilância epidemiológica do escalpelamento: notificação, investigação epidemiológica e uso das fichas de registro para monitoramento e qualificação da informação</li>
                                        <li>Sistemas de informação em saúde e qualificação dos registros nos formulários dos sistemas de informação em saúde (SIA, SIM, SIH, Quesito Raça/Cor)</li>
                                        <li>Importância do quesito raça/cor e territorialização dos dados</li>
                                        <li>Monitoramento do Sistema de Informação de Agravos de Notificação (SINAN)</li>
                                        <li>Quando e como utilizar as fichas de notificação e investigação epidemiológica</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- MÓDULO 2 -->
                        <div class="panel panel-default estrutura-panel-item">
                            <div class="panel-heading estrutura-panel-heading-mod1" role="tab">
                                <h4 class="panel-title estrutura-panel-title-reset-acordion">
                                    <a class="collapsed estrutura-link-sanfona" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod2Sanfona" aria-expanded="false">
                                        <i class="fa fa-plus estrutura-icone-mais-mod2"></i>
                                        <span>Módulo 2 | Direitos, proteção social e políticas públicas às pessoas em risco ou em situação de escalpelamento</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod2Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body estrutura-panel-corpo">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Reconhecer os direitos sociais, humanos e institucionais das vítimas de escalpelamento, compreendendo a atuação das políticas públicas e da rede de proteção social.</p>
                                    <hr class="estrutura-hr-divisor">
                                    <p><b>Unidade 1 – Direitos Humanos, Proteção Integral e Justiça Social</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Analisar os impactos das desigualdades sociais, territoriais e ambientais sobre o acesso a direitos e à proteção integral das populações vulnerabilizadas.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Direitos humanos e populações vulnerabilizadas</li>
                                        <li>Proteção integral à infância e adolescência</li>
                                        <li>Direitos sexuais e reprodutivos</li>
                                        <li>Justiça social, justiça climática e desigualdades territoriais</li>
                                        <li>Direitos das populações tradicionais e povos indígenas</li>
                                        <li>Violências estruturais e vulnerabilidades sociais</li>
                                        <li>Políticas públicas voltadas às populações das águas</li>
                                        <li>Política Nacional de Redução de Morbimortalidade por Acidentes e Violências</li>
                                        <li>Papel do SUS na promoção da equidade</li>
                                    </ul>
                                    <br>
                                    <p><b>Unidade 2 – Acesso a Direitos e Medidas de Proteção </b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Identificar os principais direitos, fluxos de proteção social e medidas preventivas voltadas às pessoas vítimas de escalpelamento.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Direitos sociais, previdenciários e assistenciais</li>
                                        <li>Acesso à saúde, educação e proteção social</li>
                                        <li>Legislação relacionada ao escalpelamento</li>
                                        <li>Lei nº 11.970/2009 e prevenção de acidentes</li>
                                        <li>Medidas de proteção nas embarcações e ambientes de trabalho</li>
                                        <li>Fluxos institucionais de apoio às vítimas</li>
                                        <li>Acesso ao sistema de justiça e orientação jurídica</li>
                                        <li>Matriciamento e acompanhamento das vítimas no território</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- MÓDULO 3 -->
                        <div class="panel panel-default estrutura-panel-item">
                            <div class="panel-heading estrutura-panel-heading-mod1" role="tab">
                                <h4 class="panel-title estrutura-panel-title-reset-acordion">
                                    <a class="collapsed estrutura-link-sanfona" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod3Sanfona" aria-expanded="false">
                                        <i class="fa fa-plus estrutura-icone-mais-mod2"></i>
                                        <span>Módulo 3 | Saúde mental e atenção psicossocial às pessoas vítimas de escalpelamento</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod3Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body estrutura-panel-corpo">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Reconhecer os impactos psicossociais do escalpelamento e desenvolver estratégias de cuidado integral, acolhimento e reabilitação psicossocial.</p>
                                    <hr class="estrutura-hr-divisor">
                                    <p><b>Unidade 1 – Saúde Mental e Impactos Psicossociais do Escalpelamento</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Reconhecer os principais impactos psicossociais do escalpelamento e as estratégias de acolhimento e cuidado em saúde mental no SUS.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Saúde mental e atenção psicossocial no SUS</li>
                                        <li>Rede de Atenção Psicossocial (RAPS)</li>
                                        <li>Interseccionalidade, sofrimento psíquico e vulnerabilidades</li>
                                        <li>Impactos emocionais, sociais e familiares do escalpelamento</li>
                                        <li>Estigma, autoestima, imagem corporal e exclusão social</li>
                                        <li>Acolhimento humanizado e escuta qualificada</li>
                                        <li>Saúde mental de crianças, adolescentes, idosos e mulheres vítimas</li>
                                        <li>Produção do cuidado nos territórios</li>
                                    </ul>
                                    <br>
                                    <p><b>Unidade 2 – Reabilitação Psicossocial e Continuidade do Cuidado</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Desenvolver estratégias de acompanhamento longitudinal, reabilitação psicossocial e fortalecimento das redes de apoio territorial.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Reabilitação psicossocial e reinserção social</li>
                                        <li>Convivência comunitária e fortalecimento de vínculos</li>
                                        <li>Trabalho, renda e autonomia das vítimas</li>
                                        <li>Acompanhamento longitudinal na RAPS</li>
                                        <li>Matriciamento em saúde mental</li>
                                        <li>Uso da saúde digital no acompanhamento psicossocial</li>
                                        <li>Apoio familiar e redes comunitárias de cuidado</li>
                                        <li>Estratégias territoriais de cuidado integral</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- MÓDULO 4 -->
                        <div class="panel panel-default estrutura-panel-item">
                            <div class="panel-heading estrutura-panel-heading-mod1" role="tab">
                                <h4 class="panel-title estrutura-panel-title-reset-acordion">
                                    <a class="collapsed estrutura-link-sanfona" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod4Sanfona" aria-expanded="false">
                                        <i class="fa fa-plus estrutura-icone-mais-mod2"></i>
                                        <span>Módulo 4 | Prevenção, acolhimento e coordenação do cuidado na rede de atenção à saúde nos territórios das águas</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod4Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body estrutura-panel-corpo">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Aplicar estratégias de prevenção, acolhimento e coordenação do cuidado às pessoas vítimas de escalpelamento nos diferentes pontos da Rede de Atenção à Saúde.</p>
                                    <hr class="estrutura-hr-divisor">
                                    <p><b>Unidade 1 – Prevenção do Escalpelamento e Promoção da Saúde nos Territórios</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Planejar ações educativas e preventivas voltadas à promoção da saúde e redução de acidentes relacionados ao escalpelamento.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Promoção da saúde nos territórios ribeirinhos</li>
                                        <li>Estratégias de prevenção do escalpelamento</li>
                                        <li>Educação popular em saúde e comunicação comunitária</li>
                                        <li>Segurança em embarcações e proteção de motores</li>
                                        <li>Sensibilização comunitária e participação social</li>
                                        <li>Práticas educativas culturalmente adequadas</li>
                                        <li>Papel da APS e da Vigilância em Saúde</li>
                                        <li>Bem viver, território e sustentabilidade</li>
                                    </ul>
                                    <br>
                                    <p><b>Unidade 2 – Acolhimento, Manejo Clínico e Coordenação do Cuidado na RAS</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Organizar fluxos assistenciais e estratégias de cuidado integral às pessoas vítimas de escalpelamento nos diferentes níveis de atenção à saúde.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Acolhimento e classificação de risco</li>
                                        <li>Primeiros cuidados e manejo clínico inicial</li>
                                        <li>Fluxos assistenciais e organização da Rede de Atenção à Saúde</li>
                                        <li>Matriciamento e acompanhamento das vítimas no território</li>
                                        <li>Atenção Primária, Atenção Especializada e reabilitação</li>
                                        <li>Atribuições das equipes multiprofissionais</li>
                                        <li>Articulação entre RAS e RAPS</li>
                                        <li>Continuidade do cuidado e acompanhamento longitudinal</li>
                                        <li>Construção de fluxos estaduais e organização em rede</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                `
            }
        ]
    },


    // MÓDULO 1 - UNIDADE 1
    {
        id: 'm1_apresentacao',
        titulo: 'Apresentação do Módulo',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Apresentação do Módulo',
                html: `
                    <div class="objetivo-box">
                        <h4 class="objetivo-titulo-padrao">Objetivo de Aprendizagem do módulo</h4>
                        <p class="objetivo-paragrafo-limpo">Analisar os contextos socioterritoriais, culturais e de gênero relacionados ao escalpelamento, identificando fatores de vulnerabilidade, impactos à saúde e estratégias de vigilância e prevenção nos territórios das águas.</p>
                    </div>
                    <div class="curriculo-lider">
    <h3>Líder do Módulo</h3>
    <div class="lider-flex-wrapper">
        <div class="lider-curso-container">
            <img src="#" alt="Espaço para inserção da foto do líder." onerror="this.src='./fotos/foto_perfil.jpg';">
        </div>
        <div class="lider-texto-info">
            <h4>Nome completo do Líder</h4>
            <p>Insira aqui uma breve biografia ou a descrição do perfil do líder do curso, destacando sua formação e experiência na área.</p>
        </div>
    </div>
</div>
                `
            }
        ]
    },

    // MÓDULO 1 - UNIDADES EXTRAS
    {
        id: 'm1u1_apresentacao', titulo: 'Apresentação da Unidade 1', modulo: 'mod1', paginas: [
            {
                header: 'Apresentação da Unidade 1',
                html: `<h3>Apresentação da Unidade 1</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Identificar os principais fatores territoriais, sociais e ambientais associados ao risco de escalpelamento em populações ribeirinhas, indígenas e comunidades tradicionais.</p>
                        </div>
                    </div>`
            }
        ]

    },



    {
        id: 'm1u1_t1',
        titulo: 'Populações do campo, floresta e águas (CFA) e povos e comunidades tradicionais (PCTs)',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Populações do campo, floresta e águas (CFA) e povos e comunidades tradicionais (PCTs)</h3>
                <p>Conteúdo detalhado sobre os povos e comunidades tradicionais das águas.</p>`
            },
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Exemplo ou Problematização</h3>
                <p>Situação realista do cotidiano dos serviços/territórios, com 1–2 perguntas reflexivas.</p>`
            },
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Para pensar</h3>
                <div class="caixa-para-pensar">
    <div class="para-pensar-header">
        <div class="caixa-tematica-imagem-slot_2">
            <img src="./fotos/lampada.png" alt="Ilustração do bloco" class="piscando" onerror="this.style.display='none';">
        </div>
        <span>Para pensar</span>
    </div>
    <div class="para-pensar-body">
        <ul class="para-pensar-lista">
            <li>
                <span class="quest-numero">1</span>
                <p>Como as características específicas do território das águas e os modos de vida locais interferem diretamente no cotidiano da prática profissional e na atenção à saúde prestada?</p>
            </li>
            <li>
                <span class="quest-numero">2</span>
                <p>De que maneira as desigualdades sociais e de gênero presentes na comunidade podem moldar a vulnerabilidade das pessoas atendidas pela equipe?</p>
            </li>
        </ul>
    </div>
</div>`
            },
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Modelos de caixas</h3>
<!-- ==========================================
   MODELO 1: ATENÇÃO À ROTA (Importante)
   ========================================== -->
<div class="caixa-tematica atencao-rota">
    <div class="caixa-tematica-header">
        <div class="caixa-tematica-titulos">
            <span class="subtitulo-categoria">ATENÇÃO</span>
            <h4>Informações essenciais para seguir com segurança</h4>
        </div>
    </div>
    <div class="caixa-tematica-body">
        <div class="caixa-tematica-conteudo-texto">
            <p>Insira aqui o texto principal com as informações cruciais que o aluno precisa saber para avançar com segurança no conteúdo.</p>
        </div>
        <div class="caixa-tematica-imagem-slot">
            <img src="./fotos/sirene.png" alt="Ilustração do bloco" class="piscando" onerror="this.style.display='none';">
        </div>
    </div>
</div>


<!-- ==========================================
   MODELO 2: ALÉM DA MARGEM (Saiba mais)
   ========================================== -->
<div class="caixa-tematica alem-margem">
    <div class="caixa-tematica-header">
        <div class="caixa-tematica-titulos">
            <span class="subtitulo-categoria">Saiba Mais</span>
            <h4>Conteúdos para ampliar e aprofundar o percurso</h4>
        </div>
    </div>
    <div class="caixa-tematica-body">
        <div class="caixa-tematica-conteudo-texto">
            <p>Insira aqui o texto de aprofundamento, conceitos complementares ou curiosidades sobre o tema abordado.</p>
        </div>
        <div class="caixa-tematica-imagem-slot">
            <img src="./fotos/lupa.png" alt="Ilustração do bloco" class="piscando" onerror="this.style.display='none';">
        </div>
    </div>
</div>


<!-- ==========================================
   MODELO 3: UM NORTE PARA A PRÁTICA (Dica)
   ========================================== -->
<div class="caixa-tematica um-norte">
    <div class="caixa-tematica-header">
        <div class="caixa-tematica-titulos">
            <span class="subtitulo-categoria">Dica</span>
            <h4>Orientações que podem apoiar sua atuação</h4>
        </div>
    </div>
    <div class="caixa-tematica-body">
        <div class="caixa-tematica-conteudo-texto">
            <p>Insira aqui orientações práticas, dicas de manejo ou reflexões voltadas diretamente ao cotidiano de atuação profissional.</p>
        </div>
        <div class="caixa-tematica-imagem-slot">
            <img src="./fotos/norte.png" alt="Ilustração do bloco" class="piscando" onerror="this.style.display='none';">
        </div>
    </div>
</div>


<!-- ==========================================
   MODELO 4: PARA AMPLIAR O HORIZONTE (Leituras)
   ========================================== -->
<div class="caixa-tematica para-ampliar">
    <div class="caixa-tematica-header">
        <div class="caixa-tematica-titulos">
            <span class="subtitulo-categoria">Leitura</span>
            <h4>Leituras e materiais para continuar a travessia</h4>
        </div>
    </div>
    <div class="caixa-tematica-body">
        <div class="caixa-tematica-conteudo-texto">
            <p>Insira aqui as indicações de referências bibliográficas, artigos, leis ou materiais externos recomendados.</p>
        </div>
        <div class="caixa-tematica-imagem-slot">
            <img src="./fotos/livro.png" alt="Ilustração do bloco" class="piscando" onerror="this.style.display='none';">
        </div>
    </div>
</div>`
            },
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Vídeo</h3>
<div class="caixa-video-curso">
    <div class="caixa-video-header">
        <div class="caixa-video-icone">
            <i class="fa fa-play-circle"></i>
        </div>
        <div class="caixa-video-titulos">
            <span class="subtitulo-categoria">VÍDEO EXPLICATIVO</span>
            <h4>Acompanhe a video sobre o tema</h4>
        </div>
    </div>
    <div class="caixa-video-body">
        <!-- Capa simulada de vídeo com botão de play interativo -->
        <div class="video-capa-demo" onclick="alert('Demonstração: O vídeo será reproduzido aqui.')">
            <img src="./fotos/capa-video.png" alt="Capa da videoaula" onerror="this.src='./fotos/image.png';">
            <div class="botao-play-overlay">
                <i class="fa fa-play"></i>
            </div>
        </div>
        <p class="video-legenda-apoio"><b>Demonstração:</b> Clique na imagem para visualizar a prévia do video.</p>
    </div>
</div>`
                },
        ]
    },
        {
        id: 'm1u1_t2',
        titulo: 'Territórios, maretórios e modos de vida',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Territórios, maretórios e modos de vida</h3><p>Abordagem sobre o conceito de maretório e a dinâmica fluvial.</p>`
            }
        ]
    },
        {
        id: 'm1u1_sintese', titulo: 'Síntese da Unidade 1', modulo: 'mod1', paginas: [
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Síntese da Unidade 1</h3>
            
                <p class="objetivo-texto-limpo">Aqui irá toda a síntese.</p>
`
            }
        ]

    },
            {
        id: 'm1u1_referencias', titulo: 'Síntese da Unidade 1', modulo: 'mod1', paginas: [
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `
                    <h3>Referências Unidade 1</h3>
                    
                    <div class="lista-referencias-curso">
                        <div class="referencia-item">
                            <span class="ref-icone"><i class="fa fa-book"></i></span>
                            <div class="ref-conteudo">
                                <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. <strong>Vigilância em saúde de populações expostas a acidentes por motor embarcado e escalpelamento na Amazônia</strong>. Brasília: Ministério da Saúde, 2021.</p>
                            </div>
                        </div>

                        <div class="referencia-item">
                            <span class="ref-icone"><i class="fa fa-file-text-o"></i></span>
                            <div class="ref-conteudo">
                                <p>SILVA, Maria do Socorro et al. <strong>Modos de vida nas águas e vulnerabilidades em comunidades ribeirinhas da Amazônia</strong>. Revista Brasileira de Saúde Coletiva, v. 14, n. 2, p. 45-58, 2023.</p>
                            </div>
                        </div>

                        <div class="referencia-item">
                            <span class="ref-icone"><i class="fa fa-bookmark-o"></i></span>
                            <div class="ref-conteudo">
                                <p>SANTOS, Raimundo Nonato. <strong>A mobilidade fluvial e os desafios do cuidado em saúde nos territórios ribeirinhos do Pará</strong>. Belém: Editora Amazônia, 2022.</p>
                            </div>
                        </div>

                        <div class="referencia-item">
                            <span class="ref-icone"><i class="fa fa-globe"></i></span>
                            <div class="ref-conteudo">
                                <p>FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). <strong>Saúde, ambiente e desenvolvimento na Amazônia: dossiê de populações tradicionais</strong>. Rio de Janeiro: Fiocruz, 2020. Disponível em: <a href="#" target="_blank">Acesso restrito ao portal institucional</a>.</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]

    },
          {
        id: 'm1u1_repositorios', titulo: 'Síntese da Unidade 1', modulo: 'mod1', paginas: [
            {
                header: 'Unidade 1 – Povos das Águas, Territórios e Contextos do Escalpelamento',
                html: `<h3>Repositório de E-books</h3>
            <div class="repositorio-ebooks">
    <div class="repositorio-header">
        <div class="repositorio-icone">
            <i class="fa fa-file-pdf-o"></i>
        </div>
        <div class="repositorio-titulos">
            <span class="subtitulo-categoria">REPOSITÓRIO DE E-BOOKS</span>
            <h4>Materiais de Leitura e Aprofundamento (PDF)</h4>
        </div>
    </div>
    
    <div class="repositorio-grid">
        <!-- E-BOOK 1 -->
        <div class="ebook-card">
            <div class="ebook-capa">
                <img src="./fotos/capa-ebook-1.png" alt="Capa do E-book 1" onerror="this.src='./fotos/image.png';">
                <span class="ebook-badge">PDF</span>
            </div>
            <div class="ebook-info">
                <h5>Guia Prático: Prevenção e Cuidados no Território</h5>
                <p>Orientações detalhadas para equipes de saúde no reconhecimento e acompanhamento de situações de risco nas comunidades ribeirinhas.</p>
                <div class="ebook-meta">
                    <span><i class="fa fa-file-text"></i> 42 páginas</span>
                    <span><i class="fa fa-hdd-o"></i> 3.5 MB</span>
                </div>
                <a href="./pdfs/guia-prevencao.pdf" class="btn-download-ebook" download target="_blank">
                    <i class="fa fa-download"></i> Baixar E-book (PDF)
                </a>
            </div>
        </div>

        <!-- E-BOOK 2 -->
        <div class="ebook-card">
            <div class="ebook-capa">
                <img src="./fotos/capa-ebook-2.png" alt="Capa do E-book 2" onerror="this.src='./fotos/image.png';">
                <span class="ebook-badge">PDF</span>
            </div>
            <div class="ebook-info">
                <h5>Coletânea: Histórias e Saberes das Águas da Amazônia</h5>
                <p>Relatos, vivências e análises sobre os modos de vida, mobilidade fluvial e a relação com os serviços de saúde na região.</p>
                <div class="ebook-meta">
                    <span><i class="fa fa-file-text"></i> 68 páginas</span>
                    <span><i class="fa fa-hdd-o"></i> 5.2 MB</span>
                </div>
                <a href="./pdfs/historias-saberes.pdf" class="btn-download-ebook" download target="_blank">
                    <i class="fa fa-download"></i> Baixar E-book (PDF)
                </a>
            </div>
        </div>
    </div>
</div>`
            }
        ]

    },

    {
        id: 'm1u2_apresentacao', titulo: 'Apresentação da Unidade 2', modulo: 'mod1', paginas: [
            {
                header: 'Apresentação da Unidade 2',
                html: `<h3>Apresentação da Unidade 2</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Analisar o perfil epidemiológico das vítimas de escalpelamento, reconhecendo as desigualdades de gênero, raça e território e a importância da vigilância em saúde e da qualificação da notificação.</p>
                        </div>
                    </div>`
            }
        ]

    },
    {
        id: 'm1u2_t1',
        titulo: 'Perfil epidemiológico das vítimas de escalpelamento ',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 2 – Interseccionalidade, Vulnerabilidade Social, Epidemiologia e Vigilância em Saúde',
                html: `<h3>Perfil epidemiológico das vítimas de escalpelamento </h3><p>Dados estatísticos e características demográficas das pessoas afetadas.</p>`
            }
        ]
    },
    {
        id: 'm1u2_t2',
        titulo: 'Mulheres, meninas e desigualdades de gênero',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 2 – Interseccionalidade, Vulnerabilidade Social, Epidemiologia e Vigilância em Saúde',
                html: `<h3>Mulheres, meninas e desigualdades de gênero</h3><p>A vulnerabilidade específica de mulheres e crianças nos barcos.</p>`
            }
        ]
    },

    // MÓDULO 2
    {
        id: 'm2_apresentacao',
        titulo: 'Apresentação',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Apresentação ',
                html: `
                    <div class="objetivo-box">
                        <h4 class="objetivo-titulo-padrao">Objetivo de aprendizagem do módulo</h4>
                        <p class="objetivo-paragrafo-limpo">Reconhecer os direitos sociais, humanos e institucionais das vítimas de escalpelamento, compreendendo a atuação das políticas públicas e da rede de proteção social.</p>
                    </div>
                    <div class="lider-flex-wrapper">
        <div class="lider-curso-container">
            <img src="#" alt="Espaço para inserção da foto do líder." onerror="this.src='./fotos/foto_perfil.jpg';">
        </div>
        <div class="lider-texto-info">
            <h4>Nome completo do Líder</h4>
            <p>Insira aqui uma breve biografia ou a descrição do perfil do líder do curso, destacando sua formação e experiência na área.</p>
        </div>
    </div>
</div>
                
                    `
            }
        ]
    },
    {
        id: 'm2u1_apresentacao', titulo: 'Apresentação da Unidade 2', modulo: 'mod2', paginas: [
            {
                header: 'Apresentação da Unidade 2',
                html: `<h3>Apresentação da Unidade 1</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Analisar os impactos das desigualdades sociais, territoriais e ambientais sobre o acesso a direitos e à proteção integral das populações vulnerabilizadas.</p>
                        </div>
                    </div>`
            }
        ]

    },
    {
        id: 'm2u1_t1',
        titulo: 'Direitos humanos e populações vulnerabilizadas ',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 1 – Direitos Humanos, Proteção Integral e Justiça Social',
                html: `<h3>Direitos humanos e populações vulnerabilizadas </h3><p>Conteúdo do Módulo 2.</p>`
            }
        ]
    },
    {
        id: 'm2u1_t2',
        titulo: 'Proteção integral à infância e adolescência',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 1 – Direitos Humanos, Proteção Integral e Justiça Social',
                html: `<h3>Proteção integral à infância e adolescência</h3><p>Conteúdo do Módulo 2.</p>`
            }
        ]
    },
    {
        id: 'm2u2_apresentacao', titulo: 'Apresentação da Unidade 2', modulo: 'mod2', paginas: [
            {
                header: 'Apresentação da Unidade 2',
                html: `<h3>Apresentação da Unidade 2</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Identificar os principais direitos, fluxos de proteção social e medidas preventivas voltadas às pessoas vítimas de escalpelamento.</p>
                        </div>
                    </div>`
            }
        ]

    },
    {
        id: 'm2u2_t1',
        titulo: 'Módulo 2 - Unidade 2',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 2 – Acesso a Direitos e Medidas de Proteção  ',
                html: `<h3>Direitos sociais, previdenciários e assistenciais</h3><p>Texto.</p>`
            }
        ]
    },
    {
        id: 'm2u2_apresentacao', titulo: 'Apresentação da Unidade 2', modulo: 'mod2', paginas: [
            {
                header: 'Apresentação da Unidade 2',
                html: `<h3>Apresentação da Unidade 2</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Analisar o perfil epidemiológico das vítimas de escalpelamento, reconhecendo as desigualdades de gênero, raça e território e a importância da vigilância em saúde e da qualificação da notificação.</p>
                        </div>
                    </div>`
            }
        ]

    },
    {
        id: 'm2u2_t2',
        titulo: 'Módulo 2 - Unidade 2',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 2 – Acesso a Direitos e Medidas de Proteção  ',
                html: `<h3>Acesso à saúde, educação e proteção social</h3><p>Texto.</p>`
            }
        ]
    },

    // MÓDULO 3
    {
        id: 'm3_apresentacao',
        titulo: 'Apresentação',
        modulo: 'mod3',
        paginas: [
            {
                header: 'Apresentação ',
                html: `
                    <div class="objetivo-box">
                        <h4 class="objetivo-titulo-padrao">Objetivo de aprendizagem do módulo</h4>
                        <p class="objetivo-paragrafo-limpo">Reconhecer os impactos psicossociais do escalpelamento e desenvolver estratégias de cuidado integral, acolhimento e reabilitação psicossocial.</p>
                    </div>
                    <div class="lider-flex-wrapper">
        <div class="lider-curso-container">
            <img src="#" alt="Espaço para inserção da foto do líder." onerror="this.src='./fotos/foto_perfil.jpg';">
        </div>
        <div class="lider-texto-info">
            <h4>Nome completo do Líder</h4>
            <p>Insira aqui uma breve biografia ou a descrição do perfil do líder do curso, destacando sua formação e experiência na área.</p>
        </div>
    </div>
</div>
                
                    `
            }
        ]
    },
    {
        id: 'm3u1_apresentacao', titulo: 'Apresentação da Unidade 1', modulo: 'mod3', paginas: [
            {
                header: 'Apresentação da Unidade 1',
                html: `<h3>Apresentação da Unidade 1</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Reconhecer os principais impactos psicossociais do escalpelamento e as estratégias de acolhimento e cuidado em saúde mental no SUS.</p>
                        </div>
                    </div>`
            }
        ]
    },

    {
        id: 'm3_t1',
        titulo: 'Módulo 3 - Unidade 1',
        modulo: 'mod3',
        paginas: [
            {
                header: 'Unidade 1',
                html: `<h3>Conteúdo do novo módulo</h3><p>Texto da página...</p>`
            }
        ]
    },

    // MÓDULO 4
    {
        id: 'm4_apresentacao',
        titulo: 'Apresentação',
        modulo: 'mod4',
        paginas: [
            {
                header: 'Apresentação ',
                html: `
                    <div class="objetivo-box">
                        <h4 class="objetivo-titulo-padrao">Objetivo de aprendizagem do módulo</h4>
                        <p class="objetivo-paragrafo-limpo">Aplicar estratégias de prevenção, acolhimento e coordenação do cuidado às pessoas vítimas de escalpelamento nos diferentes pontos da Rede de Atenção à Saúde.</p>
                    </div>
                    <div class="lider-flex-wrapper">
        <div class="lider-curso-container">
            <img src="#" alt="Espaço para inserção da foto do líder." onerror="this.src='./fotos/foto_perfil.jpg';">
        </div>
        <div class="lider-texto-info">
            <h4>Nome completo do Líder</h4>
            <p>Insira aqui uma breve biografia ou a descrição do perfil do líder do curso, destacando sua formação e experiência na área.</p>
        </div>
    </div>
</div>
                `
            }
        ]
    },
    {
        id: 'm4u1_apresentacao', titulo: 'Apresentação da Unidade 1', modulo: 'mod4', paginas: [
            {
                header: 'Apresentação da Unidade 1',
                html: `<h3>Apresentação da Unidade 1</h3>
            <div class="objetivo-box-logo">
                        <div class="objetivo-conteudo">
                            <h4 class="objetivo-titulo-destaque">Objetivo da Unidade</h4>
                            <p class="objetivo-texto-limpo">Planejar ações educativas e preventivas voltadas à promoção da saúde e redução de acidentes relacionados ao escalpelamento.</p>
                        </div>
                    </div>`
            }
        ]

    },

    // FINAIS
    {
        id: 'comentario',
        titulo: 'Comentário final',
        modulo: 'base',
        paginas: [
            {
                header: 'COMENTÁRIO FINAL',
                html: `<h3>Considerações Finais</h3><p>Parabéns por concluir a jornada!</p>`
            }
        ]
    },
    {
        id: 'ebooks',
        titulo: 'E-books e Materiais',
        modulo: 'base',
        paginas: [
            {
                header: 'E-BOOKS E MATERIAIS',
                html: `<h3>Repositório de E-books</h3><p>Baixe aqui os materiais complementares.</p>`
            }
        ]
    }
];

let secaoAtualIndex = 1;
let paginaInternaIndex = 0;
let progressoConcluido = JSON.parse(localStorage.getItem('curso_progresso')) || {};

function alternarMenuLateral() {
    if ($(window).width() <= 991) {
        $('#sidebar').toggleClass('open-mobile');
    } else {
        $('#sidebar').toggleClass('collapsed-sidebar');
    }
}

function mudarCorModulo(corHex) {
    document.documentElement.style.setProperty('--mod-active-color', corHex);
}

function mudarSecao(idSecao) {
    const index = secoesCurso.findIndex(s => s.id === idSecao);
    if (index !== -1) {
        secaoAtualIndex = index;
        paginaInternaIndex = 0;

        $('#menuModulos li, #menuModulos a').removeClass('active');

        const itemMenu = document.getElementById('nav-' + idSecao);
        if (itemMenu) {
            $(itemMenu).addClass('active');
        }

        renderizarAtual();
    }
}

function proximoPasso() {
    const secao = secoesCurso[secaoAtualIndex];
    if (paginaInternaIndex < secao.paginas.length - 1) {
        paginaInternaIndex++;
        renderizarAtual();
    } else {
        progressoConcluido[secao.id] = true;
        localStorage.setItem('curso_progresso', JSON.stringify(progressoConcluido));

        if (secaoAtualIndex < secoesCurso.length - 1) {
            secaoAtualIndex++;
            paginaInternaIndex = 0;
            renderizarAtual();
        }
    }
}

function passoAnterior() {
    if (paginaInternaIndex > 0) {
        paginaInternaIndex--;
        renderizarAtual();
    } else if (secaoAtualIndex > 0) {
        secaoAtualIndex--;
        paginaInternaIndex = secoesCurso[secaoAtualIndex].paginas.length - 1;
        renderizarAtual();
    }
}

function renderizarAtual() {
    const secao = secoesCurso[secaoAtualIndex];
    if (!secao || !secao.paginas || !secao.paginas[paginaInternaIndex]) return;

    const pagina = secao.paginas[paginaInternaIndex];

    let corAtual = 'var(--mod1-color)';
    if (secao.modulo === 'mod1') corAtual = 'var(--mod1-color)';
    else if (secao.modulo === 'mod2') corAtual = 'var(--mod2-color)';
    else if (secao.modulo === 'mod3') corAtual = 'var(--mod3-color)';
    else if (secao.modulo === 'mod4') corAtual = 'var(--mod4-color)';
    mudarCorModulo(corAtual);

    document.getElementById('tituloAba').innerText = secao.titulo;

    const elSubtitulo = document.getElementById('tituloAba');
    if (elSubtitulo) {
        let nomeModuloTexto = "";

        if (secao.modulo === 'mod1') nomeModuloTexto = "MÓDULO 1 – ESCALPELAMENTO: CAUSAS, CONTEXTOS SOCIOCULTURAIS E TERRITORIAIS, GÊNERO, DETERMINAÇÃO SOCIAL DA SAÚDE E VIGILÂNCIA EPIDEMIOLÓGICA";
        else if (secao.modulo === 'mod2') nomeModuloTexto = "MÓDULO 2 – DIREITOS, PROTEÇÃO SOCIAL E POLÍTICAS PÚBLICAS ÀS PESSOAS EM RISCO OU EM SITUAÇÃO DE ESCALPELAMENTO";
        else if (secao.modulo === 'mod3') nomeModuloTexto = "MÓDULO 3 – SAÚDE MENTAL E ATENÇÃO PSICOSSOCIAL ÀS PESSOAS VÍTIMAS DE ESCALPELAMENTO";
        else if (secao.modulo === 'mod4') nomeModuloTexto = "MÓDULO 4 – PREVENÇÃO, ACOLHIMENTO E COORDENAÇÃO DO CUIDADO NA REDE DE ATENÇÃO À SAÚDE NOS TERRITÓRIOS DAS ÁGUAS";
        else nomeModuloTexto = "CURSO";

        if (secao.modulo && secao.modulo !== 'base') {
            elSubtitulo.innerHTML = `
                <div class="primeira-maiuscula cabecalho-modulo-secundario">${nomeModuloTexto}</div>
                <div class="cabecalho-pagina-destaque">${pagina.header || secao.titulo}</div>
            `;
        } else {
            elSubtitulo.innerHTML = `<div class="cabecalho-pagina-destaque">${secao.titulo}</div>`;
        }
        const areaRolagem = document.querySelector('.scrollable-content-area');
        if (areaRolagem) {
            areaRolagem.scrollTop = 0;
        }
        window.scrollTo(0, 0); // Para garantir também no corpo geral caso esteja em modo mobile/responsivo
        // ==========================================

        const desativarAnterior = (secaoAtualIndex === 0 && paginaInternaIndex === 0);
        document.getElementById('btnAnterior').classList.toggle('disabled', desativarAnterior);
    }

    document.getElementById('paginaAtual').innerText = paginaInternaIndex + 1;
    document.getElementById('totalPaginas').innerText = secao.paginas.length;

    if (secao.id === 'progresso') {
        atualizarPainelProgressoVisual();
    } else {
        document.getElementById('painelConteudo').innerHTML = pagina.html;
    }

    const desativarAnterior = (secaoAtualIndex === 0 && paginaInternaIndex === 0);
    document.getElementById('btnAnterior').classList.toggle('disabled', desativarAnterior);

    $('#menuModulos li').removeClass('active');

    let elMenu = document.getElementById('nav-' + secao.id);
    let linkAtivo = null;
    if (!elMenu) {
        $('#menuModulos a').each(function () {
            let onclickAttr = $(this).attr('onclick');
            if (onclickAttr && (onclickAttr.includes(`mudarSecao('${secao.id}')`) || onclickAttr.includes(`mudarSecao("${secao.id}")`))) {
                linkAtivo = $(this);
                return false;
            }
        });
    }

    if (elMenu) {
        const $el = $(elMenu); $el.addClass('active');

        let submenuPai = $el.closest('.collapse');
        if (submenuPai.length > 0) {
            let nivel2Pai = submenuPai.closest('.nivel2');
            if (nivel2Pai.length > 0) {
                $('#menuModulos .nivel2').not(nivel2Pai).collapse('hide');
                nivel2Pai.collapse('show');
            }
            if (!submenuPai.hasClass('in')) {
                submenuPai.collapse('show');
            }
        }
    } else if (linkAtivo) {
        let liPai = linkAtivo.closest('li');
        liPai.addClass('active');

        let submenuNivel3 = linkAtivo.closest('.nivel3');
        if (submenuNivel3.length > 0) {
            if (!submenuNivel3.hasClass('in')) {
                $('#menuModulos .nivel3.in').not(submenuNivel3).collapse('hide');
                submenuNivel3.collapse('show');
            }
        }

        let submenuNivel2 = linkAtivo.closest('.nivel2');
        if (submenuNivel2.length > 0) {
            $('#menuModulos .nivel2').not(submenuNivel2).collapse('hide');
            if (!submenuNivel2.hasClass('in')) {
                submenuNivel2.collapse('show');
            }
        }
    } else {
        $('#menuModulos .nivel2').collapse('hide');
    }
}


function atualizarPainelProgressoVisual() {
    let secoesConteudo = secoesCurso.filter(s => s.id !== 'progresso');
    let concluidosCount = 0;

    secoesConteudo.forEach((s) => {
        if (progressoConcluido[s.id]) concluidosCount++;
    });

    let percentual = Math.round((concluidosCount / secoesConteudo.length) * 100);

    let itensGerais = secoesConteudo.filter(s => !s.modulo || s.modulo === 'base');

    const nomesModulos = {
        'mod1': 'Módulo 1 | Escalpelamento: causas, contextos socioculturais e territoriais',
        'mod2': 'Módulo 2 | Direitos, proteção social e políticas públicas',
        'mod3': 'Módulo 3 | Saúde mental e atenção psicossocial',
        'mod4': 'Módulo 4 | Prevenção, acolhimento e coordenação do cuidado'
    };

    let htmlConteudo = '';

    itensGerais.forEach((s) => {
        const isConcluido = !!progressoConcluido[s.id];
        const classeCard = isConcluido ? 'progresso-card-item concluido' : 'progresso-card-item pendente';
        const iconeStatus = isConcluido
            ? '<i class="fa fa-check-circle" class="progresso-icone-concluido"></i>'
            : '<i class="fa fa-circle-o" class="progresso-icone-pendente"></i>';

        htmlConteudo += `
            <div class="${classeCard}" onclick="mudarSecao('${s.id}')">
                <span>${s.titulo}</span>
                <span>${iconeStatus}</span>
            </div>
        `;
    });

    ['mod1', 'mod2', 'mod3', 'mod4'].forEach((modKey) => {
        let itensDoModulo = secoesConteudo.filter(s => s.modulo === modKey);

        if (itensDoModulo.length > 0) {
            let cardsModuloHtml = '';

            itensDoModulo.forEach((s) => {
                const isConcluido = !!progressoConcluido[s.id];
                const classeItem = isConcluido ? 'progresso-card-modulo-item concluido' : 'progresso-card-modulo-item pendente';
                const iconeStatus = isConcluido
                    ? '<i class="fa fa-check-circle" class="progresso-icone-mod-concluido"></i>'
                    : '<i class="fa fa-circle-o" class="progresso-icone-mod-pendente"></i>';

                cardsModuloHtml += `
                    <div class="${classeItem}" onclick="mudarSecao('${s.id}')">
                        <span>${s.titulo}</span>
                        <span>${iconeStatus}</span>
                    </div>
                `;
            });

            let tituloModuloNome = nomesModulos[modKey] || `Módulo`;

            htmlConteudo += `
                <div class="progresso-modulo-bloco-espacamento">
                    <h4 class="progresso-modulo-box-titulo">${tituloModuloNome}</h4>
                    <div class="progresso-modulo-container">
                        ${cardsModuloHtml}
                    </div>
                </div>
            `;
        }
    });

    document.getElementById('painelConteudo').innerHTML = `
        <h3 class="progresso-titulo-principal">Seu andamento</h3>
        <p><b>Acompanhe seu progresso através dos módulos concluídos:</b></p>
        <br>
        <div class="progresso-barra-wrapper">
            <div class="ebrima-num progresso-barra-fill-dinamica" style="width:${percentual}%;">${percentual}%</div>
        </div>
        <div>${htmlConteudo}</div>
    `;
}

$(document).ready(function () {
    $('#menuModulos').on('show.bs.collapse', '.collapse', function (e) {
        e.stopPropagation();
        if ($(this.parentNode).closest('#menuModulos').length) {
            $(this).closest('ul').find('> li > .collapse.in').not(this).collapse('hide');
        }
    });

    renderizarAtual();
});
