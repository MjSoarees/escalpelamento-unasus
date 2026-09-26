const secoesCurso = [
    {
        id: 'progresso',
        titulo: 'Acompanhe seu progresso',
        modulo: 'base',
        paginas: [
            {
                header: 'ACOMPANHE SEU PROGRESSO',
                html: `
                    <h3 style="margin-top:0;">Seu andamento</h3>
                    <p><b>Acompanhe seu progresso através dos módulos concluídos:</b></p>
                    <br>
                    <div style="background:#e2e8f0; border-radius:4px; height:28px; width:100%; margin-bottom:25px; overflow:hidden; position:relative;">
                        <div id="barraProgressoInterna" style="background:var(--mod-active-color); height:100%; width:0%; transition:width 0.4s ease; display:flex; align-items:center; justify-content:center; color:#fff; font-size:16px; font-weight:bold;" class="ebrima-num">0%</div>
                    </div>
                    <div id="listaProgressoCards"></div>
                `
            }
        ]
    },
    {
        id: 'apresentacao',
        titulo: 'Apresentação',
        modulo: 'base',
        paginas: [
            {
                header: 'Apresentação',
                html: `
                    <p>Olá! Seja bem-vindo(a) ao recurso educacional <b>“Pelos Caminhos das Águas: Atenção Integral em Saúde para População em Risco ou em Situação de Escalpelamento”</b>.</p>
                    
                    <p>Os territórios das águas são marcados por diferentes formas de viver, trabalhar, circular e produzir saúde. Em muitos deles, as embarcações fazem parte da rotina das comunidades e são utilizadas para o deslocamento até a escola, o trabalho, os serviços de saúde, os mercados e outras localidades. Nesse contexto, a segurança das embarcações e a organização da rede de atenção à saúde assumem papel importante na prevenção de acidentes e no cuidado às pessoas afetadas.</b>.</p>
                    <p>O escalpelamento é uma das consequências mais graves de acidentes envolvendo partes móveis de embarcações e outras máquinas. Embora o fenômeno esteja relacionado a diferentes contextos socioprodutivos, sua ocorrência nos territórios das águas envolve características territoriais, sociais, econômicas, culturais e de gênero que precisam ser consideradas nas ações de prevenção e cuidado.</p>                    
                    <p> Este recurso educacional foi elaborado para qualificar profissionais de saúde, gestores públicos, educadores, lideranças comunitárias e sociedade civil sobre prevenção, atenção integral, vigilância e promoção de direitos das pessoas em risco ou em situação de escalpelamento, considerando as especificidades socioculturais e territoriais, com destaque para povos indígenas e população do campo, floresta e água.</p>
                    <p> Este material foi elaborado para qualificar profissionais de saúde, gestores, lideranças comunitárias e outros atores sociais para reconhecer situações de risco, fortalecer ações de prevenção, acolher pessoas em situação de escalpelamento, organizar o cuidado e articular a rede de atenção à saúde. </p>
                    <p> Ao longo da jornada, você acompanhará a realidade de um município fictício da região amazônica e conhecerá pessoas que vivem, trabalham e atuam nesse território. A partir das situações enfrentadas por elas, serão discutidos aspectos relacionados ao escalpelamento, aos direitos, à saúde mental, à prevenção e à organização do cuidado. </p>
                   <p> Prepare-se para percorrer esse território, conhecer seus caminhos e compreender como diferentes setores podem atuar na proteção da saúde das populações das águas.</p>
                    <div class="objetivo-box-logo">
    <!-- Coluna 1: A Logo -->
    <div class="logo-apresentacao-container">
        <img src="./fotos/logo2.png" alt="Logo do Curso" onerror="this.src='./fotos/image.png';">
    </div>

    <!-- Coluna 2: Bloco de Texto (Título + Parágrafo) -->
    <div class="objetivo-conteudo">
        <h4 style="margin-top:0; color:var(--mod-active-color);">Objetivo geral</h4>
        <p style="margin:0;">Qualificar profissionais de saúde, gestores públicos, educadores, lideranças comunitárias e sociedade civil sobre prevenção, atenção integral, vigilância e promoção de direitos das pessoas em risco ou em situação de escalpelamento, considerando as especificidades socioculturais e territoriais, com destaque para povos indígenas e população do campo, floresta e água.</p>
    </div>
</div>

                    

                    <br>
                    <h3>Estrutura do Recurso Educacional</h3>
                    <p>O percurso formativo está estruturado nos seguintes módulos:</p>

                    <!-- SANFONA / ACORDEÃO DOS MÓDULOS -->
                    <div class="panel-group" id="accordionEstruturaCurso" role="tablist" aria-multiselectable="true" style="margin-top:20px;">
                        
                        <!-- MÓDULO 1 -->
                        <div class="panel panel-default" style="border:none; margin-bottom:12px; border-radius:6px; overflow:hidden;">
                            <div class="panel-heading" role="tab" style= "background:#115E53; padding:0; border-radius:6px;;">
                                <h4 class="panel-title" style="margin:0;">
                                    <a role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod1Sanfona" aria-expanded="false" style="color:#ffffff !important; font-weight:bold; text-decoration:none; display:flex; align-items:center; padding:18px 20px;">
                                        <i class="fa fa-plus" style="margin-right:15px; font-size:13px;"></i>
                                        <span>Módulo 1 | Escalpelamento: causas, contextos socioculturais e territoriais, gênero, determinação social da saúde e vigilância epidemiológica</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod1Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body" style="background:#f8fafc; border:1px solid #cbd5e1; border-top:none; padding:20px;">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Analisar os contextos socioterritoriais, culturais e de gênero relacionados ao escalpelamento, identificando fatores de vulnerabilidade, impactos à saúde e estratégias de vigilância e prevenção nos territórios das águas.</p>
                                    <hr style="border-top:1px solid #cbd5e1;">
                                    
                                    <p><b>Unidade 1 | Povos das águas, territórios e contextos do escalpelamento</b></p>
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
                                    <p><b>Unidade 2 | Interseccionalidade, vulnerabilidade social, epidemiologia e Vigilância em Saúde</b></p>
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
                        <div class="panel panel-default" style="border:none; margin-bottom:12px; border-radius:6px; overflow:hidden;">
                            <div class="panel-heading" role="tab" style="background:#115E53; padding:0; border-radius:6px;">
                                <h4 class="panel-title" style="margin:0;">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod2Sanfona" aria-expanded="false" style="color:#ffffff; font-weight:bold; text-decoration:none; display:flex; align-items:center; padding:18px 20px;">
                                        <i class="fa fa-plus" style="margin-right:15px; font-size:16px;"></i>
                                        <span>Módulo 2 | Direitos, proteção social e políticas públicas às pessoas em risco ou em situação de escalpelamento</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod2Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body" style="background:#f8fafc; border:1px solid #cbd5e1; border-top:none; padding:20px;">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Reconhecer os direitos sociais, humanos e institucionais das vítimas de escalpelamento, compreendendo a atuação das políticas públicas e da rede de proteção social.</p>
                                    <hr style="border-top:1px solid #cbd5e1;">

                                    <p><b>Unidade 1 | Direitos humanos, proteção integral e justiça social</b></p>
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
                                    <p><b>Unidade 2 | Acesso a direitos e medidas de proteção</b></p>
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
                        <div class="panel panel-default" style="border:none; margin-bottom:12px; border-radius:6px; overflow:hidden;">
                            <div class="panel-heading" role="tab" style="background:#115E53; padding:0; border-radius:6px;">
                                <h4 class="panel-title" style="margin:0;">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod3Sanfona" aria-expanded="false" style="color:#ffffff; font-weight:bold; text-decoration:none; display:flex; align-items:center; padding:18px 20px;">
                                        <i class="fa fa-plus" style="margin-right:15px; font-size:16px;"></i>
                                        <span>Módulo 3 | Saúde mental e atenção psicossocial às pessoas vítimas de escalpelamento</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod3Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body" style="background:#f8fafc; border:1px solid #cbd5e1; border-top:none; padding:20px;">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Reconhecer os impactos psicossociais do escalpelamento e desenvolver estratégias de cuidado integral, acolhimento e reabilitação psicossocial.</p>
                                    <hr style="border-top:1px solid #cbd5e1;">

                                    <p><b>Unidade 1 | Saúde mental e impactos psicossociais do escalpelamento</b></p>
                                    <p><b>Objetivo de aprendizagem da unidade:</b> Reconhecer os principais impactos psicossociais do escalpelamento e as estratégias de acolhimento e cuidado em saúde mental no SUS.</p>
                                    <p><b>Tópicos:</b></p>
                                    <ul>
                                        <li>Saúde mental e atenção psicossocial no SUS</li>
                                        <li>Rede de Atenção Psicossocial (RAPS)</li>
                                        <li>Interseccionalidade, sofrimento psíquico e vulnerabilidades</li>
                                        <li>Impactos emocionais, sociais e familiares do escalpelamento</li>
                                        <li>Estigma, autoestima, imagem corporal e exclusão social</li>
                                        <li>Acolhimento humanizado e escuta qualificada</li>
                                        <li>Saúde mental de crianças, adolescentes, idosos e mulheres vítimas (ou nos ciclos de vida)</li>
                                        <li>Produção do cuidado nos territórios</li>
                                    </ul>
                                    <br>
                                    <p><b>Unidade 2 | Reabilitação psicossocial e continuidade do cuidado</b></p>
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
                        <div class="panel panel-default" style="border:none; margin-bottom:12px; border-radius:6px; overflow:hidden;">
                            <div class="panel-heading" role="tab" style="background:#115E53; padding:0; border-radius:6px;">
                                <h4 class="panel-title" style="margin:0;">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionEstruturaCurso" href="#mod4Sanfona" aria-expanded="false" style="color:#ffffff; font-weight:bold; text-decoration:none; display:flex; align-items:center; padding:18px 20px;">
                                        <i class="fa fa-plus" style="margin-right:15px; font-size:16px;"></i>
                                        <span>Módulo 4 | Prevenção, acolhimento e coordenação do cuidado na rede de atenção à saúde nos territórios das águas</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="mod4Sanfona" class="panel-collapse collapse" role="tabpanel">
                                <div class="panel-body" style="background:#f8fafc; border:1px solid #cbd5e1; border-top:none; padding:20px;">
                                    <p><b>Objetivo de aprendizagem do módulo:</b> Aplicar estratégias de prevenção, acolhimento e coordenação do cuidado às pessoas vítimas de escalpelamento nos diferentes pontos da Rede de Atenção à Saúde.</p>
                                    <hr style="border-top:1px solid #cbd5e1;">

                                    <p><b>Unidade 1 | Prevenção do escalpelamento e promoção da saúde nos territórios</b></p>
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
                                    <p><b>Unidade 2 | Acolhimento, manejo clínico e coordenação do cuidado na RAS</b></p>
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



    {
        id: 'conhecendo',
        titulo: 'Conhecendo o Território',
        modulo: 'base',
        paginas: [
            {
                header: 'CONHECENDO O TERRITÓRIO: VILA DO ARARI',
                html: `
                    <h3>Conhecendo o Território: Vila do Arari</h3>
                    <p>Vila do Arari é um município amazônico marcado pela presença dos rios e pela mobilidade fluvial. Para parte da população, o barco não é apenas um meio de transporte: é o caminho para chegar à escola, ao trabalho, aos serviços de saúde e aos mercados.</p>
                    <p>O município reúne área urbana, comunidades ribeirinhas, comunidades indígenas e pequenas localidades distribuídas ao longo dos rios e igarapés. As atividades econômicas incluem pesca, agricultura familiar, extrativismo, produção de farinha, comércio local e transporte fluvial.</p>

                    <div class="infografico-container" style="max-width: 900px; margin: 30px auto;">
                        <p style="text-align:center; margin-top:12px; color:#555; font-weight: normal !important;">Mapa geográfico e demográfico: Vila do Arari e suas comunidades</p>
                        <img src="./fotos/mapa.jpg" alt="Mapa de Vila do Arari" style="width:100%; border-radius:6px; display:block;">
                        <p style="text-align:center; margin-top:12px; color:#555; font-weight: normal !important;"><b>Fonte:</b> elaborada pela equipe de produção com auxílio de inteligência artificial generativa, 2026.</p>
                    </div>

                    <br>
                    <h3>Infográfico do Território</h3>
                    <p><b>Clique em cada item do infográfico abaixo para conhecer as características de Vila do Arari.</b></p>
                    
                    <div class="infografico-container" style="max-width: 850px; margin: 30px auto; position: relative;">
                        <img src="./fotos/infografico.png" alt="Infográfico Vila do Arari" style="width: 100%; height: auto; display: block;">
                        <button onclick="abrirModalTerritorio('gerais')" style="position: absolute; top: 5.5%; left: 36.5%; width: 27.5%; height: 13%; background: rgba(0,0,0,0); border: none; cursor: pointer; border-radius: 50px;" title="Dados gerais"></button>
                        <button onclick="abrirModalTerritorio('territorio')" style="position: absolute; top: 28%; left: 8.5%; width: 26%; height: 12.5%; background: rgba(0,0,0,0); border: none; cursor: pointer; border-radius: 50px;" title="Território"></button>
                        <button onclick="abrirModalTerritorio('infraestrutura')" style="position: absolute; top: 26.5%; left: 65.5%; width: 26%; height: 12.5%; background: rgba(0,0,0,0); border: none; cursor: pointer; border-radius: 50px;" title="Infraestrutura"></button>
                        <button onclick="abrirModalTerritorio('agravantes')" style="position: absolute; top: 61.5%; left: 8.5%; width: 26%; height: 12.5%; background: rgba(0,0,0,0); border: none; cursor: pointer; border-radius: 50px;" title="Agravantes"></button>
                        <button onclick="abrirModalTerritorio('riscos')" style="position: absolute; top: 61%; left: 65.5%; width: 26%; height: 12.5%; background: rgba(0,0,0,0); border: none; cursor: pointer; border-radius: 50px;" title="Riscos e desafios"></button>
                    </div>
                   </div> 
                   `
            },
            {
                header: 'Conhecendo o território',
                html: `

                <h3>Conhecendo o Território: Vila do Arari</h3> 
                <p>A distância entre as comunidades e a sede municipal interfere no acesso aos serviços públicos. Em determinadas localidades, o deslocamento até uma unidade de saúde pode exigir horas de viagem. Durante o período de cheia, algumas rotas ficam mais extensas; na estiagem, determinados trechos tornam-se mais difíceis para a navegação.</p>
                
                <p>A mobilidade fluvial também faz parte da rotina das crianças e adolescentes. Meninas e mulheres participam de diferentes atividades familiares, produtivas e comunitárias e utilizam as embarcações para deslocamentos cotidianos.</p>
                
                <p>Nesse cenário, existem embarcações com diferentes condições de conservação e segurança. Parte delas utiliza motores instalados de maneira que deixa componentes móveis acessíveis. Em algumas comunidades, a manutenção é realizada pelos próprios moradores, com recursos limitados e sem acompanhamento técnico regular.</p>
                
                <p>O município conta com serviços de Atenção Primária à Saúde, uma unidade hospitalar de pequeno porte e equipes que percorrem comunidades rurais e ribeirinhas. Entretanto, situações que exigem atendimento especializado precisam ser encaminhadas para outro município, aumentando o tempo de deslocamento e criando desafios para a continuidade do cuidado.</p>
                
                <div class="infografico-container" style="max-width: 900px; margin: 30px auto;">
                        <p style="text-align:center; margin-top:12px; color:#555;">Representação de estudante ribeirinha em canoa na Vila do Arari..</p>
                        <img src="./fotos/ribeirinhos.jpg" alt="Mapa de Vila do Arari" style="width:100%; border-radius:6px; display:block;">
                        <p style="text-align:center; margin-top:12px; color:#555;"><b>Fonte:</b> elaborada pela equipe de produção com auxílio de inteligência artificial generativa, 2026.</p>
                    </div>

                <h3>Os personagens desta história</h3> 
                     <p>Conheça os atores sociais que fazem parte da narrativa em Vila do Arari:</p>

                     <div class="panel-group" id="accordionUnicoPersonagens" role="tablist" style="margin-top:20px;">
<div class="panel panel-default" style="border:1px solid #cbd5e1; border-radius:6px; margin-bottom:12px;">
    <div class="panel-heading" role="tab" style="background:#ffffff; padding:15px 20px; border-radius:6px; ">
        <h4 class="panel-title" style="margin:0;">
            <!-- O !important garante que APENAS este texto mude, ignorando a regra geral do body -->
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionUnicoPersonagens" href="#blocoTodosPersonagens" style="color: #000000 !important; font-weight:bold; text-decoration:none; display:flex; justify-content:space-between; align-items:center; font-size: 16px !important;">
    <span style="color: #115E53 !important; font-size: 16px !important;"><i class="fa fa-users"></i> Clique aqui para ver todos os personagens da história</span>
    <i class="fa fa-chevron-down"></i>
</a>
         </h4>
    </div>
                             <div id="blocoTodosPersonagens" class="panel-collapse collapse" role="tabpanel">
                    <div class="panel-body" style="background:#f8fafc; border-top:1px; padding:25px;">
                                    
                                    <!-- 1. Helena -->
                                    <div class="personagem-card">
                                         <img src="./fotos/Helena.png" alt="Helena Nascimento" class="personagem-img" onerror="this.src='/fotos/Helena.png';">
                                         <div class="personagem-info">
                                            <h4>Helena Nascimento (38 anos | Enfermeira da ESFR)</h4>
                                            <p><b>Raça/cor:</b> Negra | <b>Profissão:</b> Enfermeira da Estratégia Saúde da Família Ribeirinha</p>
                    <p><b>Papel:</b> Personagem principal da saúde. Conhece as comunidades, acompanha as famílias e articula ações de educação.</p>
                                        </div>
                                    </div>
                                    <!-- 2. Jandira -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Jandira.png" alt="Jandira Aruã" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/image.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Jandira Aruã (46 anos | Liderança comunitária)</h4>
                                            <p><b>Identidade:</b> Indígena | <b>Profissão/atuação:</b> Liderança comunitária e agricultora</p>
                                            <p><b>Papel:</b> Representa a participação social e os saberes do território. Conhece as rotas fluviais e defende que a prevenção considere a realidade local. Traz o questionamento: “Como falar de segurança sem desconsiderar a forma como a comunidade vive, trabalha e se desloca?”</p>
                                        </div>
                                    </div>

                                    <!-- 3. Raimundo -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Raimundo.png" alt="Raimundo Ferreira" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Raimundo Ferreira (52 anos | Barqueiro)</h4>
                                            <p><b>Raça/cor:</b> Parda | <b>Profissão:</b> Barqueiro e pequeno transportador</p>
                                            <p><b>Papel:</b> Representa os proprietários e trabalhadores que utilizam embarcações. Sua trajetória mostra como condições econômicas, manutenção, informação e segurança se relacionam.</p>
                                        </div>
                                    </div>

                                    <!-- 4. Luana -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Luana.png" alt="Luana Pereira" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Luana Pereira (15 anos | Adolescente ribeirinha)</h4>
                                            <p><b>Raça/cor:</b> Parda | <b>Profissão:</b> Estudante</p>
                                            <p><b>Papel:</b> Representa crianças e adolescentes que circulam nos territórios das águas. Aborda prevenção, proteção integral, direitos, educação, gênero, imagem corporal, saúde mental e vida escolar.</p>
                                        </div>
                                    </div>

                                    <!-- 5. André Luiz -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/André Luiz.png" alt="André Luiz" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">André Luiz (41 anos | Gestor municipal)</h4>
                                            <p><b>Raça/cor:</b> Branca | <b>Profissão:</b> Coordenador municipal de Atenção à Saúde</p>
                                            <p><b>Papel:</b> Representa a gestão e a organização da rede. Trabalha na transformação de problemas em fluxos, protocolos, planejamento e articulação intersetorial.</p>
                                        </div>
                                    </div>

                                    <!-- 6. Ana Pereira -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Ana Pereira.png" alt="Ana Pereira" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Ana Pereira (39 anos | Mãe de Luana)</h4>
                                            <p><b>Raça/cor:</b> Parda | <b>Profissão/atuação:</b> Agricultora familiar e trabalhadora informal</p>
                                            <p><b>Papel:</b> Representa as famílias que vivem nos territórios das águas. Aborda proteção integral, direitos sociais, participação familiar e articulação com a rede.</p>
                                        </div>
                                    </div>

                                    <!-- 7. Paulo Mendes -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Paulo Mendes.png" alt="Paulo Mendes" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Paulo Mendes (32 anos | Agente Comunitário de Saúde)</h4>
                                            <p><b>Raça/cor:</b> Negro | <b>Profissão:</b> Agente Comunitário de Saúde (ACS)</p>
                                            <p><b>Papel:</b> Representa o vínculo entre os serviços de saúde e as comunidades ribeirinhas. Aborda territorialização, busca ativa, educação em saúde, identificação de riscos e vigilância.</p>
                                        </div>
                                    </div>

                                    <!-- 8. Camila Rocha -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Camila Rocha.png" alt="Camila Rocha" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Camila Rocha (35 anos | Psicóloga da RAPS)</h4>
                                            <p><b>Raça/cor:</b> Branca | <b>Profissão:</b> Psicóloga (Rede de Atenção Psicossocial)</p>
                                            <p><b>Papel:</b> Representa a atenção à saúde mental e articulação com a RAPS e Atenção Primária. Aborda acolhimento, sofrimento psíquico, imagem corporal, estigma, matriciamento e reabilitação.</p>
                                        </div>
                                    </div>

                                    <!-- 9. Marta dos Santos -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:25px; border-bottom:1px solid #e2e8f0; padding-bottom:20px;">
                                        <img src="./fotos/Marta dos Santos.png" alt="Marta dos Santos" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Marta dos Santos (44 anos | Assistente social)</h4>
                                            <p><b>Raça/cor:</b> Negra | <b>Profissão:</b> Assistente social</p>
                                            <p><b>Papel:</b> Representa a proteção social e articulação entre políticas públicas. Aborda direitos, assistência social, educação, orientação às famílias e articulação intersetorial.</p>
                                        </div>
                                    </div>

                                    <!-- 10. Rosa Almeida -->
                                    <div class="personagem-card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:0;">
                                        <img src="./fotos/Rosa Almeida.png" alt="Rosa Almeida" class="personagem-img" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:none; background:transparent; box-shadow:none;" onerror="this.src='./fotos/Jandira.png';">
                                        <div class="personagem-info">
                                            <h4 style="margin-top:0;">Rosa Almeida (34 anos | Sobrevivente de escalpelamento)</h4>
                                            <p><b>Raça/cor:</b> Parda | <b>Profissão/atuação:</b> Artesã e produtora de alimentos</p>
                                            <p><b>Papel:</b> Traz a perspectiva de quem passou pela experiência do escalpelamento e retomou suas atividades. Aborda tratamento, reabilitação, saúde mental, imagem corporal, estigma, autonomia e direitos.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                     </div>
                    `
            }
        ]
    },

    // ==========================================
    // MÓDULO 1 - UNIDADE 1
    // ==========================================
    {
        id: 'm1_apresentacao',

        titulo: 'MÓDULO 1 | Escalpelamento: causas, contextos socioculturais e territoriais, gênero, determinação social da saúde e vigilância epidemiológica',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Apresentação do Módulo',
                html: `
                    <div class="objetivo-box">
                        <h4 style="margin-top:0; color:var(--mod-active-color);">Objetivo de aprendizagem do módulo</h4>
                        <p style="margin:0;">Analisar os contextos socioterritoriais, culturais e de gênero relacionados ao escalpelamento, identificando fatores de vulnerabilidade, impactos à saúde e estratégias de vigilância e prevenção nos territórios das águas.</p>
                    </div>
                    <p>Antes de pensar em como cuidar de uma pessoa em situação de escalpelamento, é preciso compreender onde, como e por que esses acidentes acontecem.</p>
                    <p>No primeiro módulo, você conhecerá os territórios das águas, seus modos de vida, formas de trabalho e deslocamento e os contextos relacionados à ocorrência do escalpelamento.</p>
                    <p>A partir da realidade de Vila do Arari, será possível observar como território, condições sociais, gênero, trabalho, mobilidade e acesso aos serviços de saúde se relacionam com os riscos.</p>
                    <p>Você também conhecerá aspectos epidemiológicos do escalpelamento e a importância da vigilância em saúde para produzir informações que contribuam para a prevenção e para a organização das respostas no território.</p>
                `
            }
        ]
    },
    {
        id: 'm1_contexto',
        titulo: 'Contexto',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Contexto',
                html: `
                    <h3>Caso 1 | O risco que já fazia parte do caminho</h3>
                    <p>Raimundo realiza transporte de passageiros entre uma comunidade ribeirinha e a sede de Vila do Arari. Sua embarcação é antiga e passou por algumas adaptações ao longo dos anos.</p>
                    <p>Durante uma visita ao território, Paulo observa que o motor apresenta partes móveis sem proteção adequada. Também percebe que passageiros, inclusive crianças e adolescentes, permanecem próximos à área do motor durante os deslocamentos.</p>
                    <p>Helena registra a situação e leva o problema para uma reunião com André. Jandira relata que a comunidade já presenciou situações semelhantes em outras embarcações.</p>
                    <p>Raimundo explica que a embarcação é sua principal fonte de renda e que a adaptação do motor representa um custo que ele não consegue assumir naquele momento.</p>
                    <p>A equipe precisa compreender como aquele risco se constituiu e quais fatores do território contribuem para sua permanência.</p>
                    
                    <!-- BLOCO DE PERGUNTAS-DESAFIO ESTILIZADO -->
                    <div class="pergunta-desafio-box">
                        <div class="pergunta-desafio-header">
                            <span><i class="fa fa-question-circle" style="margin-right: 10px;"></i> Perguntas-desafio</span>
                            <i class="fa fa-ship" style="font-size: 24px; opacity: 0.9;"></i>
                        </div>
                        <ul class="pergunta-desafio-lista">
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais situações presentes no território de Vila do Arari podem aumentar o risco de ocorrência de escalpelamento?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como as características dos territórios das águas, os modos de vida, o trabalho e a mobilidade fluvial se relacionam com o risco de escalpelamento?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>De que maneira gênero, idade, condições sociais e características das atividades realizadas no território podem interferir na exposição ao risco?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como a vigilância em saúde pode reconhecer e acompanhar situações de risco para orientar ações de prevenção no território?</div>
                            </li>
                        </ul>
                    </div>
                `
            }
        ]
    },

    // ==========================================
    // MÓDULO 1 - UNIDADE 1
    // ==========================================

    {
        id: 'm1u1_t1',
        titulo: 'Populações do campo, floresta e águas (CFA) e PCTs',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 1 - Povos das águas, territórios e contextos do escalpelamento',
                html: `<h3>Populações do campo, floresta e águas (CFA) e PCTs</h3>
                <p>Conteúdo detalhado sobre os povos e comunidades tradicionais das águas.</p>`
            }
        ]
    },
    {
        id: 'm1u1_t2',
        titulo: 'Territórios, maretórios e modos de vida',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 1 - Povos das águas, territórios e contextos do escalpelamento',
                html: `<h3>Territórios, maretórios e modos de vida</h3><p>Abordagem sobre o conceito de maretório e a dinâmica fluvial.</p>`
            }
        ]
    },


    // ==========================================
    // MÓDULO 1 - UNIDADE 2
    // ==========================================

    {
        id: 'm1u2_t1',
        titulo: 'Perfil epidemiológico das vítimas',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 2 - Interseccionalidade, vulnerabilidade social, epidemiologia e Vigilância em Saúde',
                html: `<h3>Perfil epidemiológico das vítimas</h3><p>Dados estatísticos e características demográficas das pessoas afetadas.</p>`
            }
        ]
    },
    {
        id: 'm1u2_t2',
        titulo: 'Mulheres, meninas e desigualdades de gênero',
        modulo: 'mod1',
        paginas: [
            {
                header: 'Unidade 2 - Interseccionalidade, vulnerabilidade social, epidemiologia e Vigilância em Saúde',
                html: `<h3>Mulheres, meninas e desigualdades de gênero</h3><p>A vulnerabilidade específica de mulheres e crianças nos barcos.</p>`
            }
        ]
    },


    // ==========================================
    // MÓDULO 2
    // ==========================================
    {
        id: 'm2_apresentacao',
        titulo: 'Módulo 2 - Apresentação',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Apresentação do Módulo ',
                html: `
                    <div class="objetivo-box">
                        <h4 style="margin-top:0; color:var(--mod-active-color);">Objetivo de aprendizagem do módulo</h4>
                        <p style="margin:0;">Reconhecer os direitos sociais, humanos e institucionais das vítimas de escalpelamento, compreendendo a atuação das políticas públicas e da rede de proteção social.</p>
                    </div>
                    <p>Um acidente não termina quando a emergência é atendida. Uma pessoa em situação de escalpelamento pode precisar de cuidados de saúde, acompanhamento social, apoio à família, orientação sobre direitos, reabilitação e suporte para retomar atividades escolares, profissionais e comunitárias.</p>
                    <p>Neste módulo, você conhecerá os direitos das pessoas em situação de escalpelamento e os caminhos de acesso às políticas públicas e à rede de proteção social.</p>
                `
            }
        ]
    },
    {
        id: 'm2_contexto',
        titulo: 'Contexto',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Contexto',
                html: `
                    <h3>Caso 2 | Depois do acidente</h3>
                    <p>Luana, de 15 anos, sofre um acidente durante uma viagem de barco com a mãe. O acidente acontece no trajeto entre sua comunidade e a sede municipal. Após o primeiro atendimento, ela precisa ser encaminhada para um serviço de referência fora do município.</p>
                    <p>Ana acompanha a filha e precisa interromper temporariamente suas atividades de trabalho. Enquanto isso, a escola procura informações sobre como garantir a continuidade da vida escolar de Luana.</p>
                    <p>Marta, assistente social, tenta organizar os encaminhamentos, mas identifica que a família não conhece os serviços que pode acessar e que os profissionais também têm dúvidas sobre os fluxos existentes.</p>
                    <p>André percebe que a situação revela uma dificuldade maior: o município não tem um fluxo suficientemente articulado para acompanhar a pessoa e a família depois do atendimento inicial.</p>
                    
                    <!-- BLOCO DE PERGUNTAS-DESAFIO ESTILIZADO -->
                    <div class="pergunta-desafio-box">
                        <div class="pergunta-desafio-header">
                            <span><i class="fa fa-question-circle" style="margin-right: 10px;"></i> Perguntas-desafio</span>
                            <i class="fa fa-ship" style="font-size: 24px; opacity: 0.9;"></i>
                        </div>
                        <ul class="pergunta-desafio-lista">
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais direitos precisam ser considerados no cuidado de uma pessoa em situação de escalpelamento e de sua família?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como os serviços de saúde, assistência social e educação podem atuar de forma articulada para garantir proteção integral?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais políticas públicas e medidas de proteção podem ser acionadas diante das necessidades apresentadas por Luana e sua família?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como organizar os fluxos de acesso aos serviços e à rede de proteção para evitar que a família precise enfrentar sozinha os diferentes caminhos institucionais?</div>
                            </li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    // ==========================================
    // MÓDULO 2 - UNIDADE 1
    // ==========================================

    {
        id: 'm2u1',
        titulo: 'Direitos humanos e populações vulnerabilizadas ',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 1 - Direitos humanos, proteção integral e justiça social',
                html: `<h3>Direitos humanos e proteções</h3><p>Conteúdo do Módulo 2.</p>`
            }
        ]
    },
    {
        id: 'm2u2',
        titulo: 'Proteção integral à infância e adolescência',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Unidade 1 - Direitos humanos, proteção integral e justiça social',
                html: `<h3>Proteção integral à infância e adolescência</h3><p>Conteúdo do Módulo 2.</p>`
            }
        ]
    },

    // ==========================================
    // MÓDULO 2 - UNIDADE 2
    // ==========================================

    {
        id: 'm2u2',
        titulo: 'Módulo 2 - Unidade 2',
        modulo: 'mod2',
        paginas: [
            {
                header: 'Módulo 2 | Unidade 2<br>Legislação e Prevenção',
                html: `<h3>Legislação e Prevenção</h3><p>Lei de segurança em embarcações.</p>`
            }
        ]
    },


    // ==========================================
    // MÓDULO 3 
    // ==========================================
    {
        id: 'm3_apresentacao',
        titulo: 'Módulo 3 - Apresentação',
        modulo: 'mod3',
        paginas: [
            {
                header: 'Apresentação do Módulo ',
                html: `
                    <div class="objetivo-box">
                        <h4 style="margin-top:0; color:var(--mod-active-color);">Objetivo de aprendizagem do módulo</h4>
                        <p style="margin:0;">Reconhecer os impactos psicossociais do escalpelamento e desenvolver estratégias de cuidado integral, acolhimento e reabilitação psicossocial.</p>
                    </div>
                    <p>Depois do atendimento inicial, outros desafios podem surgir. As repercussões do escalpelamento ultrapassam as lesões físicas e podem afetar a autoestima, a imagem corporal, os vínculos familiares, a convivência social, a escolarização, o trabalho e os projetos de vida.</p>
                    <p>Neste módulo, você conhecerá os impactos psicossociais relacionados ao escalpelamento e os caminhos para o acolhimento, a atenção em saúde mental e a reabilitação psicossocial.</p>
                `
            }
        ]
    },

    {
        id: 'm3_contexto',
        titulo: 'Contexto',
        modulo: 'mod3',
        paginas: [
            {
                header: 'Contexto',
                html: `
                    <h3>Caso 3 | Rosa e o que acontece depois</h3>
                    <p>Rosa sofreu um escalpelamento na adolescência e, anos depois, ainda enfrenta situações relacionadas à imagem corporal e ao modo como é percebida socialmente. Ela evita determinadas atividades comunitárias e relata que, em alguns períodos, prefere não sair de casa.</p>
                    <p>Durante uma atividade de educação em saúde, Rosa conversa com Helena e Camila sobre sua experiência. A equipe percebe que, apesar de Rosa ter recebido atendimento médico após o acidente, seu acompanhamento em saúde mental não ocorreu de forma contínua. Ao mesmo tempo, Rosa relata que encontrou apoio em pessoas da própria comunidade e que voltar ao trabalho foi parte importante de sua reconstrução da vida.</p>
                    <p>O caso permite mostrar que o cuidado não termina com a alta hospitalar nem se resume ao tratamento das lesões físicas.</p>
                    
                    <!-- BLOCO DE PERGUNTAS-DESAFIO ESTILIZADO -->
                    <div class="pergunta-desafio-box">
                        <div class="pergunta-desafio-header">
                            <span><i class="fa fa-question-circle" style="margin-right: 10px;"></i> Perguntas-desafio</span>
                            <i class="fa fa-ship" style="font-size: 24px; opacity: 0.9;"></i>
                        </div>
                        <ul class="pergunta-desafio-lista">
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais impactos emocionais, familiares e sociais podem acompanhar uma pessoa após um escalpelamento?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como o estigma, a imagem corporal e as mudanças na vida social podem repercutir na saúde mental das pessoas em situação de escalpelamento?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como a Atenção Primária, a RAPS, a família e a comunidade podem participar do cuidado em saúde mental?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais estratégias podem contribuir para a reabilitação psicossocial, a retomada dos vínculos e a continuidade do cuidado no território?</div>
                            </li>
                        </ul>
                    </div>
                `
            }
        ]
    },

    {
        id: 'm3_t1',
        titulo: 'Título do Tópico do Novo Módulo',
        modulo: 'mod3',
        paginas: [
            {
                header: 'Unidade 1',
                html: `<h3>Conteúdo do novo módulo</h3><p>Texto da página...</p>`
            }
        ]
    },

    // ==========================================
    // MÓDULO 4 
    // ==========================================
    {
        id: 'm4_apresentacao',
        titulo: 'Módulo 4 - Apresentação',
        modulo: 'mod4',
        paginas: [
            {
                header: 'Apresentação do Módulo ',
                html: `
                    <div class="objetivo-box">
                        <h4 style="margin-top:0; color:var(--mod-active-color);">Objetivo de aprendizagem do módulo</h4>
                        <p style="margin:0;">Aplicar estratégias de prevenção, acolhimento e coordenação do cuidado às pessoas vítimas de escalpelamento nos diferentes pontos da Rede de Atenção à Saúde.</p>
                    </div>
                    <p>Prevenir novos acidentes e garantir continuidade do cuidado exige articulação. No último módulo, você retornará ao território de Vila do Arari para acompanhar a construção de estratégias de prevenção e organização do cuidado.</p>
                `
            }
        ]
    },
    {
        id: 'm4_contexto',
        titulo: 'Contexto',
        modulo: 'mod4',
        paginas: [
            {
                header: 'Contexto',
                html: `
                    <h3>Caso 4 | Um novo alerta no território</h3>
                    <p>Meses depois do acidente de Luana, Paulo identifica uma nova situação de risco durante uma visita à comunidade. Uma embarcação utilizada para transportar moradores apresenta condições semelhantes às observadas anteriormente.</p>
                    <p>Ao mesmo tempo, Helena recebe a informação de que uma criança quase se aproximou do motor durante uma viagem. Jandira leva a situação para uma reunião comunitária. Raimundo participa do encontro e argumenta que os proprietários precisam de orientação e condições para adequar suas embarcações.</p>
                    <p>André reúne os profissionais da saúde e representantes de outros setores para discutir o problema. A pergunta deixa de ser apenas "o que fazer diante de um acidente?" Agora é: "O que o município precisa organizar para que o acidente não aconteça?"</p>
                    
                    <!-- BLOCO DE PERGUNTAS-DESAFIO ESTILIZADO -->
                    <div class="pergunta-desafio-box">
                        <div class="pergunta-desafio-header">
                            <span><i class="fa fa-question-circle" style="margin-right: 10px;"></i> Perguntas-desafio</span>
                            <i class="fa fa-ship" style="font-size: 24px; opacity: 0.9;"></i>
                        </div>
                        <ul class="pergunta-desafio-lista">
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Quais estratégias podem ser desenvolvidas em Vila do Arari para prevenir o escalpelamento e promover a segurança nos territórios das águas?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como as equipes de saúde podem desenvolver ações educativas e de comunicação que dialoguem com a realidade das comunidades?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como deve ocorrer o acolhimento e o manejo inicial de uma pessoa em situação de escalpelamento até sua inserção na rede de atenção?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como organizar os fluxos entre Atenção Primária, atenção especializada, reabilitação e saúde mental para garantir continuidade do cuidado?</div>
                            </li>
                            <li>
                                <div class="pergunta-icone-circulo"><i class="fa fa-question"></i></div>
                                <div>Como diferentes setores e atores do território podem atuar de forma articulada na prevenção e na atenção às pessoas em situação de escalpelamento?</div>
                            </li>
                        </ul>
                    </div>
                `
            }
        ]
    },

    {
        id: 'm4_t1',
        titulo: 'Título do Tópico do Novo Módulo',
        modulo: 'mod4',
        paginas: [
            {
                header: 'Apresentação',
                html: `<h3>Conteúdo do novo módulo</h3><p>Texto da página...</p>`
            }
        ]
    },



    // ==========================================
    // FINAIS
    // ==========================================
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
        paginaInternaIndex = 0; // Reseta para a primeira página

        // 1. Remove o 'active' de absolutamente TUDO no menu lateral
        $('#menuModulos li, #menuModulos a').removeClass('active');

        // 2. Adiciona o 'active' EXATAMENTE no <li> correspondente ao ID da seção atual
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

    let corAtual = '#115E53';
    if (secao.modulo === 'mod1') corAtual = '#115E53';
    else if (secao.modulo === 'mod2') corAtual = '#205758' ;
    else if (secao.modulo === 'mod3') corAtual =  '#0f4c5c';
    else if (secao.modulo === 'mod4') corAtual = '#365314';
    mudarCorModulo(corAtual);

    document.getElementById('tituloAba').innerText = secao.titulo;

    const elSubtitulo = document.getElementById('tituloAba');
    if (elSubtitulo) {
        let nomeModuloTexto = "";

        // Define o texto base superior de acordo com o módulo
        if (secao.modulo === 'mod1') nomeModuloTexto = "MÓDULO 1 | Escalpelamento: causas, contextos socioculturais e territoriais, gênero, determinação social da saúde e vigilância epidemiológica";
        else if (secao.modulo === 'mod2') nomeModuloTexto = "MÓDULO 2 | Direitos, proteção social e políticas públicas às pessoas em risco ou em situação de escalpelamento";
        else if (secao.modulo === 'mod3') nomeModuloTexto = "MÓDULO 3 | Saúde mental e atenção psicossocial às pessoas vítimas de escalpelamento";
        else if (secao.modulo === 'mod4') nomeModuloTexto = "Módulo 4 | Prevenção, acolhimento e coordenação do cuidado na Rede de Atenção à Saúde nos territórios das águas";
        else nomeModuloTexto = "Curso";

        // Se estiver dentro de um módulo, exibe o nome do módulo em cima (suave/opaco) e o título embaixo em destaque com a cor do tema
        if (secao.modulo && secao.modulo !== 'base') {
            elSubtitulo.innerHTML = `
                <div style="font-size: 12px !important; font-weight: normal; margin-bottom: 2px; color: rgba(0, 0, 0, 0.65); text-transform: uppercase;">${nomeModuloTexto}</div>
                <div style="font-size: 22px !important; font-weight: bold; color: var(--mod-active-color);">${pagina.header || secao.titulo}</div>
            `;
        } else {
            elSubtitulo.innerHTML = `<div style="font-size: 22px !important; font-weight: bold; color: var(--mod-active-color);">${secao.titulo}</div>`;
        }
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

// ==========================================
    // CONTROLE DE DESTAQUE E ACORDEÃO PERSISTENTE
    // ==========================================
    $('#menuModulos li').removeClass('active');

    // 1. Tenta encontrar pelo ID exato no menu (ex: nav-m1_apresentacao, nav-m2u1, etc.)
    let elMenu = document.getElementById('nav-' + secao.id);

    // 2. Se não achar, tenta buscar pelo link que contenha o onclick da seção atual
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
        const $el = $(elMenu);$el.addClass('active');

        // Abre as gavetas pai (Nível 3 e Nível 2) corretamente
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

        // Abre o submenu de nível 3 se existir
        let submenuNivel3 = linkAtivo.closest('.nivel3');
        if (submenuNivel3.length > 0) {
            if (!submenuNivel3.hasClass('in')) {
                $('#menuModulos .nivel3.in').not(submenuNivel3).collapse('hide');
                submenuNivel3.collapse('show');
            }
        }

        // Abre o submenu de nível 2 e fecha os outros módulos
        let submenuNivel2 = linkAtivo.closest('.nivel2');
        if (submenuNivel2.length > 0) {
            $('#menuModulos .nivel2').not(submenuNivel2).collapse('hide');
            if (!submenuNivel2.hasClass('in')) {
                submenuNivel2.collapse('show');
            }
        }
    } else {
        // Se for uma seção raiz, fecha os módulos
        $('#menuModulos .nivel2').collapse('hide');
    }
}

function abrirModalTerritorio(tipo) {
    let titulo = '';
    let conteudo = '';

    if (tipo === 'gerais') {
        titulo = 'Dados gerais de Vila do Arari';
        conteudo = `
        <p>Vila do Arari integra a região hidrográfica amazônica, com forte dependência da mobilidade fluvial.</p>
        <hr>
        <ul>
            <li><strong>Área territorial:</strong> 2.146 km²</li>
            <li><strong>População estimada:</strong> 31.800 Habitantes</li>
            <li><strong>População urbana:</strong> 34%</li>
            <li><strong>População rural e ribeirinha:</strong> 66%</li>
            <li><strong>Densidade demográfica:</strong> Aproximadamente 15 habitantes/km²</li>
            <li><strong>Crianças e adolescentes:</strong> Cerca de 30% da população</li>
            <li><strong>Principais atividades econômicas:</strong>
                <ul>
                    <li>Pesca;</li>
                    <li>Agricultura familiar;</li>
                    <li>Produção de farinha;</li>
                    <li>Extrativismo;</li>
                    <li>Comércio;</li>
                    <li>Transporte fluvial;</li>
                    <li>Pequenos serviços.</li>
                </ul>
            </li>
            <li>Parte significativa das famílias depende diretamente dos rios para mobilidade, alimentação e geração de renda.</li>
        </ul>
    `;
    } else if (tipo === 'territorio') {
        titulo = 'Território de Vila do Arari';
        conteudo = `
        <p><strong>Vila do Arari é formada por:</strong></p>
        <ul>
            <li>Uma sede municipal;</li>
            <li>Comunidades ribeirinhas distribuídas às margens do rio Arari e de seus afluentes;</li>
            <li>Comunidades indígenas;</li>
            <li>Comunidades tradicionais;</li>
            <li>Áreas de floresta;</li>
            <li>Pequenas áreas de produção agrícola;</li>
            <li>Portos e pontos informais de embarque e desembarque;</li>
            <li>Escolas localizadas em comunidades distantes da sede;</li>
            <li>Unidades de saúde com diferentes níveis de cobertura.</li>
        </ul>

        <h4>Características da mobilidade</h4>
        <ul>
            <li>Transporte predominantemente fluvial em várias comunidades;</li>
            <li>Barcos utilizados para transporte de passageiros e cargas;</li>
            <li>Embarcações particulares utilizadas pelas famílias;</li>
            <li>Barcos escolares;</li>
            <li>Embarcações de pesca;</li>
            <li>Pequenas embarcações utilizadas para acesso aos serviços públicos.</li>
        </ul>

        <h4>Locais sensíveis</h4>
        <ul>
            <li>Escolas ribeirinhas;</li>
            <li>Portos e atracadouros;</li>
            <li>Mercados;</li>
            <li>Feiras;</li>
            <li>Unidades de saúde;</li>
            <li>Oficinas de manutenção de motores;</li>
            <li>Residências onde ocorre manutenção de embarcações;</li>
            <li>Áreas de circulação de crianças próximas aos motores.</li>
        </ul>
    `;

    } else if (tipo === 'infraestrutura') {
        titulo = 'Infraestrutura de Vila do Arari';
        conteudo = `
        <h4>Saúde</h4>
        <ul>
            <li>4 Unidades Básicas de Saúde;</li>
            <li>1 Equipe de Saúde da Família Ribeirinha;</li>
            <li>1 equipe de atendimento fluvial com roteiros periódicos;</li>
            <li>1 hospital municipal de pequeno porte;</li>
            <li>1 serviço de ambulância terrestre na sede;</li>
            <li>Referência para atendimento especializado em município regional;</li>
            <li>Equipe multiprofissional com atuação periódica;</li>
            <li>Vigilância em saúde municipal;</li>
            <li>Assistência social.</li>
        </ul>

        <h4>Saúde mental</h4>
        <p>O município não conta com todos os pontos da Rede de Atenção Psicossocial (RAPS) necessários para acompanhamento especializado, utilizando serviços de referência regional.</p>

        <h4>Educação</h4>
        <ul>
            <li>Escolas urbanas;</li>
            <li>Escolas ribeirinhas;</li>
            <li>Transporte escolar fluvial;</li>
            <li>Estudantes que utilizam pequenas embarcações para chegar às aulas.</li>
        </ul>

        <h4>Transporte</h4>
        <ul>
            <li>Pequeno porto municipal;</li>
            <li>Pontos comunitários de embarque;</li>
            <li>Oficinas de manutenção;</li>
            <li>Embarcações particulares;</li>
            <li>Barcos utilizados para transporte escolar e de passageiros.</li>
        </ul>
    `;

    } else if (tipo === 'agravantes') {
        titulo = 'Agravantes e vulnerabilidades';
        conteudo = `
        <h4>Condições das embarcações</h4>
        <ul>
            <li>Motores com partes móveis sem proteção adequada;</li>
            <li>Embarcações antigas;</li>
            <li>Manutenção irregular;</li>
            <li>Adaptações realizadas pelos próprios proprietários;</li>
            <li>Dificuldade de acesso a peças e serviços especializados;</li>
            <li>Uso simultâneo da área de passageiros e da área do motor em determinadas embarcações.</li>
        </ul>

        <h4>Condições sociais e territoriais</h4>
        <ul>
            <li>Baixa renda de parte das famílias;</li>
            <li>Longas distâncias entre comunidades;</li>
            <li>Dependência do transporte fluvial;</li>
            <li>Dificuldade de acesso regular aos serviços;</li>
            <li>Circulação de crianças e adolescentes nas embarcações;</li>
            <li>Necessidade de deslocamento para atividades escolares, comerciais e de saúde.</li>
        </ul>

        <h4>Aspectos culturais e cotidianos</h4>
        <ul>
            <li>Barco integrado à rotina familiar;</li>
            <li>Crianças acompanhando familiares em deslocamentos;</li>
            <li>Práticas de manutenção transmitidas entre gerações;</li>
            <li>Percepção diferenciada sobre riscos;</li>
            <li>Conhecimento comunitário sobre navegação que nem sempre é acompanhado de informações sobre a prevenção do escalpelamento.</li>
        </ul>

        <h4>Organização dos serviços</h4>
        <ul>
            <li>Dificuldade para transporte rápido em situações de emergência;</li>
            <li>Necessidade de transferência para outro município;</li>
            <li>Distância dos serviços especializados;</li>
            <li>Fragilidade dos fluxos formalizados;</li>
            <li>Pouca integração entre prevenção, assistência, vigilância e assistência social.</li>
        </ul>
    `;

    } else if (tipo === 'riscos') {
        titulo = 'Riscos e desafios';
        conteudo = `
        <h4>Riscos</h4>
        <ul>
            <li>Acidentes com motores de embarcações;</li>
            <li>Ausência ou inadequação de proteção de partes móveis;</li>
            <li>Circulação de crianças e adolescentes próximas ao motor;</li>
            <li>Cabelos longos próximos a componentes móveis;</li>
            <li>Acidentes durante embarque e desembarque;</li>
            <li>Acidentes durante manutenção;</li>
            <li>Demora no acesso ao atendimento;</li>
            <li>Repercussões físicas, psicológicas, sociais e econômicas;</li>
            <li>Interrupção da escolarização;</li>
            <li>Alterações na vida familiar e comunitária.</li>
        </ul>

        <h4>Desafios para o município</h4>
        <ul>
            <li>Identificar situações de risco antes da ocorrência do acidente;</li>
            <li>Ampliar ações educativas;</li>
            <li>Articular saúde, educação, assistência social e outros setores;</li>
            <li>Melhorar os fluxos de atendimento;</li>
            <li>Organizar a referência e a contrarreferência;</li>
            <li>Garantir acolhimento;</li>
            <li>Acompanhar a saúde mental;</li>
            <li>Promover reabilitação e reinserção social;</li>
            <li>Qualificar os registros e a vigilância;</li>
            <li>Orientar sobre direitos;</li>
            <li>Fortalecer a participação comunitária.</li>
        </ul>
    `;
    }

    document.getElementById('modalTerritorioTitulo').innerText = titulo;
    document.getElementById('modalTerritorioTexto').innerHTML = conteudo;
    $('#modalTerritorioPopup').modal('show');
}

function atualizarPainelProgressoVisual() {
    let secoesConteudo = secoesCurso.filter(s => s.id !== 'progresso');
    let concluidosCount = 0;
    let htmlCards = '';

    secoesConteudo.forEach((s) => {
        const isConcluido = !!progressoConcluido[s.id];
        if (isConcluido) concluidosCount++;

        const iconeStatus = isConcluido
            ? '<i class="fa fa-check-circle" style="color:#059669; font-size:22px;"></i>'
            : '<i class="fa fa-circle-o" style="color:#bbb; font-size:22px;"></i>';

        htmlCards += `
            <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:6px; padding:18px 22px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center; font-weight:700; cursor:pointer;" onclick="mudarSecao('${s.id}')">
                <span>${s.titulo}</span>
                <span>${iconeStatus}</span>
            </div>
        `;
    });

    let percentual = Math.round((concluidosCount / secoesConteudo.length) * 100);

    document.getElementById('painelConteudo').innerHTML = `
        <h3 style="margin-top:0;">Seu andamento</h3>
        <p><b>Acompanhe seu progresso através dos módulos concluídos:</b></p>
        <br>
        <div style="background:#e2e8f0; border-radius:4px; height:28px; width:100%; margin-bottom:25px; overflow:hidden; position:relative;">
            <div style="background:var(--mod-active-color); height:100%; width:${percentual}%; display:flex; align-items:center; justify-content:center; color:#fff; font-size:16px; font-weight:bold;" class="ebrima-num">${percentual}%</div>
        </div>
        <div>${htmlCards}</div>
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