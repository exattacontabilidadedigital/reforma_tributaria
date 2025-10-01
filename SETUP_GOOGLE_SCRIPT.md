# Configuração do Google Apps Script

## Passo 1: Criar o Script no Google Apps Script

1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Cole o código do script fornecido
4. Salve o projeto com um nome (ex: "Reforma Tributária - Inscrições")

## Passo 2: Configurar a Planilha

1. Crie uma nova planilha no Google Sheets ou use uma existente
2. Copie o ID da planilha da URL (a parte entre `/d/` e `/edit`)
   - Exemplo: `https://docs.google.com/spreadsheets/d/13WzW8nqd4vk0w6_iyrCECgoT91fvMvxXgd7tsW-oCxw/edit`
   - ID: `13WzW8nqd4vk0w6_iyrCECgoT91fvMvxXgd7tsW-oCxw`
3. No script, substitua o ID na linha:
   \`\`\`javascript
   const spreadsheet = SpreadsheetApp.openById('SEU_ID_AQUI');
   \`\`\`

## Passo 3: Implantar como Web App

1. No Apps Script, clique em "Implantar" > "Nova implantação"
2. Clique no ícone de engrenagem e selecione "Aplicativo da Web"
3. Configure:
   - **Descrição**: Formulário de Inscrição - Reforma Tributária
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em "Implantar"
5. Autorize o script quando solicitado
6. Copie a URL do Web App

## Passo 4: Configurar a Variável de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione a URL copiada:
   \`\`\`
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec
   \`\`\`
3. Reinicie o servidor de desenvolvimento

## Passo 5: Testar

1. Acesse a página de inscrição
2. Preencha o formulário
3. Verifique se os dados aparecem na planilha do Google Sheets

## Estrutura da Planilha

O script criará automaticamente duas abas:

### Aba "Inscrições"
- Data/Hora
- Nome Completo
- E-mail
- Telefone
- Empresa
- Cargo
- Porte da Empresa
- Modalidade
- Newsletter

### Aba "Dúvidas" (para uso futuro)
- Data/Hora
- E-mail
- Principais Preocupações
- Tópicos de Interesse
- Dúvidas Específicas

## Solução de Problemas

### Erro de CORS
O modo `no-cors` está configurado no código. Isso é normal para Google Apps Script.

### Dados não aparecem na planilha
1. Verifique se o ID da planilha está correto no script
2. Confirme que você autorizou o script
3. Verifique os logs no Apps Script (Execuções)

### URL não funciona
1. Certifique-se de que implantou como "Aplicativo da Web"
2. Verifique se "Quem tem acesso" está como "Qualquer pessoa"
3. Tente criar uma nova implantação
