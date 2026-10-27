# Gestao de disponibilidade

Atividade para conhecer o ecossistema Angular, consiste na implementação de uma aplicação para gerenciar uma equipe e suas disponibilidades utilizando estado em memória (`Service` + `BehaviorSubject`) para persistir os dados durante a navegação.

**Atividades (O que deve ser feito):**

*   **Front-end:**
    
    *   Criar um `Service` utilizando `BehaviorSubject` para armazenar a lista de usuários e seus respectivos horários. Os dados devem persistir ao transitar entre as telas e ser perdidos apenas ao atualizar ou fechar a aba.
        
    *   **Página 1 (Listagem da Equipe):**
        
        *   Exibir a lista de usuários cadastrados no projeto.
            
        *   Implementar um modal para adicionar um novo usuário, contendo apenas um campo de formulário: `Nome` (obrigatório).
            
    *   **Página 2 (Disponibilidade do Usuário):**
        
        *   Criar uma rota parametrizada (ex: `/usuario/:id`) acessada ao clicar em um usuário da listagem.
            
        *   Exibir o nome do usuário correspondente no topo.
            
        *   Implementar um quadro de horários (formulário) para definir e visualizar a disponibilidade deste usuário específico.
            
    *   Utilizar `ReactiveFormsModule` para gerenciar as validações do modal de criação e do quadro de horários.
        

**Pontos de Atenção:**

*   **Injeção de Dependência:** Certifique-se de que o `Service` de estado esteja configurado com `providedIn: 'root'`. Isso garante que ele atue como um _singleton_ real e mantenha os dados vivos enquanto o `Router` destrói e recria os componentes das páginas.
    
*   **Controle do Modal:** O modal da Página 1 pode ser um componente filho. Utilize os decorators `@Input()` e `@Output()` para passar dados e emitir eventos de fechamento/salvamento para o componente pai da página, ou integre-o diretamente ao fluxo reativo.
    

**Critérios de Aceite:**

*   A navegação entre a Listagem de Equipe e a página de Disponibilidade funciona via Angular Router.
    
*   Os usuários e horários criados não são perdidos ao navegar de uma página para a outra.
    
*   O modal de criação exige apenas o campo "Nome" e bloqueia a submissão se estiver vazio.
    
*   A página de disponibilidade recupera o contexto correto (nome e horários) do usuário selecionado.
